import { updateData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

import { IPerson } from './type';

const putPersons = (model: Required<IPerson>): Promise<void> =>
  updateData<IPerson, void>(`/users/update/${model.id}`, model);

export const usePutPersons = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: putPersons,
  });

  return {
    post,
    isPending,
  };
};
