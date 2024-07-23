import { Accordion, Box } from '@mui/material';
import { FilterIcon } from '@/components/CustomTable/shared/index';
import { StyledAccordionDetails, StyledAccordionSummary } from './styled';
import { HeaderFilterTableProps } from './type';

export const FilterContainer = (props: HeaderFilterTableProps) => {
  const {
    children,
    handleFiltersChips,
    chips,
    collapse,
    onHandleIconClick,
    radioButton,
    fullWidthInput,
  } = props;

  if (props.hasModeHandler && !props.onHandleModeChange) {
    throw new Error(
      'if hasModeHandler equals true, you should pass onHandleModeChange prop!'
    );
  }

  return (
    <Accordion expanded={collapse}>
      <StyledAccordionSummary>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {radioButton && radioButton}
            <FilterIcon
              onHandleIconClick={onHandleIconClick}
              handleFiltersChips={handleFiltersChips}
              chips={chips}
              active={false}
            />
          </Box>
          {fullWidthInput}
        </Box>
      </StyledAccordionSummary>
      <StyledAccordionDetails>{children}</StyledAccordionDetails>
    </Accordion>
  );
};
