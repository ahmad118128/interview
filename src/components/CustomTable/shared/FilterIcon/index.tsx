import { Box } from '@mui/material';
import { Icon } from '@iconify/react';
import theme from '@/theme';
import { type Props } from './types';
import { tablePhrases } from '../../strings';
import { StyledChip } from '../../widgets/FilterContainer/styled';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { EFilterTableNameIcon } from '../../widgets/FilterContainer/type';
import { generalStr } from '@/strings';

export const FilterIcon = (props: Props) => {
  const { onHandleIconClick, chips, handleFiltersChips, active } = props;
  return (
    <Box
      display="flex"
      key={tablePhrases.filtering}
      alignItems="center"
      gap={2}
    >
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

      <IconButton
        tooltip={generalStr.filter}
        onClick={() => onHandleIconClick(EFilterTableNameIcon.FILTER)}
        key={tablePhrases.filtering}
        iconName={'iconoir:filter'}
        className="tabButton"
      />
    </Box>
  );
};
