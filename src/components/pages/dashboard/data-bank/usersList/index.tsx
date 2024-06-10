import { CellType, FiltersChips } from '@/components/CustomTable/types';
import { EFilterTableNameIcon } from '@/components/CustomTable/widgets/FilterContainer/type';
import { commonWords } from '@/strings';
import { useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { dataBankHeaderUser, dataBankMockUsers } from '../constants';
import { TableCell } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';
import theme from '@/theme';
import { usePathname, useRouter } from 'next/navigation';
import { IModalState } from '@/components/template/DataBank/type';
import TableWithFab from '@/components/template/TableWithFab';
import { FilterContainer } from './FilterContainer';
import { UsersFilterProps } from '../../image-recognition/types';
import { initFilter } from '../../image-recognition/constants';

export default function UsersList() {
  const [collapse, setCollapse] = useState(false);
  const [modalData, setModalData] = useState<IModalState>({
    state: false,
  });
  const [imgModal, setImgModal] = useState(false);
  const [filtersChips, setFiltersChips] = useState<
    FiltersChips<UsersFilterProps>
  >([]);
  const [filter, setFilter] = useState(initFilter);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const tableHeadsUser: CellType[] = [
    ...dataBankHeaderUser,
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
              setModalData({
                ...modalData,
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
      <TableWithFab tableHeads={tableHeadsUser} data={dataBankMockUsers} />
    </>
  );
}
