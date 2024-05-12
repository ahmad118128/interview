import { Accordion, Box, Tooltip } from '@mui/material';
import { FilterIcon } from '../../shared';
import { leftIcons } from './constants';
import {
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledHoverIcon,
  StyledIconsContainer,
} from './styled';
import {
  IconFilterModeTable,
  HeaderFilterTableProps,
  HeaderMode,
  EFilterModeIcon,
} from './type';
import theme from '@/theme';

export const FilterContainer = (props: HeaderFilterTableProps) => {
  const {
    children,
    collapse,
    onHandleIconClick,
    activeMode = EFilterModeIcon.TABLE,
  } = props;

  if (props.hasModeHandler && !props.onHandleModeChange) {
    throw new Error(
      'if hasModeHandler equals true, you should pass onHandleModeChange prop!'
    );
  }

  return (
    <Accordion expanded={collapse}>
      <StyledAccordionSummary>
        <Box display="flex" flexDirection="row-reverse" gap="1rem">
          {props.hasModeHandler && (
            <Box display="flex" gap="1rem" alignItems="center">
              <Box
                height="36px"
                width="1px"
                bgcolor={theme.palette.primary.dark}
              />
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
            <FilterIcon
              onHandleIconClick={onHandleIconClick}
              active={collapse}
            />
          </StyledIconsContainer>
        </Box>
      </StyledAccordionSummary>
      <StyledAccordionDetails>{children}</StyledAccordionDetails>
    </Accordion>
  );
};
