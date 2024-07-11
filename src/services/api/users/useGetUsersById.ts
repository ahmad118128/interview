import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';

import { IUser } from './type';

const getUsersById = (id: number): Promise<IUser> => {
  const url = `/users/${id}`;
  return getData(url);
};

export const useGetUsersById = (id: number) => {
  const { data, isPending } = useQuery({
    queryKey: ['userstById'],
    queryFn: () => getUsersById(id),
  });

  return { data, isPending };
};
