import { deleteData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

const deletePersons = (id: number): Promise<void> =>
  deleteData(`/users/delete/${id}`);

export const useDeletePersonsById = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: deletePersons,
  });

  return {
    post,
    isPending,
  };
};
