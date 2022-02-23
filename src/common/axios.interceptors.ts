import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    _retry?: boolean;
  }
}

const onRequest = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
  try {
    const ip = await NetworkInfo.getIPV4Address();
    config.headers['Ip-Address'] = ip;
    const tokenInfo = await AsyncStorage.getItem('TOKEN_INFO');
    if (tokenInfo) {
      const dataToken = JSON.parse(tokenInfo);
      const {token} = dataToken;
      config.headers.authorization = token;
    }
  } catch (e) {
    console.log(e);
  }
  // console.info(`[request] [${JSON.stringify(config)}]`)

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  //console.error(`[request error] [${JSON.stringify(error)}]`)
  return Promise.reject(error);
};

const onResponse = (
  response: AxiosResponse,
): AxiosResponse<any> | Promise<AxiosResponse<any>> => {
  return response;
};

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance,
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(
    onResponse,
    async (error: AxiosError) => {
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        return axiosInstance(originalRequest);
      }
      return Promise.reject(error);
    },
  );
  return axiosInstance;
}
