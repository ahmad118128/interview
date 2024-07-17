import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';

import { IPerson } from './type';

const getPersons = (): Promise<IPerson[]> => {
  const url = `/persons/all`;
  return getData(url);
};

export const useGetPersonsAll = () => {
  const { data, isPending } = useQuery({
    queryKey: ['persons'],
    queryFn: () => getPersons(),
  });

  return { data, isPending };
};
