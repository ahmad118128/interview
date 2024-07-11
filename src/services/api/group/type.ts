export interface IGroup {
  id?: number;
  name: string;
  description: string;
}

export interface IGroups {
  data: IGroup[];
  count: number;
  allPages: number;
}
