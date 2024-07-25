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
import CustomLegend from '../CustomLegend';
import { BarBox } from './styled';
import theme from '@/theme';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart: FC<BarChartProps> = (props) => {
  const { data, labels, legend = false, style } = props;

  const barData: ChartData<'bar'> = {
    labels: labels,
    datasets:
      data.length === 1
        ? [
            {
              ...data[0],
              backgroundColor: [
                theme.palette.primary.light,
                theme.palette.primary.main,
              ],
              borderColor: [
                theme.palette.primary.main,
                theme.palette.primary.light,
              ],
              borderWidth: 1,
              barThickness: 30,
            },
          ]
        : [
            {
              ...data[0],
              backgroundColor: theme.palette.primary.main,
              borderColor: theme.palette.primary.light,
              borderWidth: 1,
              maxBarThickness: 10,
              categoryPercentage: 0.3,
            },
            {
              ...data[1],
              backgroundColor: theme.palette.primary.light,
              borderColor: theme.palette.primary.main,
              borderWidth: 1,
              maxBarThickness: 10,
              categoryPercentage: 0.3,
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
      <Bar
        data={barData}
        options={options}
        style={
          style || { maxHeight: '14rem', maxWidth: '22rem', minHeight: '14rem' }
        }
      />
      {legend && <CustomLegend labels={[data[0].label, data[1].label]} />}
    </BarBox>
  );
};
