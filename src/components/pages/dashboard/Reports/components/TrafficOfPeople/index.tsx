'use client';

import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { MobileCollapseTable } from '@/components/CustomTable/widgets';
import {
  COLLAPSE_ID,
  initFilter,
} from '@/components/pages/dashboard/image-recognition/constants';
import {
  defaultReportValues,
  reportHeaderTrafficOfPeople,
  reportMocTrafficOfPeople,
} from '@/components/pages/dashboard/Reports/components/TrafficOfPeople/constants';
import {
  IError,
  ISuccess,
  UsersFilterProps,
} from '@/components/pages/dashboard/image-recognition/types';
import { CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';
import { CellType, FiltersChips } from '@/components/CustomTable/types';
import { EFilterTableNameIcon } from '@/components/CustomTable/widgets/FilterContainer/type';
import { TrafficAnalysisRoute, commonWords } from '@/strings';
import { FilterContainer } from '@/components/template/FilterContainer';
import { PageParamsType } from '@/services/api/users';
import FilterForm from './FilterForm';
import ViewImageModal from '../../ViewImageModal';

const TrafficOfPeople = () => {
  const [collapse, setCollapse] = useState(false);
  const [filtersChips, setFiltersChips] = useState<
    FiltersChips<UsersFilterProps>
  >([]);
  const [filter, setFilter] = useState(initFilter);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [order, setOrder] = useState<string | unknown>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<boolean>(false);

  const router = useRouter();
  const currentPath = usePathname();

  const methods = useForm<FieldValues>({
    mode: 'onSubmit',
    defaultValues: defaultReportValues,
  });

  const submitHandler = (data: FieldValues) => {
    setCollapse(true);
  };

  const handleIconClick = (name: EFilterTableNameIcon) => {
    switch (name) {
      case EFilterTableNameIcon.FILTER:
        setCollapse((prev) => !prev);
        break;

      case EFilterTableNameIcon.SEARCH:
        setSearch(true);
        break;

      default:
        break;
    }
  };

  const handleFiltersChips = (filterKey: keyof typeof initFilter) => {
    methods.setValue(filterKey, initFilter[filterKey]);
    setFilter({ ...filter, [filterKey]: initFilter[filterKey] });
    setFiltersChips((prevFiltersChips) => {
      return prevFiltersChips.filter((chip) => chip.key !== filterKey);
    });
  };
  const searchParams = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());

  const [pageParams, setPageParams] = useState<PageParamsType>({
    pageNo: 0,
    ...queryParams,
  });

  const pagination: CustomPaginationProps = {
    totalPages: 2,
    page: 1,
    setPageParams: setPageParams,
    pageParams: pageParams,
  };

  const tableHeadsClient: CellType[] = [
    ...reportHeaderTrafficOfPeople,
    {
      id: 'actions',
      label: commonWords.action,
      type: 'function',
      function: (row) => <ViewImageModal />,
    },
  ];

  const { control, reset } = { ...methods };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitHandler)}>
          <FilterContainer
            collapse={collapse}
            onHandleIconClick={handleIconClick}
            chips={filtersChips}
            handleFiltersChips={handleFiltersChips}
            refreshLoading={isLoading}
            tableName={TrafficAnalysisRoute.trafficPeople}
            setCollapse={setCollapse}
            search={search}
            setSearch={setSearch}
            chipNumber={24}
          >
            <FilterForm control={control} reset={reset} />
          </FilterContainer>
        </form>
      </FormProvider>
      <MobileCollapseTable
        rows={reportMocTrafficOfPeople}
        headers={tableHeadsClient}
        error={!tableData?.data?.results}
        mobileIdFilter={[COLLAPSE_ID, 'name', 'supervisortList']}
        handleSort={(id) => {
          setOrder(id);
        }}
      />
    </>
  );
};

export default TrafficOfPeople;
