import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';

import { IModule } from './type';

const getModulesById = (id: number): Promise<IModule> => {
  const url = `/modules/${id}`;
  return getData(url);
};

export const useGetModulesById = (id: number) => {
  const { data, isPending } = useQuery({
    queryKey: ['modulesById'],
    queryFn: () => getModulesById(id),
  });

  return { data, isPending };
};
