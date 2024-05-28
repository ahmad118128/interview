import { IconifyIconProps } from '@iconify/react/dist/iconify.js';

export type UsersFilterProps = {
  username: string;
  full_name: string;
  groups: string;
  is_active: string;
  q: string;
};

export enum EnumResponseCode {
  notFound = 'not_found',
  invalid = 'invalid',
  success = 'SUCCESS',
}

interface IResponse {
  code: EnumResponseCode;
  detail: string;
  data: unknown;
}

export interface IError extends IResponse {
  data: null;
}

export interface ISuccess extends IResponse {
  data: Record<string, unknown>;
}

export interface SnackBarType {
  display: boolean;
  status: 'danger' | 'success' | 'info' | 'warning';
  title?: string;
  message: string;
  btnLink?: string;
  btnText?: string;
}

export interface IconWithUrlProps {
  iconName: IconifyIconProps['icon'];
  url?: string;
  modalContent?: any;
  onClick?: () => void;
  disabled?: boolean;
  title: string;
}

export interface DeleteIconProps {
  id: number;
  disabled?: any;
  message?: string;
}
