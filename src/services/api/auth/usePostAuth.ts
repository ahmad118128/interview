import { createData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

import { VerifyUserModel } from './type';

const fetchLogin = (model: VerifyUserModel): Promise<void> =>
  createData<VerifyUserModel, void>('/auth/login', model);

export const usePostLogin = () => {
  const { mutate: login, isPending } = useMutation({
    mutationFn: fetchLogin,
  });

  return {
    login,
    isPending,
  };
};
