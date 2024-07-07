import { Box, Tooltip } from '@mui/material';
import theme from '@/theme';
import { Icon } from '@iconify/react';

import { tablePhrases } from '../../strings';
import { StyledChip } from '../../widgets/FilterContainer/styled';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { EFilterTableNameIcon } from '../../widgets/FilterContainer/type';
import { Props } from './type';
import CustomSearchBar from '@/components/atoms/CustomSearchBar';
import { commonWords, filterTable, generalStr } from '@/strings';

export const SearchIcon = (props: Props) => {
  const {
    onHandleIconClick,
    chips,
    handleFiltersChips,
    active,
    search,
    setSearch,
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
            searchHandler={() => console.log('search')}
            placeholder={filterTable.searching}
          />
          <IconButton
            onClick={() => setSearch(false)}
            iconName="tabler:arrow-narrow-left"
            height={24}
            width={24}
            title={generalStr.back}
            tabButton
          />
        </>
      ) : (
        <Tooltip title={tablePhrases.search} placement="bottom" arrow>
          <IconButton
            onClick={() => onHandleIconClick(EFilterTableNameIcon.SEARCH)}
            iconName="tabler:search"
            height={24}
            width={24}
            title={commonWords.search}
            tabButton
          />
        </Tooltip>
      )}
    </Box>
  );
};
