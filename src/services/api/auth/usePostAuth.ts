import { createData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

import { UserSession, VerifyUserModel } from './type';
const fetchLogin = (model: VerifyUserModel): Promise<UserSession> =>
  createData<VerifyUserModel, UserSession>('/auth/login', model);

export const usePostLogin = () => {
  const { mutate: login, isPending } = useMutation({
    mutationFn: fetchLogin,
  });

  return {
    login,
    isPending,
  };
};
