import { createData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

import { ICamera } from './type';

const postCameras = (model: ICamera): Promise<void> =>
  createData<ICamera, void>('/cameras/', model);

export const usePostCameras = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: postCameras,
  });

  return {
    post,
    isPending,
  };
};
