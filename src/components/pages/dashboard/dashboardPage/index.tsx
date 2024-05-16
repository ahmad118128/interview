'use client';
import React from 'react';
import DashboardCard from '@/components/molecules/DashboardCard';
import { Grid } from '@mui/material';
import DoughnutChart from '@/components/organisms/Charts/DoughnutChart';
import LineChart from '@/components/organisms/Charts/LineChart';
import { cardData } from './constant';
import { StyledChartBox, StyledTitleBox } from './styles';
import { BarChart } from '@/components/organisms/Charts/BarChart';

export default function DashboardPage() {
  return (
    <Grid container spacing={4}>
      {cardData.map((card) => (
        <Grid key={card.id} item xs={12} sm={6} md={3}>
          <DashboardCard title={card.title} count={card.count} src={card.src} />
        </Grid>
      ))}
      <Grid item md={6}>
        <StyledChartBox>
          <StyledTitleBox>تعداد افراد عبوری</StyledTitleBox>
          <LineChart
            labels={['January', 'February', 'March', 'April']}
            data={[0, 120, 40, 90]}
          />
        </StyledChartBox>
      </Grid>
      <Grid item md={3}>
        <StyledChartBox>
          <StyledTitleBox>وضعیت کلاینت‌ها</StyledTitleBox>
          <DoughnutChart
            chartLabel="Clinet"
            labels={['نامشخص', 'شناسایی شده']}
            data={[120, 80]}
          />
        </StyledChartBox>
      </Grid>
      <Grid item md={3}>
        <StyledChartBox>
          <StyledTitleBox>جنسیت افراد ثبت نامی</StyledTitleBox>
          <DoughnutChart
            chartLabel="Data"
            labels={['زن', 'مرد']}
            data={[120, 80]}
          />
        </StyledChartBox>
      </Grid>
      <Grid item md={6}>
        <StyledChartBox>
          <StyledTitleBox>بازه‌ی سنی افراد عبوری</StyledTitleBox>
          <BarChart
            labels={['January', 'February', 'March', 'April']}
            data={[
              { label: 'مرد', data: [120, 130, 140, 15] },
              { label: 'زن', data: [30, 40, 50, 120] },
            ]}
            legend={true}
          />
        </StyledChartBox>
      </Grid>
      <Grid item md={6}>
        <StyledChartBox>
          <StyledTitleBox>وضعیت لیست‌های نظارتی</StyledTitleBox>
          <BarChart
            labels={['January', 'February', 'March', 'April']}
            data={[{ label: 'مرد', data: [120, 130, 140, 15] }]}
          />
        </StyledChartBox>
      </Grid>
    </Grid>
  );
}
