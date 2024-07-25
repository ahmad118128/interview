import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

import { DASHBOARD, authRoutes, defaultRoute } from './routes';

const { auth } = NextAuth(authConfig);

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api)(.*)'],
};

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  const isHome = defaultRoute === nextUrl.pathname;

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DASHBOARD, nextUrl));
    }
    return;
  }

  if (isLoggedIn) {
    if (isHome) {
      return Response.redirect(new URL('/dashboard', nextUrl));
    }
  }

  // if (!isLoggedIn) {
  //   return Response.redirect(new URL('/login', nextUrl));
  // }

  return;
});
