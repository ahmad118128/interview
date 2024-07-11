import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';

import { ICameras } from './type';

const getCamerasAll = (): Promise<ICameras> => {
  const url = `/cameras/all`;
  return getData(url);
};

export const useGetCamerasAll = () => {
  const { data, isPending } = useQuery({
    queryKey: ['cameras'],
    queryFn: () => getCamerasAll(),
  });

  return { data, isPending };
};
