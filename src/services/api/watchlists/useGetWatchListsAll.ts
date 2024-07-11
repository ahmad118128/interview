import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';

import { IWatchlists } from './type';

const getWatchLists = (): Promise<IWatchlists> => {
  const url = `/watchlists/all`;
  return getData(url);
};

export const useGetWatchLists = () => {
  const { data, isPending } = useQuery({
    queryKey: ['watchlists'],
    queryFn: () => getWatchLists(),
  });

  return { data, isPending };
};
