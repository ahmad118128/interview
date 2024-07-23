import { useQuery } from '@tanstack/react-query';
import { getData } from '@/services/core/http-service';

import { IUsers, PageParamsType } from './type';

export const useGetUsersAll = (pageParams: PageParamsType) => {
  let totalItem = 0;
  let totalPages = 0;

  const { data, isPending } = useQuery({
    queryKey: ['users', pageParams],
    queryFn: async function ({ queryKey }): Promise<IUsers> {
      const url = `/users/`;
      const { pageNo, ...params } = queryKey[1] as PageParamsType;
      const queryParams: PageParamsType = { pageNo: pageNo, ...params };

      return getData(url, { params: queryParams });
    },
    select: (response) => {
      totalItem = response.count;
      totalPages = response.allPages;
      return response.data;
    },
  });

  return { data, totalItem, totalPages, isPending };
};
