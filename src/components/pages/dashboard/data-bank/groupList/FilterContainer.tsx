import { Accordion, Box, Tooltip } from '@mui/material';

import {
  EFilterTableNameIcon,
  IconFilterModeTable,
  HeaderFilterTableProps,
  HeaderMode,
  EFilterModeIcon,
} from '../usersList/type';
import {
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledHoverIcon,
  StyledIconsContainer,
} from '../usersList/styled';
import theme from '@/theme';
import { leftIcons } from '@/components/CustomTable/widgets/FilterContainer/constants';
import { FilterIcon } from '@/components/CustomTable/shared';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import FilterForm from './FilterForm';

export const FilterContainer = (props: HeaderFilterTableProps) => {
  const {
    control,
    reset,
    chips,
    collapse,
    onHandleIconClick,
    activeMode = EFilterModeIcon.TABLE,
    refreshLoading,
    handleFiltersChips,
    onSearchClick,
  } = props;

  if (props.hasModeHandler && !props.onHandleModeChange) {
    throw new Error(
      'if hasModeHandler equals true, you should pass onHandleModeChange prop!'
    );
  }

  return (
    <Accordion expanded={collapse} sx={{ boxShadow: 'none' }}>
      <StyledAccordionSummary
        sx={{
          backgroundColor: theme.palette.grey[100],
        }}
      >
        <Box display="flex" flexDirection="row-reverse" gap="1rem">
          {props.hasModeHandler && (
            <Box display="flex" gap="1rem" alignItems="center">
              <Box height="36px" width="1px" />
              {leftIcons.map((item: IconFilterModeTable) => {
                return (
                  <Tooltip
                    key={item.title}
                    title={item.title}
                    placement="bottom"
                    arrow
                  >
                    <StyledHoverIcon
                      onClick={() =>
                        props.onHandleModeChange(item.mode as HeaderMode)
                      }
                      active={activeMode === item.mode}
                      key={item.title}
                    >
                      {item.img}
                    </StyledHoverIcon>
                  </Tooltip>
                );
              })}
            </Box>
          )}
          <StyledIconsContainer gap="1rem">
            <IconButton
              iconName="tabler:search"
              width={24}
              height={24}
              style={{
                border: `1px solid ${theme.palette.primary.main}`,
              }}
            />
            <FilterIcon
              onHandleIconClick={onHandleIconClick}
              handleFiltersChips={handleFiltersChips}
              chips={chips}
              active={false}
            />
          </StyledIconsContainer>
        </Box>
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <FilterForm control={control} reset={reset} />
      </StyledAccordionDetails>
    </Accordion>
  );
};
