import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';

import { IWatchlist } from './type';

const getWatchListsById = (id: number): Promise<IWatchlist> => {
  const url = `/watchlists/${id}`;
  return getData(url);
};

export const useGetWatchListById = (id: number) => {
  const { data, isPending } = useQuery({
    queryKey: ['watchlistById'],
    queryFn: () => getWatchListsById(id),
  });

  return { data, isPending };
};
