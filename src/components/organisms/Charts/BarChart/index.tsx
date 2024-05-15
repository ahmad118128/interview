import { FC } from 'react';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { BarChartProps } from './types';
import { Box } from '@mui/material';
import CustomLegend from '../CustomLegend';
import { BarBox } from './styled';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart: FC<BarChartProps> = (props) => {
  const { data, labels, legend = false } = props;

  const barData: ChartData<'bar'> = {
    labels: labels,
    datasets:
      data.length === 1
        ? [
            {
              ...data[0],
              backgroundColor: ['#7EBC59', '#383838'],
              borderColor: ['#383838', '#7EBC59'],
              borderWidth: 1,
              barThickness: 30,
            },
          ]
        : [
            {
              ...data[0],
              backgroundColor: '#383838',
              borderColor: '#7EBC59',
              borderWidth: 1,
              barThickness: 20,
            },
            {
              ...data[1],
              backgroundColor: '#7EBC59',
              borderColor: '#383838',
              borderWidth: 1,
              barThickness: 20,
            },
          ],
  };

  const options: ChartOptions<'bar'> = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <BarBox>
      <Bar data={barData} options={options} />
      {legend && <CustomLegend labels={[data[0].label, data[1].label]} />}
    </BarBox>
  );
};
