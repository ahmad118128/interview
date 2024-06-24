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
import { FilterForm } from './FilterForm';
import { StyledTitleNameWrapper } from './styled';

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
    setCollapse,
  } = props;

  if (props.hasModeHandler && !props.onHandleModeChange) {
    throw new Error(
      'if hasModeHandler equals true, you should pass onHandleModeChange prop!'
    );
  }

  return (
    <Accordion expanded={collapse} sx={{ boxShadow: 'none', padding: 0 }}>
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
          alignItems="center"
        >
          {props.hasModeHandler && (
            <>
              <Box
                display="flex"
                gap="1rem"
                alignItems="center"
                justifyContent="space-between"
              >
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
            </>
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
          <StyledTitleNameWrapper>
            <Typography variant="body1" color={theme.palette.primary.main}>
              {tableName}
            </Typography>
            <StyledChip label="24" />
          </StyledTitleNameWrapper>
        </Box>
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <FilterForm control={control} reset={reset} setCollapse={setCollapse} />
      </StyledAccordionDetails>
    </Accordion>
  );
};
