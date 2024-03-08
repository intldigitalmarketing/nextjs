'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

interface Login {
  username: string;
  password: string;
  redirectUrl: string;
}

export const LoginAction = async ({
  username,
  password,
  redirectUrl,
}: Login) => {
  try {
    return await signIn('credentials', {
      username: username,
      password: password,
      redirectTo: redirectUrl,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            error: 'Invalid credentials.',
          };
        default:
          return {
            error: 'Something went wrong.',
          };
      }
    }
    return {
      error: error,
    };
  }
};
