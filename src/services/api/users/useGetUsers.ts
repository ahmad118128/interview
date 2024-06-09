import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';

import { IUsers } from './type';

const getUsers = (): Promise<IUsers[]> => {
  const url = `https://6400579d9f844910298e79e1.mockapi.io/description/`;
  return getData(url);
};

const usersSlug = 'users';

export const useGetUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: [usersSlug],
    queryFn: () => getUsers(),
  });

  return { data, isLoading };
};
