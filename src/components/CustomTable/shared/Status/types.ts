export type Props = {
  state?: boolean;
  size?: number;
  color?: string;
  style?: Record<string, any>;
};

export enum EStatus {
  ACTIVATE = 'فعال',
  DEACTIVATE = 'غیرفعال',
}
