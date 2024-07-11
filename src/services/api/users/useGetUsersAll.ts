import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';

import { IUsers } from './type';

const getUsers = (): Promise<IUsers> => {
  const url = `/users/all`;
  return getData(url);
};

export const useGetUsersAll = () => {
  const { data, isPending } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });

  return { data, isPending };
};
