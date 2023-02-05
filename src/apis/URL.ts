import axios, { AxiosResponse } from 'axios';

export const ROOT_BASE_URL = 'https://api.github.com/users';

export const authenCallApi1 = (token: string) => {
  const instance = axios.create({
    baseURL: ROOT_BASE_URL,
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
  });
  instance.interceptors.request.use((config: any) => {
    return config;
  });

  instance.interceptors.response.use(
    (res: AxiosResponse) => {
      // console.log("responsed");
      if (res.status === 404) {
        // alert("User response doesn't have permission!");
      }
      return res;
    },
    (err) => {
      if (err.request.status === 401) {
        // alert("User request doesn't have permission!");
      }
    }
  );

  return instance;
};
