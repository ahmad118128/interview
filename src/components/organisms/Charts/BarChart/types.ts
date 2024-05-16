export interface BarChartProps {
  labels: unknown[];
  data: {
    label: string;
    data: number[];
  }[];
  legend?: boolean;
}
