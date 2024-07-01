import { Accordion, Box, Tooltip, Typography } from '@mui/material';
import theme from '@/theme';
import { leftIcons } from '@/components/CustomTable/widgets/FilterContainer/constants';
import { FilterIcon } from '@/components/CustomTable/shared';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import {
  EFilterModeIcon,
  HeaderFilterTableProps,
  HeaderMode,
  IconFilterModeTable,
} from '../../data-bank/usersList/type';
import {
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledChip,
  StyledHoverIcon,
  StyledIconsContainer,
} from '../../data-bank/usersList/styled';
import FilterForm from './FilterForm';
import { SearchIcon } from '@/components/CustomTable/shared/SearchIcon';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';

export const FilterContainer = (props: HeaderFilterTableProps) => {
  const {
    control,
    reset,
    chips,
    collapse,
    onHandleIconClick,
    activeMode = EFilterModeIcon.TABLE,
    handleFiltersChips,
    tableName,
    search,
    setSearch,
  } = props;

  if (props.hasModeHandler && !props.onHandleModeChange) {
    throw new Error(
      'if hasModeHandler equals true, you should pass onHandleModeChange prop!'
    );
  }

  return (
    <Accordion
      expanded={collapse}
      sx={{ boxShadow: 'none', padding: 0, borderRadius: '10px' }}
    >
      <StyledAccordionSummary
        sx={{
          backgroundColor: theme.palette.grey[100],
        }}
      >
        <Box
          display="flex"
          flexDirection="row-reverse"
          justifyContent="space-between"
          width="100%"
          alignItems="flex-start"
        >
          <StyledIconsContainer gap="0.5rem">
            <SearchIcon
              onHandleIconClick={onHandleIconClick}
              handleFiltersChips={handleFiltersChips}
              chips={chips}
              active={false}
              search={search}
              setSearch={setSearch}
              control={control}
            />

            <FilterIcon
              onHandleIconClick={onHandleIconClick}
              handleFiltersChips={handleFiltersChips}
              chips={chips}
              active={false}
            />
          </StyledIconsContainer>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'baseline',
            }}
          >
            <Typography variant="body1" color={theme.palette.primary.main}>
              {tableName}
            </Typography>
            <StyledChip label="24"></StyledChip>
          </Box>
        </Box>
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <FilterForm control={control} reset={reset} />
      </StyledAccordionDetails>
    </Accordion>
  );
};
