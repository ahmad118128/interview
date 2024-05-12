import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';

import { IPosts } from './type';

const getPosts = (): Promise<IPosts[]> => {
  const url = `/posts/`;
  return getData(url);
};

export const useGetPosts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });

  return { data, isLoading };
};
