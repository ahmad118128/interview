import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ScriptableContext,
  ChartArea,
  ChartData,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutChartProps } from './type';
import { Box, Grid, Typography } from '@mui/material';
import CustomLegend from '../CustomLegend';
import { DetailsBox, DoughnutBox } from './styled';

ChartJS.register(ArcElement, Tooltip, Legend);

export function getGradient(
  ctx: CanvasRenderingContext2D,
  chartArea: ChartArea,
  color1: string,
  color2: string
) {
  let gradient;
  if (!gradient) {
    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;
    const r = Math.min(
      (chartArea.right - chartArea.left) / 2,
      (chartArea.bottom - chartArea.top) / 2
    );
    gradient = ctx.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      r
    );
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
  }
  return gradient;
}

export default function DoughnutChart(props: DoughnutChartProps) {
  const {
    data,
    labels,
    showTooltip,
    chartLabel,
    firstColorGrade1,
    firstColorGrade2,
    secondColorGrade1,
    secondColorGrade2,
    legend,
    selectedData,
  } = props;

  const chartData = {
    labels,
    datasets: [
      {
        data,
        rotation: 90,
        backgroundColor: function (context: ScriptableContext<'doughnut'>) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return;
          }
          return [
            firstColorGrade1 && firstColorGrade2
              ? getGradient(ctx, chartArea, firstColorGrade1, firstColorGrade2)
              : getGradient(ctx, chartArea, '#7EBC59', '#4D7C32'),
            secondColorGrade1 && secondColorGrade2
              ? getGradient(
                  ctx,
                  chartArea,
                  secondColorGrade1,
                  secondColorGrade2
                )
              : getGradient(ctx, chartArea, '#383838', '#262626'),
          ];
        },
        fill: false,
      },
    ],
  };

  return (
    <DoughnutBox>
      <Doughnut
        data={chartData as ChartData<'doughnut'>}
        options={{
          responsive: true,
          plugins: {
            tooltip: {
              enabled: showTooltip ? showTooltip : true,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
      <DetailsBox>
        {chartLabel === '%' ? (
          <Typography variant="h1" fontWeight={900}>
            {selectedData}
            {chartLabel}
          </Typography>
        ) : (
          <>
            <Typography variant="h1" fontWeight={900}>
              {data.reduce((total, num) => total + num)}
            </Typography>
            <Typography variant="h2">{chartLabel}</Typography>
          </>
        )}
      </DetailsBox>
      {legend ? <CustomLegend labels={labels} /> : null}
    </DoughnutBox>
  );
}
