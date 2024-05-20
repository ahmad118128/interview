import React, { ReactNode } from 'react';
import { StyledBoxTitle, StyledChartBox } from './styled';

type DasboardChartCardProps = {
  title: string;
  children: ReactNode;
};

export default function DashboardChartCard(props: DasboardChartCardProps) {
  const { title, children } = props;
  return (
    <StyledChartBox>
      <StyledBoxTitle>{title}</StyledBoxTitle>
      {children}
    </StyledChartBox>
  );
}
