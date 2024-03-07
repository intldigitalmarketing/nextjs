import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const config = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = { id: '1', name: 'Yogsal', password: '123456' };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  // basePath: '/auth',
  // callbacks: {
  //   authorized({ request, auth }) {
  //     const { pathname } = request.nextUrl;
  //     // console.log(pathname);
  //     return true;
  //   },
  //   jwt({ token, trigger, session }) {
  //     if (trigger === 'update') token.name = session.user.name;
  //     return token;
  //   },
  // },
} satisfies NextAuthConfig;

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth(config);
