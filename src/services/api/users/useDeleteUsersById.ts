import { deleteData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

const deleteUsers = (id: number): Promise<void> =>
  deleteData(`/users/delete/${id}`);

export const useDeleteUsersById = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: deleteUsers,
  });

  return {
    post,
    isPending,
  };
};
