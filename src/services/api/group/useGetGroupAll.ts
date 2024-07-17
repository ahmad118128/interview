import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';

import { IGroups } from './type';

const getGroupAll = (): Promise<IGroups> => {
  const url = `/group/all`;
  return getData(url);
};

export const useGetGroupAll = () => {
  const { data, isPending } = useQuery({
    queryKey: ['groups'],
    queryFn: () => getGroupAll(),
  });

  return { data, isPending };
};
