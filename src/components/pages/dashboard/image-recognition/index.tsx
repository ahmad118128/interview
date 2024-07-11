'use client';
import { useState } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { TableCell } from '@mui/material';
import {
  chipsCreator,
  COLLAPSE_ID,
  headers,
  initFilter,
  mockData,
} from './constants';
// import { FilterChild } from './FilterChild';
import { IError, ISuccess, SnackBarType, type UsersFilterProps } from './types';
import { CellType, FiltersChips } from '@/components/CustomTable/types';
import { EFilterTableNameIcon } from '@/components/CustomTable/widgets/FilterContainer/type';
import { FilterContainer } from '@/components/CustomTable/widgets/FilterContainer';
import { MobileCollapseTable } from '@/components/CustomTable/widgets/MobileCollapseTable';
import { commonWords, generalStr, registrationStr } from '@/strings';
import { CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';
import IconWithUrl from './IconWithUrl';
import { CustomButton } from '@/components/atoms/CustomButton';

import { Icon } from '@iconify/react/dist/iconify.js';
import theme from '@/theme';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { PageParamsType } from '@/services/api/users';
import { useSearchParams } from 'next/navigation';

const payloadSnackbar: SnackBarType = {
  display: true,
  status: 'success',
  message: '',
};

interface IModalState {
  state: boolean;
  id?: number;
}

export const UsersTab = ({ radioButton }: any) => {
  const searchParams = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());

  const [pageParams, setPageParams] = useState<PageParamsType>({
    page: 0,
    ...queryParams,
  });
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState(initFilter);
  const [order, setOrder] = useState<string | unknown>('');

  const methods = useForm<FieldValues>({
    mode: 'onSubmit',
  });

  const [filtersChips, setFiltersChips] = useState<
    FiltersChips<UsersFilterProps>
  >([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [collapse, setCollapse] = useState(false);
  const [modalData, setModalData] = useState<IModalState>({
    state: false,
  });

  const pagination: CustomPaginationProps = {
    totalPages: 5,
    page: 0,
    setPageParams: setPageParams,
    pageParams: pageParams,
  };

  const filterTransaction = (newFilter: UsersFilterProps) => {
    setCollapse(false);
    setCurrentPage(1);
    setFilter(newFilter);
    const chips = chipsCreator(newFilter);
    setFiltersChips(chips);
  };

  const handleIconClick = (name: EFilterTableNameIcon) => {
    switch (name) {
      case EFilterTableNameIcon.FILTER:
        setCollapse((prev) => !prev);
        break;

      case EFilterTableNameIcon.SEARCH:
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

  const tableHeads: CellType[] = [
    ...headers,
    {
      id: 'actions',
      label: commonWords.action,
      type: 'function',
      function: (row) => (
        <TableCell>
          <Icon
            icon="ic:baseline-delete"
            width="24"
            height="24"
            color={theme.palette.primary.main}
            style={{ marginLeft: '0.2rem' }}
          />
          <Icon
            icon="ep:picture-filled"
            width="24"
            height="24"
            color={theme.palette.primary.main}
          />
        </TableCell>
      ),
    },
  ];

  const submitHandler = (data: any) => {
    console.log(data);
    setCollapse(true);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitHandler)}>
          <FilterContainer
            collapse={collapse}
            onHandleIconClick={handleIconClick}
            radioButton={radioButton}
            fullWidthInput={
              <CustomInput
                control={methods.control}
                name="InputFile"
                fullWidth
              />
            }
          >
            {/* <FilterChild /> */}
            <CustomButton
              style={{ margin: '1rem 0 0.25rem 0' }}
              variant="outlined"
              type="submit"
            >
              {generalStr.applyFilter}
            </CustomButton>
          </FilterContainer>
        </form>
      </FormProvider>
      <MobileCollapseTable
        rows={mockData}
        headers={tableHeads}
        error={!tableData?.data?.results}
        mobileIdFilter={[COLLAPSE_ID, 'description', 'matchCount']}
        pagination={pagination}
        handleSort={(id) => {
          setOrder(id);
        }}
      />
    </>
  );
};
