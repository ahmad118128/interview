'use client';
import { useEffect, useState } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { TableCell } from '@mui/material';

// import { UsersService } from 'services';
// import { useAppDispatch } from 'store/hooks';
// import { show } from 'store/slices/snackbarSlice';

import { chipsCreator, COLLAPSE_ID, headers, initFilter } from './constants';
import { FilterChild } from './FilterChild';
import { IError, ISuccess, SnackBarType, type UsersFilterProps } from './types';
import { CellType, FiltersChips } from '@/components/CustomTable/types';
import { EFilterTableNameIcon } from '@/components/CustomTable/widgets/FilterContainer/type';
import { FilterContainer } from '@/components/CustomTable/widgets/FilterContainer';
import { MobileCollapseTable } from '@/components/CustomTable/widgets/MobileCollapseTable';
import { commonWords, registrationStr } from '@/strings';
import { CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';
import IconWithUrl from './IconWithUrl';

// const usersService = new UsersService();

const payloadSnackbar: SnackBarType = {
  display: true,
  status: 'success',
  message: '',
};

interface IModalState {
  state: boolean;
  id?: number;
}

export const UsersTab = () => {
  // const dispatch = useAppDispatch();

  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState(initFilter);
  const [order, setOrder] = useState<string | unknown>('');
  const methods = useForm<FieldValues>({
    mode: 'onSubmit',
    defaultValues: initFilter,
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
    all_page: tableData?.data?.all_page as number,
    current: currentPage,
    setPage: (newPage: number) => setCurrentPage(newPage),
  };

  // const serviceCall = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await usersService.getAll({
  //       page: currentPage,
  //       limit: 10,
  //       order,
  //       ...filter,
  //     });

  //     setTableData(response.data);
  //   } catch (error: any) {
  //     if (!error.data || (error.data && !/^[4][0][1|3]$/.test(error.status))) {
  //       payloadSnackbar.message = error.data ? error.data.detail : error;
  //       payloadSnackbar.status = 'danger';
  //       // dispatch(show(payloadSnackbar));
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   serviceCall();
  // }, [currentPage, filter, order]);

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

  const tableHeads: CellType[] = [
    ...headers,
    {
      id: 'actions',
      label: commonWords.action,
      type: 'function',
      function: (row) => (
        <TableCell>
          <IconWithUrl
            iconName="tabler:lock-exclamation"
            title={registrationStr.changePass}
            onClick={() =>
              setModalData({
                ...modalData,
                state: true,
                id: row?.id,
              })
            }
          />
          <IconWithUrl
            title={commonWords.details}
            iconName="tabler:file-info"
            url={`/dashboard/users/details?id=${row?.id}`}
          />
          <IconWithUrl
            title={commonWords.edit}
            iconName="tabler:edit"
            url={`/dashboard/users/edit?id=${row?.id}`}
          />
          {/* <DeleteIcon id={row?.id} message={commonWords.deleteUser} /> */}
        </TableCell>
      ),
    },
  ];

  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    filterTransaction({
      username: data?.username ?? '',
      full_name: data?.full_name ?? '',
      groups: data?.groups ?? '',
      is_active: data?.is_active,
      q: data?.q ?? '',
    });
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitHandler)}>
          <FilterContainer
            collapse={collapse}
            onHandleIconClick={handleIconClick}
          >
            <FilterChild />
          </FilterContainer>
        </form>
      </FormProvider>
      <MobileCollapseTable
        rows={tableData?.data?.results}
        headers={tableHeads}
        error={!tableData?.data?.results}
        mobileIdFilter={[COLLAPSE_ID, 'username', 'actions']}
        pagination={pagination}
        handleSort={(id) => {
          setOrder(id);
        }}
      />
    </>
  );
};
