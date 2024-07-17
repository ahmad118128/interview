import { createData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

import { IPerson } from './type';

const postPerson = (model: IPerson): Promise<void> =>
  createData<IPerson, void>('/persons/', model);

export const usePostPerson = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: postPerson,
  });

  return {
    post,
    isPending,
  };
};
