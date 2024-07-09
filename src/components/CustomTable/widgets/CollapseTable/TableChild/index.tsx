'use client';
import { StyledContainer, StyledDetailsWrapper } from './styled';

export const Child = () => {
  //   const { row } = props;
  //   const explanation = row.explication;

  return (
    <StyledContainer>
      <StyledDetailsWrapper variant="body3">test1</StyledDetailsWrapper>
      <StyledDetailsWrapper variant="body3">test2</StyledDetailsWrapper>
      <StyledDetailsWrapper variant="body3">test3</StyledDetailsWrapper>
    </StyledContainer>
  );
};
