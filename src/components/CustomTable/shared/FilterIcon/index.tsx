import { Box, Tooltip } from '@mui/material';
import { Icon } from '@iconify/react';

import { type Props } from './types';
import { StyledChip } from '../../widgets/FilterContainer/styled';
import { tablePhrases } from '../../strings';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { EFilterTableNameIcon } from '../../widgets/FilterContainer/type';

export const FilterIcon = (props: Props) => {
  const { onHandleIconClick, chips, handleFiltersChips } = props;
  return (
    <Box
      display="flex"
      key={tablePhrases.filtering}
      alignItems="center"
      gap={2}
    >
      {chips
        .filter((chip) => chip.value !== '')
        .map((chip, key) => (
          <StyledChip
            key={key}
            label={`${chip.label} : ${chip.value}`}
            onDelete={() => handleFiltersChips(chip.key)}
            color="primary"
            deleteIcon={<Icon icon="typcn:delete-outline" />}
          />
        ))}

      <Tooltip title={tablePhrases.filtering} placement="bottom" arrow>
        <IconButton
          onClick={() => onHandleIconClick(EFilterTableNameIcon.FILTER)}
          key={tablePhrases.filtering}
          iconName={'iconoir:filter'}
        />
      </Tooltip>
    </Box>
  );
};
