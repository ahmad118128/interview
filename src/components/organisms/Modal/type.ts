import { Dispatch, ReactElement, SetStateAction } from 'react';

export type CustomModalProps = {
  id?: number | string;
  open: boolean;
  handleClose?: () => void;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  errorTitle?: string;
  title?: string;
  children?: ReactElement;
  buttons?: boolean;
  onSubmit?: () => void;
};
