import { updateData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

import { IModule } from './type';

const putModules = (model: Required<IModule>): Promise<void> =>
  updateData<IModule, void>(`/modules/update/${model.id}`, model);

export const usePutModules = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: putModules,
  });

  return {
    post,
    isPending,
  };
};
