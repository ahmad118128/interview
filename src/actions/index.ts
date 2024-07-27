'use server';

import { serverActionWrapper } from './serverActionWrapper';
import { OperationResult, TUserModel, UserResponse } from './type';
import { createData } from '@/services/core/http-service';

export async function onLoginAction(
  prevState: OperationResult<UserResponse> | null,
  data: FormData
): Promise<OperationResult<UserResponse>> {
  // Convert FormData to a TUserModel object
  const formData: TUserModel = {
    username: data.get('username') as string,
    password: data.get('password') as string,
  };

  // Wrap the createData function call with serverActionWrapper
  return serverActionWrapper<UserResponse>(
    async () =>
      await createData<TUserModel, UserResponse>('/auth/login', formData)
  );
}
