'use server';

import { signOut } from '@/auth';

export const LogoutAction = async () => {
  try {
    return await signOut({
      redirect: false,
      redirectTo: '/auth/login',
    });
  } catch (error) {
    return {
      error: error,
    };
  }
};
