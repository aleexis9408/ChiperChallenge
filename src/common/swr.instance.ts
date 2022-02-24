import {axiosInstance} from './axios.instance';

export const fetcher = (url: string) =>
  axiosInstance.get(url).then(response => response.data);
