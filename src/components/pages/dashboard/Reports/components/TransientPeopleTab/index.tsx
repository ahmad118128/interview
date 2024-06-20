import { useState } from 'react';
import { TableCell, Typography } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';
import { commonWords } from '@/strings';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { FiltersChips } from '@/components/CustomTable/types';
import {
  IError,
  ISuccess,
  UsersFilterProps,
} from '../../../image-recognition/types';
import { initFilter } from '../../../image-recognition/constants';
import { EFilterTableNameIcon } from './type';
import { FilterContainer } from './FilterContainer';
import { MobileCollapseTable } from '@/components/CustomTable/widgets';
import {
  COLLAPSE_ID,
  TransientMockData,
  TransientPeopleHeader,
} from './constants';
import { CellType } from '@/components/CustomTable/shared/CustomCell/types';
import theme from '@/theme';
import { CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';
export default function TransientPeople({ modal, setModal, setImgModal }: any) {
  const [collapse, setCollapse] = useState(false);
  const [filtersChips, setFiltersChips] = useState<
    FiltersChips<UsersFilterProps>
  >([]);
  const [filter, setFilter] = useState(initFilter);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [order, setOrder] = useState<string | unknown>('');

  const methods = useForm<FieldValues>({
    mode: 'onSubmit',
    defaultValues: {
      gateName: '',
      orientation: '',
      minimumSimilarityPercentage: '',
      matchingType: '',
      fromAge: '',
      untilAge: '',
      gender: '',
      registrationTimeOf: '',
      registrationTimeUpTo: '',
    },
  });
  const { control, reset, handleSubmit } = { ...methods };

  const submitHandler = (data: any) => {
    console.log(data);
    setCollapse(true);
  };
  const handleIconClick = (name: EFilterTableNameIcon) => {
    switch (name) {
      case EFilterTableNameIcon.FILTER:
        setCollapse((prev) => !prev);
        break;

      case EFilterTableNameIcon.REFRESH:
        // serviceCall();
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
    ...TransientPeopleHeader,
    {
      id: 'actions',
      label: commonWords.action,
      type: 'function',
      function: (row) => (
        <TableCell>
          <Icon
            icon="tabler:photo-filled"
            width="24"
            height="24"
            color={theme.palette.primary.main}
            style={{ marginLeft: '0.5rem' }}
            onClick={() => setImgModal(true)}
          />
        </TableCell>
      ),
    },
  ];
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitHandler)}>
          <FilterContainer
            control={control}
            reset={reset}
            collapse={collapse}
            onHandleIconClick={handleIconClick}
            chips={filtersChips}
            handleFiltersChips={handleFiltersChips}
            refreshLoading={isLoading}
          />
        </form>
      </FormProvider>
      <MobileCollapseTable
        rows={TransientMockData}
        headers={tableHeads}
        error={!tableData?.data?.results}
        mobileIdFilter={[COLLAPSE_ID, 'gateName', 'matchCount']}
        pagination={pagination}
        handleSort={(id) => {
          setOrder(id);
        }}
      />
    </>
  );
}
