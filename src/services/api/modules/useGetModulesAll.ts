import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';

import { IModules } from './type';

const getModules = (): Promise<IModules> => {
  const url = `/modules/all`;
  return getData(url);
};

export const useGetModulesAll = () => {
  const { data, isPending } = useQuery({
    queryKey: ['modules'],
    queryFn: () => getModules(),
  });

  return { data, isPending };
};
