import { Accordion, Box, Tooltip, Typography } from '@mui/material';
import theme from '@/theme';
import { leftIcons } from '@/components/CustomTable/widgets/FilterContainer/constants';
import { FilterIcon } from '@/components/CustomTable/shared';
import { SearchIcon } from '@/components/CustomTable/shared/SearchIcon';
import {
  EFilterModeIcon,
  HeaderFilterTableProps,
  HeaderMode,
  IconFilterModeTable,
} from './type';
import {
  IconsWrapper,
  InnerAccardionSummary,
  StyledAccardion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledChip,
  StyledHoverIcon,
  StyledIconsContainer,
  TableNameWrapper,
} from './styled';

export const FilterContainer = (props: HeaderFilterTableProps) => {
  const {
    chips,
    collapse,
    onHandleIconClick,
    activeMode = EFilterModeIcon.TABLE,
    handleFiltersChips,
    tableName,
    search,
    setSearch,
    chipNumber,
    children,
  } = props;

  if (props.hasModeHandler && !props.onHandleModeChange) {
    throw new Error(
      'if hasModeHandler equals true, you should pass onHandleModeChange prop!'
    );
  }

  return (
    <StyledAccardion expanded={collapse}>
      <StyledAccordionSummary
        sx={{
          backgroundColor: theme.palette.grey[100],
        }}
      >
        <InnerAccardionSummary>
          <StyledIconsContainer gap="0.5rem">
            <SearchIcon
              onHandleIconClick={onHandleIconClick}
              handleFiltersChips={handleFiltersChips}
              chips={chips}
              active={false}
              search={search}
              setSearch={setSearch}
            />

            <FilterIcon
              onHandleIconClick={onHandleIconClick}
              handleFiltersChips={handleFiltersChips}
              chips={chips}
              active={false}
            />
          </StyledIconsContainer>
          <TableNameWrapper>
            <Typography variant="body1" color={theme.palette.primary.main}>
              {tableName}
            </Typography>
            <StyledChip label={chipNumber} />
          </TableNameWrapper>
        </InnerAccardionSummary>
      </StyledAccordionSummary>
      <StyledAccordionDetails>{children}</StyledAccordionDetails>
    </StyledAccardion>
  );
};
