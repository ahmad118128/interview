import { Dispatch, SetStateAction } from 'react';

export type thumbnailModalProps = {
  open: boolean;
  handleClose: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  errorTitle?: string;
  title?: string;
  src: string;
};
