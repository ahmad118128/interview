import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';
import { PageParamsType } from '../type';
import { GroupApiResponse } from './type';

export const useGetGroup = (pageParams: PageParamsType) => {
  let totalItem = 0;
  let totalPages = 0;

  const { data, isPending } = useQuery({
    queryKey: ['persons', pageParams],
    queryFn: async function ({ queryKey }): Promise<GroupApiResponse> {
      const url = `/groups/`;
      const { pageNo, ...params } = queryKey[1] as PageParamsType;
      const queryParams: PageParamsType = { pageNo: pageNo, ...params };

      return getData(url, { params: queryParams });
    },
    select: (response) => {
      totalItem = response.totalElements;
      totalPages = response.totalPages;
      return response.content;
    },
  });

  return { data, totalItem, totalPages, isPending };
};
