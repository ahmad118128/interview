'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { cardData } from './constant';

import DashboardCard from '@/components/molecules/DashboardCard';
import DashboardChartCard from '@/components/organisms/DashboardChartCard';
import { BarChart } from '@/components/organisms/Charts/BarChart';
import LineChart from '@/components/organisms/Charts/LineChart';
import DoughnutChart from '@/components/organisms/Charts/DoughnutChart';

import { generalStr } from '@/strings';

export default function DashboardPage() {
  return (
    <Grid container spacing={4}>
      {cardData.map((card) => (
        <Grid key={card.id} item xs={12} sm={6} md={3}>
          <DashboardCard title={card.title} count={card.count} src={card.src} />
        </Grid>
      ))}
      <Grid item xs={12} md={12} lg={6}>
        <DashboardChartCard title={generalStr.numberPersons}>
          <LineChart
            labels={['January', 'February', 'March', 'April']}
            data={[0, 120, 40, 90]}
          />
        </DashboardChartCard>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DashboardChartCard title={generalStr.cameraSituation}>
          <DoughnutChart
            legend={true}
            chartLabel="Clinet"
            labels={['غیر فعال', ' فعال']}
            data={[120, 80]}
            showTooltip
          />
        </DashboardChartCard>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DashboardChartCard title={generalStr.gender}>
          <DoughnutChart
            legend={true}
            chartLabel="Data"
            labels={['زن', 'مرد']}
            data={[120, 80]}
            showTooltip
          />
        </DashboardChartCard>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <DashboardChartCard title={generalStr.ageRange}>
          <BarChart
            labels={['January', 'February', 'March', 'April']}
            data={[
              { label: 'مرد', data: [120, 130, 140, 15] },
              { label: 'زن', data: [30, 40, 50, 120] },
            ]}
            legend={true}
          />
        </DashboardChartCard>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <DashboardChartCard title={generalStr.stateList}>
          <BarChart
            labels={['January', 'February', 'March', 'April']}
            data={[{ label: 'نام لیست', data: [120, 130, 140, 15] }]}
            style={{
              height: '224px',
            }}
          />
        </DashboardChartCard>
      </Grid>
    </Grid>
  );
}
