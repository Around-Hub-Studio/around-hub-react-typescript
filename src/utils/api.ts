import axios from 'axios';

export const jsonPlaceholderRequest = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  withCredentials: false,
  timeout: 3000,
});

jsonPlaceholderRequest.interceptors.request.use(
  (config) => {
    console.log('호출 전 수행할 작업!');
    /*config.headers.Authorization = `Bearer ${localStorage.getItem(
                      'accessToken'
                    )}`;*/
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

jsonPlaceholderRequest.interceptors.response.use(
  (response) => {
    console.log('응답 데이터를 가공하여 반환');
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
