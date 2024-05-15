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

ChartJS.register(ArcElement, Tooltip, Legend);

function getGradient(
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
  const { data, labels } = props;

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: function (context: ScriptableContext<'doughnut'>) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return;
          }
          return [
            getGradient(ctx, chartArea, '#262626', '#383838'),
            getGradient(ctx, chartArea, '#7EBC59', '#4D7C32'),
          ];
        },
      },
    ],
  };

  return (
    <Doughnut
      data={chartData as ChartData<'doughnut'>}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}
