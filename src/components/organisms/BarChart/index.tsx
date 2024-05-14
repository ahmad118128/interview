import { FC } from 'react';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  defaults,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { BarChartProps } from './types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
defaults.font.family = 'iran-sans';

export const BarChart: FC<BarChartProps> = (props) => {
  const { data, labels } = props;

  const barData: ChartData<'bar'> = {
    labels: labels,
    datasets: [
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
    <Bar
      data={barData}
      options={options}
      style={{ maxHeight: '224px' }}
      width="10rem"
    />
  );
};
