import { IWatchlist } from '../watchlists';

export interface ICamera {
  id?: number;
  mrl: string;
  organizationName: string;
  stationName: string;
  saveFrameStrategy: number;
  watchlist: IWatchlist;
  active: boolean;
}

export interface ICameras {
  data: ICamera;
  count: number;
  allpages: number;
}
