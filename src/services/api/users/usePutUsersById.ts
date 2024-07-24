import { updateData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

import { IUser } from './type';

const putUsersById = (model: Required<IUser>): Promise<void> =>
  updateData<IUser, void>(`/users/update/${model.id}`, model);

export const usePutUsersById = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: putUsersById,
  });

  return {
    post,
    isPending,
  };
};
