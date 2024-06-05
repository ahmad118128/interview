import { useFormContext } from 'react-hook-form';
import { StyledSearchContainer } from './styled';
import { Icon } from '@iconify/react/dist/iconify.js';
import { generalStr } from '@/strings';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';

interface IProps {
  disabled?: boolean;
}

export const FullTextSearch = (props: IProps) => {
  const { disabled } = props;

  const { control } = useFormContext();

  return (
    <StyledSearchContainer>
      <CustomInput
        control={control}
        disabled={disabled}
        InputProps={{
          endAdornment: <Icon icon="il:search" width="24" height="24" />,
        }}
        name="q"
        placeholder={generalStr.search}
        variant="filled"
        fullWidth
      />
    </StyledSearchContainer>
  );
};
