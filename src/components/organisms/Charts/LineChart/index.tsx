import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  Filler,
  ChartOptions,
  ScriptableContext,
  ChartArea,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { LineChartProps } from './type';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function getGradient(
  ctx: CanvasRenderingContext2D,
  chartArea: ChartArea,
  color1: string,
  color2: string
) {
  let gradient;
  if (!gradient) {
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
  }
  return gradient;
}

export default function LineChart(props: LineChartProps) {
  const { labels, data } = props;

  const chartData = {
    labels,
    datasets: [
      {
        data,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderColor: '#7EBC59 ',
        backgroundColor: function (context: ScriptableContext<'bar'>) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return;
          }
          return getGradient(ctx, chartArea, '#7EBC591A', '#383838');
        },
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: true,
      },
      y: {
        grid: {
          display: false,
        },
        stacked: true,
      },
    },
  };
  return <Line options={options} data={chartData as ChartData<'line'>} />;
}
