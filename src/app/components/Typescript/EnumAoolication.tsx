'use client';

enum EServiceStatus {
  okRequest = 200,
  badRequest = 400,
  ServerError = 500,
}

export interface IGetUserData {
  status: EServiceStatus;
  isPending: boolean;
  isError: boolean;
}

export async function giveUserStateBaseOnRequest(response: IGetUserData) {
  if (response.status === EServiceStatus.okRequest) {
    return 'you get the write request';
  }
  if (response.status === EServiceStatus.ServerError) {
    return 'you get the ServerError ';
  }
  if (response.status === EServiceStatus.badRequest) {
    return 'you get the badRequest ';
  }
}
