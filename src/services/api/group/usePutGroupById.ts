import { updateData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

import { IGroup } from './type';

const putGroupById = (model: Required<IGroup>): Promise<void> =>
  updateData<IGroup, void>(`/group/update/${model.id}`, model);

export const usePutGroupById = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: putGroupById,
  });

  return {
    post,
    isPending,
  };
};
