import { Accordion, Box, Tooltip } from '@mui/material';
import { FilterIcon, FullTextSearch } from '../../shared';
import { CircularLoading } from '../../shared/Loading/circularLoading';
import { leftIcons } from './constants';
import {
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledHoverIcon,
  StyledIconsContainer,
} from './styled';
import {
  EFilterTableNameIcon,
  IconFilterModeTable,
  HeaderFilterTableProps,
  HeaderMode,
  EFilterModeIcon,
} from './type';
import theme from '@/theme';
import { tablePhrases } from '../../strings';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';

export const FilterContainer = (props: HeaderFilterTableProps) => {
  const {
    children,
    chips,
    collapse,
    onHandleIconClick,
    activeMode = EFilterModeIcon.TABLE,
    refreshLoading,
    handleFiltersChips,
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
              handleFiltersChips={handleFiltersChips}
              chips={chips}
            />
            <FullTextSearch />
            {refreshLoading ? (
              <CircularLoading size={24} />
            ) : (
              <Tooltip title={tablePhrases.refresh} placement="bottom" arrow>
                <IconButton
                  iconName="ion:refresh-outline"
                  onClick={() =>
                    onHandleIconClick(EFilterTableNameIcon.REFRESH)
                  }
                />
              </Tooltip>
            )}
          </StyledIconsContainer>
        </Box>
      </StyledAccordionSummary>
      <StyledAccordionDetails>{children}</StyledAccordionDetails>
    </Accordion>
  );
};
