import { Dispatch, ReactElement, SetStateAction } from 'react';

export type CustomModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  errorTitle?: string;
  title?: string;
  children?: ReactElement;
  buttons?: boolean;
  activeButtonHandler?: () => void;
  deleteButtonHandler?: () => void;
};
