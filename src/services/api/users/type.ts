export interface IRole {
  id: number;
  name: string;
}

export interface IUser {
  id?: number;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  roles: IRole[];
}

export interface IUsers {
  data: IUser[];
  count: number;
  allPages: number;
}

export type PageParamsType = {
  pageNo: number;
};
