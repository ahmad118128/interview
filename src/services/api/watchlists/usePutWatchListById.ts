import { updateData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

import { IWatchlist } from './type';

const putWatchListById = (model: Required<IWatchlist>): Promise<void> =>
  updateData<IWatchlist, void>(`/watchlists/update/${model.id}`, model);

export const usePutWatchListById = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: putWatchListById,
  });

  return {
    post,
    isPending,
  };
};
