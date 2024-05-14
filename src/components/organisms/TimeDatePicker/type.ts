export type TProps = {
  label: string;
  value: number;
  onChange: (value: number | null) => void;
  defaultValue?: number;
  readOnly?: boolean;
  disabled?: boolean;
  error?: string;
  name: string;
  disablePast?: boolean;
  disableFuture?: boolean;
  minDateTime?: number;
  maxDateTime?: number;
};
