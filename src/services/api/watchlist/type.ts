interface AllWatchlistApiResponseData {
  id: number;
  name: string;
  similarity: number;
  description: string;
  active: boolean;
}

export interface AllWatchListResponse {
  data: AllWatchlistApiResponseData;
  count: number;
  allPages: number;
}
