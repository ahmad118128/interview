import { deleteData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

const deleteModules = (id: number): Promise<void> =>
  deleteData(`/modules/delete/${id}`);

export const useDeleteModulesById = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: deleteModules,
  });

  return {
    post,
    isPending,
  };
};
