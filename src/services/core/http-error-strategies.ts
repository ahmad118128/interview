import { Problem } from './type';

type ApiErrorHandler = (errorData: Problem) => void;

const badRequestErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } as Problem;
};

const validationErrorStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData } as Problem;
};

const notFoundErrorStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData, detail: 'سرویس مورد نظر یافت نشد' } as Problem;
};

const unauthorizedErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: 'دسترسی به سرویس مورد نظر امکان پذیر نمی باشد',
  } as Problem;
};

const unhandledExceptionStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData, detail: 'خطای سرور' } as Problem;
};

export const networkErrorStrategy = () => {
  throw { detail: 'خطای شبکه' } as Problem;
};

export const errorHandler: Record<number, ApiErrorHandler> = {
  400: (errorData) =>
    (errorData.errors ? validationErrorStrategy : badRequestErrorStrategy)(
      errorData
    ),
  403: unauthorizedErrorStrategy,
  404: notFoundErrorStrategy,
  500: unhandledExceptionStrategy,
};
