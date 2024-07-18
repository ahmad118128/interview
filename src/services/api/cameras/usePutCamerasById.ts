import { updateData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

import { ICamera } from './type';

const putCamerasById = (model: Required<ICamera>): Promise<void> =>
  updateData<ICamera, void>(`/cameras/update/${model.id}`, model);

export const usePutCamerasById = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: putCamerasById,
  });

  return {
    post,
    isPending,
  };
};
