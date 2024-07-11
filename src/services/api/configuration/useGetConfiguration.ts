import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';

import { IConfiguration } from './type';

const getConfiguration = (key: string): Promise<IConfiguration> => {
  const url = `/configuration/parameter/${key}`;
  return getData(url);
};

export const useGetConfiguration = (key: string) => {
  const { data, isPending } = useQuery({
    queryKey: ['configuration'],
    queryFn: () => getConfiguration(key),
  });

  return { data, isPending };
};
