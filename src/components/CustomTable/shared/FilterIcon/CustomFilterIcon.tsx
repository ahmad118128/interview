import { Box, Tooltip } from '@mui/material';
import { Icon } from '@iconify/react';
import theme from '@/theme';
import { type Props } from './types';
import { tablePhrases } from '../../strings';
import { StyledChip } from '../../widgets/FilterContainer/styled';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { EFilterTableNameIcon } from '../../widgets/FilterContainer/type';

export const CustomFilterIcon = (props: Props) => {
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

      <Tooltip title={tablePhrases.filtering} placement="bottom" arrow>
        <IconButton
          onClick={() => onHandleIconClick(EFilterTableNameIcon.FILTER)}
          key={tablePhrases.filtering}
          iconName={'fluent:filter-32-filled'}
          height={24}
          width={24}
          style={{
            border: `1px solid ${theme.palette.primary.main}`,
          }}
        />
      </Tooltip>
    </Box>
  );
};
