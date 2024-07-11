import { createData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

import { IUser } from './type';

const addUser = (model: IUser): Promise<void> =>
  createData<IUser, void>('/users/', model);

export const useAddUser = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: addUser,
  });

  return {
    post,
    isPending,
  };
};
