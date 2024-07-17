import { createData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

import { IModule } from './type';

const postModules = (model: IModule): Promise<void> =>
  createData<IModule, void>('/modules/', model);

export const usePostModules = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: postModules,
  });

  return {
    post,
    isPending,
  };
};
