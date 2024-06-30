export interface DoughnutChartProps {
  chartLabel?: string;
  labels: string[];
  data: number[];
  legend: boolean;
  selectedData?: number;
  firstColorGrade1?: string;
  firstColorGrade2?: string;
  secondColorGrade1?: any;
  secondColorGrade2?: any;
}
