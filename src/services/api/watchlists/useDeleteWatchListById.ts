import { deleteData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

const deleteWatchList = (id: number): Promise<void> =>
  deleteData(`/watchlists/delete/${id}`);

export const useDeleteWatchListById = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: deleteWatchList,
  });

  return {
    post,
    isPending,
  };
};
