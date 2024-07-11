export interface IModule {
  id?: number;
  name: string;
  type: string;
  mrl: string;
  active?: boolean;
}

export interface IModules {
  data: IModule[];
  count: number;
  allPages: number;
}
