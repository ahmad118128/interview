import { Box, Tooltip } from '@mui/material';
import { type Props } from './types';
import { tablePhrases } from '../../strings';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { EFilterTableNameIcon } from '../../widgets/FilterContainer/type';

export const FilterIcon = (props: Props) => {
  const { onHandleIconClick, active } = props;
  return (
    <Box
      display="flex"
      key={tablePhrases.filtering}
      alignItems="center"
      gap={2}
    >
      <Tooltip title={tablePhrases.filtering} placement="bottom" arrow>
        <IconButton
          onClick={() => onHandleIconClick(EFilterTableNameIcon.FILTER)}
          key={tablePhrases.filtering}
          iconName={'material-symbols:filter-list'}
          className={active ? 'active' : ''}
        />
      </Tooltip>
    </Box>
  );
};
