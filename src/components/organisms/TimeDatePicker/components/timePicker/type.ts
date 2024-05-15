import { ChangeEvent, FocusEvent, MouseEvent } from 'react';

export type TTimePickerProps = {
  changeHandler: (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | MouseEvent<HTMLSpanElement>
  ) => void;
  blurHandler: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  time: {
    minutes: string;
    hours: string;
    meridiem: string;
  };
};
