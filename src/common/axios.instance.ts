import {setupInterceptorsTo} from './axios.interceptors';
import axios from 'axios';
import {map} from 'rxjs/operators';
import {defer, Observable} from 'rxjs';

// Singleton instance
export const axiosInstance = setupInterceptorsTo(
  axios.create({
    baseURL: 'https://api.reddit.com',
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
  }),
);
axiosInstance.defaults.timeout = 20000;

const get = <T>(url: string, queryParams?: object): Observable<T> => {
  return defer(() => axiosInstance.get<T>(url, {params: queryParams})).pipe(
    map(result => result.data),
  );
};

const post = <T>(
  url: string,
  body: object,
  queryParams?: object,
): Observable<T | void> => {
  return defer(() =>
    axiosInstance.post<T>(url, body, {params: queryParams}),
  ).pipe(map(result => result.data));
};

const put = <T>(
  url: string,
  body: object,
  queryParams?: object,
): Observable<T | void> => {
  return defer(() =>
    axiosInstance.put<T>(url, body, {params: queryParams}),
  ).pipe(map(result => result.data));
};

const patch = <T>(
  url: string,
  body: object,
  queryParams?: object,
): Observable<T | void> => {
  return defer(() =>
    axiosInstance.patch<T>(url, body, {params: queryParams}),
  ).pipe(map(result => result.data));
};

const deleteR = <T>(url: string, id: number): Observable<T | void> => {
  return defer(() => axiosInstance.delete(`${url}/${id}`)).pipe(
    map(result => result.data),
  );
};

export default {get, post, put, patch, delete: deleteR};
