import { useState } from 'react';
import { Typography } from '@mui/material';
import { generalStr } from '@/strings';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { FiltersChips } from '@/components/CustomTable/types';
import { usePathname, useRouter } from 'next/navigation';
import { UsersFilterProps } from '../../image-recognition/types';
import { initFilter } from '../../image-recognition/constants';
import { EFilterTableNameIcon } from './type';
import { FilterContainer } from './FilterContainer';
export default function TransientPeople({ modal, setModal }: any) {
  const [collapse, setCollapse] = useState(false);
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
    </>
  );
}
