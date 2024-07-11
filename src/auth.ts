import NextAuth, { AuthError } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { UserResponse } from './actions/auth/type';
import { API_URL } from './configs/global';
import { JWT } from 'next-auth/jwt';

type User = {
  id?: string;
  username: string;
  email?: string | null;
  role: any;
};

declare module 'next-auth' {
  interface User {
    id?: string;
    username: string;
    email?: string | null;
    role: any;
  }

  interface Session {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User;
  }
}

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
          });

          const user: UserResponse = await res.json();
          if (res.ok) {
            return user;
          }
          return null;
        } catch (error: unknown) {
          throw new AuthError();
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    async session({ token, session }) {
      Object.assign(session.user, token.user ?? {});
      return session;
    },
  },
});
