import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';

import { IPerson } from './type';

const getPersonsById = (id: number): Promise<IPerson> => {
  const url = `/persons/${id}`;
  return getData(url);
};

export const useGetPersonsById = (id: number) => {
  const { data, isPending } = useQuery({
    queryKey: ['personsById'],
    queryFn: () => getPersonsById(id),
  });

  return { data, isPending };
};
