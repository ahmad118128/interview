import { Dispatch, ReactElement, SetStateAction } from 'react';

export type CustomModalProps = {
  id?: number | string;
  open: boolean;
  onClose?: () => void;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  title?: string;
  children?: ReactElement;
  buttons?: boolean;
  onSubmit?: () => void;
};
