export type CustomSnackbarProps = {
  open: boolean;
  status: 'error' | 'success' | 'info' | 'warning';
  message: string;
  duration?: number;
  onClose: () => void;
};
