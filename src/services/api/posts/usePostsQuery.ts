import { getData } from '@/services/core/http-service';
import { IPosts } from './type';
import { useQuery } from '@tanstack/react-query';

const getPosts = (): Promise<IPosts[]> => {
  const url = `/posts/`;
  return getData(url);
};

export const usePosts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });

  return { data, isLoading };
};
