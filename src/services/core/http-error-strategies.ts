import { Problem } from './type';

type ApiErrorHandler = (errorData: Problem) => void;

const validationErrorStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData } as Problem;
};

const notFoundErrorStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData, description: 'سرویس مورد نظر یافت نشد' } as Problem;
};

const unauthorizedErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    description: 'احراز هویت ناموفق بود. لطفا دوباره وارد شوید.',
  } as Problem;
};

const forbiddenErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    description: 'شما مجوز دسترسی به این منبع را ندارید.',
  } as Problem;
};

const unhandledExceptionStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData, description: 'خطای سرور' } as Problem;
};

export const networkErrorStrategy = () => {
  throw { description: 'خطای شبکه' } as Problem;
};

export const errorHandler: Record<number, ApiErrorHandler> = {
  400: validationErrorStrategy,
  401: (errorData) =>
    (errorData.description
      ? validationErrorStrategy
      : unauthorizedErrorStrategy)(errorData),
  403: forbiddenErrorStrategy,
  404: notFoundErrorStrategy,
  500: unhandledExceptionStrategy,
};
