import { Problem } from '@/services/core/type';

export type TUserModel = {
  username: string;
  password: string;
};

export type OperationResult<T> = {
  isSuccess: boolean;
  error?: Problem | string;
  response?: T | void;
};

export interface UserResponse {
  id?: string;
  username: string;
  email?: string | null;
  role: any;
}
