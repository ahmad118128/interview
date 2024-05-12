import { Dispatch, SetStateAction } from 'react';

export type TSidebarContext = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
