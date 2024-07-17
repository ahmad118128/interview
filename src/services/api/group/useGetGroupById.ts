import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';

import { IGroup } from './type';

const getGroupById = (id: number): Promise<IGroup> => {
  const url = `/group/${id}`;
  return getData(url);
};

export const useGetGroupById = (id: number) => {
  const { data, isPending } = useQuery({
    queryKey: ['groupById'],
    queryFn: () => getGroupById(id),
  });

  return { data, isPending };
};
