'use server';

import { signIn } from '@/auth';
import { OperationResult, TUserModel } from './type';
import { generalStr } from '@/strings';
import { AuthError } from 'next-auth';

export async function login(
  state: OperationResult<void> | undefined,
  model: TUserModel
) {
  try {
    await signIn('credentials', {
      username: model.username,
      password: model.password,
    });

    return {
      isSuccess: true,
    } satisfies OperationResult<void>;
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            isSuccess: false,
            error: generalStr.credentialsSignInError,
          } satisfies OperationResult<void>;
        default:
          return {
            isSuccess: false,
            error: generalStr.defaultErrorMessage,
          } satisfies OperationResult<void>;
      }
    }
    throw error;
  }
}
