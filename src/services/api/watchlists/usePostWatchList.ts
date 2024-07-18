import { createData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

import { IWatchlist } from './type';

const postWatchList = (model: IWatchlist): Promise<void> =>
  createData<IWatchlist, void>('/watchlists/', model);

export const usePostWatchList = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: postWatchList,
  });

  return {
    post,
    isPending,
  };
};
