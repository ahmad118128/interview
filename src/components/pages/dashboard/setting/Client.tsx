import { CellType, FiltersChips } from '@/components/CustomTable/types';
import { EFilterTableNameIcon } from '@/components/CustomTable/widgets/FilterContainer/type';
import { commonWords } from '@/strings';
import { useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { TableCell } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';
import theme from '@/theme';
import { usePathname, useRouter } from 'next/navigation';
import { IError, ISuccess, UsersFilterProps } from '../image-recognition/types';
import { COLLAPSE_ID, initFilter } from '../image-recognition/constants';
import { ClientHeader, ClientMock } from './constants';
import { MobileCollapseTable } from '@/components/CustomTable/widgets';
import { CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';
import { FilterContainer } from './FilterContainer';

export function Client({ modal, setModal }: any) {
  const [collapse, setCollapse] = useState(false);
  const [filtersChips, setFiltersChips] = useState<
    FiltersChips<UsersFilterProps>
  >([]);
  const [filter, setFilter] = useState(initFilter);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [order, setOrder] = useState<string | unknown>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  const pagination: CustomPaginationProps = {
    all_page: tableData?.data?.all_page as number,
    current: currentPage,
    setPage: (newPage: number) => setCurrentPage(newPage),
  };

  const tableHeadsClient: CellType[] = [
    ...ClientHeader,
    {
      id: 'actions',
      label: commonWords.action,
      type: 'function',
      function: (row) => (
        <TableCell>
          <Icon
            icon="fluent:circle-multiple-subtract-checkmark-20-filled"
            width="24"
            height="24"
            color={theme.palette.primary.main}
            style={{ marginLeft: '0.5rem' }}
            onClick={() => setModal(true)}
          />
          <Icon
            icon="fluent:dismiss-circle-12-filled"
            width="24"
            height="24"
            color={theme.palette.primary.main}
            style={{ marginLeft: '0.5rem' }}
            onClick={() => setModal(true)}
          />
          <Icon
            icon="fluent:document-edit-20-filled"
            width="24"
            height="24"
            color={theme.palette.primary.main}
            onClick={(e) => {
              const editPath = `${currentPath}/edit/${row.id}`;
              router.push(editPath);
            }}
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
            setCollapse={setCollapse}
          />
        </form>
      </FormProvider>
      <MobileCollapseTable
        rows={ClientMock}
        headers={tableHeadsClient}
        error={!tableData?.data?.results}
        mobileIdFilter={[COLLAPSE_ID, 'factoryName', 'clientStatus']}
        pagination={pagination}
        handleSort={(id) => {
          setOrder(id);
        }}
      />
    </>
  );
}
