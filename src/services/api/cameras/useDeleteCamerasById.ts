import { deleteData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

const deleteCameras = (id: number): Promise<void> =>
  deleteData(`/users/delete/${id}`);

export const useDeleteCamerasById = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: deleteCameras,
  });

  return {
    post,
    isPending,
  };
};
