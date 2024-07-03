'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { CellType, FiltersChips } from '@/components/CustomTable/types';
import { EFilterTableNameIcon } from '@/components/CustomTable/widgets/FilterContainer/type';
import { UsersManagementRoute, commonWords } from '@/strings';
import { FieldValues, useForm } from 'react-hook-form';
import { TableCell } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';
import theme from '@/theme';
import { IModalState } from '@/components/template/DataBank/type';
import TableWithFab from '@/components/template/TableWithFab';

import { FilterContainer } from './FilterContainer';
import { UsersFilterProps } from '../../image-recognition/types';
import { initFilter } from '../../image-recognition/constants';
import { usersHeader, usersMock } from '../constants';

export function FilterPart({ setModal, modal }: any) {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [filtersChips, setFiltersChips] = useState<
    FiltersChips<UsersFilterProps>
  >([]);
  const [filter, setFilter] = useState(initFilter);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const currentPath = usePathname();

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
        // serviceCall();
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
          <Icon
            icon="fluent:document-edit-20-filled"
            width="24"
            height="24"
            color={theme.palette.primary.main}
            style={{ marginLeft: '0.5rem' }}
            onClick={(e) => {
              const editPath = `${currentPath}/edit/${row.id}`;
              router.push(editPath);
            }}
          />
          <Icon
            icon="tabler:trash-filled"
            width="24"
            height="24"
            color={theme.palette.primary.main}
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
          control={control}
          reset={reset}
          collapse={collapse}
          onHandleIconClick={handleIconClick}
          chips={filtersChips}
          handleFiltersChips={handleFiltersChips}
          refreshLoading={isLoading}
          tableName={UsersManagementRoute.users}
          setCollapse={setCollapse}
        />
      </form>
      <TableWithFab
        tableHeads={tableHeadsUser}
        data={usersMock}
        path={'/add'}
      />
    </>
  );
}
