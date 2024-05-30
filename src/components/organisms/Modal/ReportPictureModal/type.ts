import { Dispatch, SetStateAction } from 'react';

export type ReportPictureModalProps = {
  data: {
    src: string;
    name: string;
    sex: string;
    age: number;
    date?: string;
    arrow: string;
    birthCity: String;
    agreementPercent: string;
  };
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
};
