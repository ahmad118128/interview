import { createData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

import { IPostConfiguration } from './type';

const postGroup = (model: IPostConfiguration): Promise<void> =>
  createData<IPostConfiguration, void>('/configuration/parameter/', model);

export const usePostGroup = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: postGroup,
  });

  return {
    post,
    isPending,
  };
};
