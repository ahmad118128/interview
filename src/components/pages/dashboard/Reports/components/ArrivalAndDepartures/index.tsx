import { useState } from 'react';
import { ReportRoute, commonWords } from '@/strings';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { FiltersChips } from '@/components/CustomTable/types';
import {
  IError,
  ISuccess,
  UsersFilterProps,
} from '../../../image-recognition/types';
import { initFilter } from '../../../image-recognition/constants';
import { MobileCollapseTable } from '@/components/CustomTable/widgets';
import {
  COLLAPSE_ID,
  defaultArrivalsAndDeparturesModalPicFormValues,
  ArrivalsAndDeparturesMockData,
  ArrivalsAndDeparturesHeader,
} from './constants';
import { CellType } from '@/components/CustomTable/shared/CustomCell/types';
import { CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';
import ViewImageModal from './ViewImageModal';
import { FilterContainer } from '@/components/template/FilterContainer';
import FilterForm from './FilterForm';
import { EFilterTableNameIcon } from '@/components/template/FilterContainer/type';

export default function ArrivalDepartures() {
  const [collapse, setCollapse] = useState(false);
  const [filtersChips, setFiltersChips] = useState<
    FiltersChips<UsersFilterProps>
  >([]);
  const [filter, setFilter] = useState(initFilter);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [order, setOrder] = useState<string | unknown>('');
  const [search, setSearch] = useState<boolean>(false);

  const methods = useForm<FieldValues>({
    mode: 'onSubmit',
    defaultValues: defaultArrivalsAndDeparturesModalPicFormValues,
  });
  const { control, reset } = { ...methods };

  const submitHandler = (data: any) => {
    console.log(data);
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
  const pagination: CustomPaginationProps = {
    all_page: tableData?.data?.all_page as number,
    current: currentPage,
    setPage: (newPage: number) => setCurrentPage(newPage),
  };

  const tableHeads: CellType[] = [
    ...ArrivalsAndDeparturesHeader,
    {
      id: 'actions',
      label: commonWords.action,
      type: 'function',
      function: (row) => <ViewImageModal />,
    },
  ];

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitHandler)}>
          <FilterContainer
            chipNumber={14}
            tableName={ReportRoute.arrivalsAndDepartures}
            collapse={collapse}
            onHandleIconClick={handleIconClick}
            chips={filtersChips}
            handleFiltersChips={handleFiltersChips}
            refreshLoading={isLoading}
            search={search}
            setSearch={setSearch}
          >
            <FilterForm control={control} reset={reset} />
          </FilterContainer>
        </form>
      </FormProvider>
      <MobileCollapseTable
        rows={ArrivalsAndDeparturesMockData}
        headers={tableHeads}
        error={!tableData?.data?.results}
        mobileIdFilter={[COLLAPSE_ID, 'ArrivalGateName', 'MatchPercentage']}
        pagination={pagination}
        handleSort={(id) => {
          setOrder(id);
        }}
      />
    </>
  );
}
