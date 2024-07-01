import { Box, Tooltip } from '@mui/material';
import theme from '@/theme';
import { Icon } from '@iconify/react';

import { tablePhrases } from '../../strings';
import { StyledChip } from '../../widgets/FilterContainer/styled';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { EFilterTableNameIcon } from '../../widgets/FilterContainer/type';
import { Props } from './type';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import CustomSearchBar from '@/components/atoms/CustomSearchBar';

export const SearchIcon = (props: Props) => {
  const {
    onHandleIconClick,
    chips,
    handleFiltersChips,
    active,
    search,
    setSearch,
    control,
  } = props;
  return (
    <Box display="flex" key={tablePhrases.search} alignItems="center" gap={2}>
      {chips &&
        chips
          .filter((chip) => chip.value !== '')
          .map((chip, key) => (
            <StyledChip
              key={key}
              label={`${chip.label} : ${chip.value}`}
              onDelete={() =>
                handleFiltersChips && handleFiltersChips(chip.key)
              }
              color="primary"
              deleteIcon={<Icon icon="typcn:delete-outline" />}
            />
          ))}

      {search ? (
        <>
          <CustomSearchBar
            name="search"
            searchHandler={(value) => console.log(value)}
          />
          <IconButton
            onClick={() => (setSearch ? setSearch(false) : null)}
            iconName="tabler:arrow-narrow-left"
            height={24}
            width={24}
          />
        </>
      ) : (
        <Tooltip title={tablePhrases.search} placement="bottom" arrow>
          <IconButton
            onClick={() => onHandleIconClick(EFilterTableNameIcon.SEARCH)}
            iconName="tabler:search"
            height={24}
            width={24}
          />
        </Tooltip>
      )}
    </Box>
  );
};
