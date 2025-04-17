import Axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { ErrorType } from 'models/api';

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
  get: async function get<Response = unknown>(url: string, options: AxiosRequestConfig = {}) {
    const res = await axios.get<Response>(url, options);
    return res;
  },
  patch: async function put<Request = any, Response = unknown>(url: string, data?: Request) {
    const res = await axios.patch<Response>(url, data);
    return res;
  },
  put: async function put<Request = any, Response = unknown>(url: string, data?: Request) {
    const res = await axios.put<Response>(url, data);
    return res;
  },
  post: async function post<Request = any, Response = unknown>(url: string, data?: Request) {
    const res = await axios.post<Response>(url, data);
    return res;
  },
  delete: async function del<Response = unknown>(url: string) {
    const res = await axios.delete<Response>(url);
    return res;
  },
};
