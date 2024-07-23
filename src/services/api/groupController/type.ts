interface GroupApiResponseData {
  id: number;
  name: string;
  description: string;
}

export interface GroupApiResponse {
  content: GroupApiResponseData;
  totalElements: number;
  totalPages: number;
}
