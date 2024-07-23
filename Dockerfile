FROM nexus.nextaibox.com/node:20.9.0-alpine AS builder
#RUN apt-get update && apt-get install -y autoconf automake build-essential libtool nasm pkgconf
RUN apk update && apk add --no-cache autoconf automake build-base libtool nasm pkgconf
RUN npm config set registry https://nexus.nextaibox.com/repository/npm/
RUN npm config set "strict-ssl" false

WORKDIR /roobin_web
COPY package.json package-lock.json ./
RUN npm config set “strict-ssl” false

RUN npm install

COPY . /roobin_web
ENV $(cat env-env.txt | xargs) 
RUN npm run build

FROM nexus.nextaibox.com/node:20.9.0-alpine AS runner
WORKDIR /roobin_web
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
COPY --from=builder /roobin_web/public ./public
COPY --from=builder /roobin_web/.next ./.next
COPY --from=builder /roobin_web/node_modules ./node_modules
COPY --from=builder /roobin_web/package.json ./package.json
COPY --from=builder /roobin_web/next.config.js ./next.config.js

CMD ["npm","run","start"]






