export interface BarChartProps {
  labels: unknown[];
  data: [
    {
      label: string;
      data: number[];
    },
    {
      label: string;
      data: number[];
    },
  ];
}
