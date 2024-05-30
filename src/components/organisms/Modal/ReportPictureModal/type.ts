import { Dispatch, SetStateAction } from 'react';

export type ReportPictureModalProps = {
  src: string;
  name: string;
  sex: 'مرد با احتمال بالا';
  age: number;
  date?: string;
  arrow: 'ورودی - خروجی';
  birthCity: String;
  agreementPercent: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
