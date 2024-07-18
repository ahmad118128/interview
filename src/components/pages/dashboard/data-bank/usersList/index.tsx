import { CellType, FiltersChips } from '@/components/CustomTable/types';
import { EFilterTableNameIcon } from '@/components/CustomTable/widgets/FilterContainer/type';
import { DataBankRoute, commonWords, labels } from '@/strings';
import { useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { dataBankHeaderUser, dataBankMockUsers } from '../constants';
import { TableCell } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';
import theme from '@/theme';
import { usePathname, useRouter } from 'next/navigation';
import TableWithFab from '@/components/template/TableWithFab';
import { UsersFilterProps } from '../../image-recognition/types';
import { initFilter } from '../../image-recognition/constants';
import FilterForm from './FilterForm';
import { FilterContainer } from '@/components/template/FilterContainer';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';

export default function UsersList({ modal, setModal, setImgModal }: any) {
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
        console.log('search');
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
    ...dataBankHeaderUser,
    {
      id: 'actions',
      label: commonWords.action,
      type: 'function',
      function: (row) => (
        <TableCell>
          <IconButton
            sx={{ marginLeft: '10px' }}
            iconName="tabler:photo-filled"
            tooltip={labels.pics}
            onClick={() => setImgModal(true)}
          />

          <IconButton
            sx={{ marginLeft: '10px' }}
            iconName="fluent:document-edit-20-filled"
            tooltip={labels.edit}
            onClick={(e) => {
              const editPath = `${currentPath}/editUser/${row.id}`;
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
            tableName={DataBankRoute.usersList}
            setCollapse={setCollapse}
            search={search}
            setSearch={setSearch}
            chipNumber={24}
          >
            <FilterForm control={control} reset={reset} />
          </FilterContainer>
        </form>
      </FormProvider>
      <TableWithFab
        tableHeads={tableHeadsUser}
        data={dataBankMockUsers}
        path={'/addUser'}
      />
    </>
  );
}
