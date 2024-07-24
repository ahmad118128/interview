import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';

import { ICamera } from './type';

const getCamerasById = (id: number): Promise<ICamera> => {
  const url = `/cameras/${id}`;
  return getData(url);
};

export const useGetCamerasById = (id: number) => {
  const { data, isPending } = useQuery({
    queryKey: ['camerasById'],
    queryFn: () => getCamerasById(id),
  });

  return { data, isPending };
};
