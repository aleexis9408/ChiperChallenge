import axios from 'axios';
import {map} from 'rxjs/operators';
import {defer, Observable} from 'rxjs';

// Singleton instance

export const axiosInstance = axios.create({
  baseURL: 'https://api.reddit.com',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 2000,
});

const get = <T>(url: string, queryParams?: object): Observable<T> => {
  return defer(() => axiosInstance.get<T>(url, {params: queryParams})).pipe(
    map(result => result.data),
  );
};

export default {get};
