'use client';

import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';

import { CellType, FiltersChips } from '@/components/CustomTable/types';
import { EFilterTableNameIcon } from '@/components/CustomTable/widgets/FilterContainer/type';
import { UsersManagementRoute, commonWords, labels } from '@/strings';
import { TableCell } from '@mui/material';
import TableWithFab from '@/components/template/TableWithFab';
import { FilterContainer } from '@/components/template/FilterContainer';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';

import { UsersFilterProps } from '../../image-recognition/types';
import { initFilter } from '../../image-recognition/constants';
import { usersHeader, usersMock } from '../constants';
import { FilterForm } from './FilterForm';
import { PageParamsType, useGetUsersAll } from '@/services/api/users';
import { CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';

export function FilterPart({ setModal, modal }: any) {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [filtersChips, setFiltersChips] = useState<
    FiltersChips<UsersFilterProps>
  >([]);
  const [filter, setFilter] = useState(initFilter);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());

  const [pageParams, setPageParams] = useState<PageParamsType>({
    pageNo: 0,
    ...queryParams,
  });

  const { data: users, totalItem, totalPages } = useGetUsersAll(pageParams);
  console.log(users);

  const router = useRouter();
  const currentPath = usePathname();

  const pagination: CustomPaginationProps = {
    totalPages: totalPages,
    page: pageParams.pageNo,
    setPageParams: setPageParams,
    pageParams: pageParams,
  };

  const { control, reset, handleSubmit, setValue } = useForm<FieldValues>({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      nationalId: '',
      phoneNumber: '',
      group: '',
      supervisortList: '',
      nationality: '',
    },
  });

  const submitHandler = (data: any) => {};

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
    setValue(filterKey, initFilter[filterKey]);
    setFilter({ ...filter, [filterKey]: initFilter[filterKey] });
    setFiltersChips((prevFiltersChips) => {
      return prevFiltersChips.filter((chip) => chip.key !== filterKey);
    });
  };

  const tableHeadsUser: CellType[] = [
    ...usersHeader,
    {
      id: 'actions',
      label: commonWords.action,
      type: 'function',
      function: (row) => (
        <TableCell>
          <IconButton
            sx={{ marginLeft: '10px' }}
            iconName="fluent:document-edit-20-filled"
            tooltip={labels.edit}
            onClick={(e) => {
              const editPath = `${currentPath}/edit/${row.id}`;
              router.push(editPath);
            }}
          />

          <IconButton
            iconName="tabler:trash-filled"
            tooltip={labels.delete}
            onClick={(e) =>
              setModal({
                ...modal,
                state: true,
                id: row?.id,
              })
            }
          />
        </TableCell>
      ),
    },
  ];

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FilterContainer
          chipNumber={17}
          collapse={collapse}
          onHandleIconClick={handleIconClick}
          chips={filtersChips}
          handleFiltersChips={handleFiltersChips}
          refreshLoading={isLoading}
          tableName={UsersManagementRoute.users}
          setCollapse={setCollapse}
          search={search}
          setSearch={setSearch}
        >
          <FilterForm control={control} reset={reset} />
        </FilterContainer>
      </form>
      <TableWithFab
        showOnMobileColumns={['lastName', 'nationalId']}
        tableHeads={tableHeadsUser}
        data={usersMock}
        path={'/add'}
      />
    </>
  );
}
