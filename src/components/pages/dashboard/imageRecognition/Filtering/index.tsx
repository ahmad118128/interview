'use client';
import { useState } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { FilterContainer } from '@/components/CustomTable/widgets';
import { CustomInput } from '@/components/atoms/input/controlledCustomInput';
import { FilterChild } from '@/components/pages/UI/UsersTab/FilterChild';
import { CustomButton } from '@/components/atoms/CustomButton';
import { generalStr } from '@/strings';
import { EFilterTableNameIcon } from '@/components/CustomTable/widgets/FilterContainer/type';

export type Props = {
  radioButton: any;
  submiting: boolean;
};

export default function Filtering({ radioButton, submiting }: Props) {
  const methods = useForm<FieldValues>({
    mode: 'onSubmit',
  });

  const [collapse, setCollapse] = useState(false);

  // const filterTransaction = (newFilter: UsersFilterProps) => {
  //   setCollapse(false);
  //   setCurrentPage(1);
  //   setFilter(newFilter);
  //   const chips = chipsCreator(newFilter);
  //   setFiltersChips(chips);
  // };

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

  const submitHandler = (data: any) => {
    console.log(data);
    setCollapse(true);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitHandler)}>
        <FilterContainer
          collapse={collapse}
          onHandleIconClick={handleIconClick}
          radioButton={radioButton}
          fullWidthInput={
            <CustomInput control={methods.control} name="InputFile" fullWidth />
          }
        >
          <FilterChild />
          {submiting ? (
            <CustomButton
              style={{ margin: '1rem 0 0.25rem 0' }}
              variant="outlined"
              type="submit"
            >
              {generalStr.applyFilter}
            </CustomButton>
          ) : (
            ''
          )}
        </FilterContainer>
      </form>
    </FormProvider>
  );
}
