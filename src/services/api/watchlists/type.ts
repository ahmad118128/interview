export interface IWatchlist {
  id?: number;
  name: string;
  similarity: number;
  description: string;
  active: boolean;
}

export interface IWatchlists {
  data: IWatchlist[];
  count: number;
  allPages: number;
}
