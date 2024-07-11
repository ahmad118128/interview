interface AllWatchlistApiResponseData {
  id: number;
  name: string;
  similarity: number;
  description: string;
  active: boolean;
}

export interface AllWatchListResponse {
  content: AllWatchlistApiResponseData;
  totalElements: number;
  totalPages: number;
}
