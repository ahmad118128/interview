import { createData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

import { IGroup } from './type';

const postGroup = (model: IGroup): Promise<void> =>
  createData<IGroup, void>('/group/', model);

export const usePostGroup = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: postGroup,
  });

  return {
    post,
    isPending,
  };
};
