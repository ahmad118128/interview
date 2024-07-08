import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { CellType, FiltersChips } from '@/components/CustomTable/types';
import { EFilterTableNameIcon } from '@/components/CustomTable/widgets/FilterContainer/type';
import { DataBankRoute, commonWords, labels } from '@/strings';
import { FieldValues, useForm } from 'react-hook-form';
import { TableCell } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';
import theme from '@/theme';
import { IModalState } from '@/components/template/DataBank/type';
import TableWithFab from '@/components/template/TableWithFab';

import { supervisitoryListHeader, supervisitoryListMock } from './constants';
import { initFilter } from '../image-recognition/constants';
import { UsersFilterProps } from '../image-recognition/types';
import { FilterContainer } from '@/components/template/FilterContainer';
import { FilterForm } from './FilterForm';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';

export function SuperVisoryList({ setModal, modal }: any) {
  const [collapse, setCollapse] = useState(false);
  const [filtersChips, setFiltersChips] = useState<
    FiltersChips<UsersFilterProps>
  >([]);
  const [filter, setFilter] = useState(initFilter);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);

  const router = useRouter();
  const currentPath = usePathname();

  const methods = useForm<FieldValues>({
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

  const tableHeadsUser: CellType[] = [
    ...supervisitoryListHeader,
    {
      id: 'actions',
      label: commonWords.action,
      type: 'function',
      function: (row) => (
        <TableCell>
          <IconButton
            sx={{ marginLeft: '10px' }}
            iconName="fluent:people-20-filled"
            title={labels.members}
            width={24}
            height={24}
            onClick={(e) => {
              const editPath = `${currentPath}/members`;
              router.push(editPath);
            }}
          />

          <IconButton
            sx={{ marginLeft: '10px' }}
            iconName="fluent:document-edit-20-filled"
            title={labels.edit}
            width={24}
            height={24}
            onClick={(e) => {
              const editPath = `${currentPath}/edit/${row.id}`;
              router.push(editPath);
            }}
          />

          <IconButton
            iconName="tabler:trash-filled"
            title={labels.delete}
            width={24}
            height={24}
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

  const { control, reset, handleSubmit } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FilterContainer
          chipNumber={22}
          tableName={DataBankRoute.supervisoryList}
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
      <TableWithFab
        tableHeads={tableHeadsUser}
        data={supervisitoryListMock}
        path={'/add'}
      />
    </>
  );
}
