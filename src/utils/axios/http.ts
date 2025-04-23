import Axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { ApiResponse, ErrorType } from 'models/api';

import { ApiException } from './exception';
const axios = Axios.create();

const interceptorResponseFulfilled = (res: AxiosResponse) => {
  if (200 <= res.status && res.status < 300) {
    return res.data;
  }

  return Promise.reject(res.data);
};

const interceptorResponseRejected = (error: AxiosError<ErrorType>) => {
  return Promise.reject(new ApiException(error.response?.data || 'UNKNOWN_ERROR'));
};

axios.interceptors.response.use(interceptorResponseFulfilled, interceptorResponseRejected);

export const http = {
  get: async function get<T, R>(url: string, options: AxiosRequestConfig = {}) {
    const res = await axios.get<ApiResponse<R>, ApiResponse<T>>(url, options);
    return res;
  },
  patch: async function put<T, R>(url: string, data?: T) {
    const res = await axios.patch<ApiResponse<R>, ApiResponse<T>>(url, data);
    return res;
  },
  put: async function put<T, R>(url: string, data?: T) {
    const res = await axios.put<ApiResponse<R>, ApiResponse<T>>(url, data);
    return res;
  },
  post: async function post<T, R>(url: string, data?: T) {
    const res = await axios.post<ApiResponse<R>, ApiResponse<T>>(url, data);
    return res;
  },
  delete: async function del<R>(url: string) {
    const res = await axios.delete<ApiResponse<R>>(url);
    return res;
  },
};
