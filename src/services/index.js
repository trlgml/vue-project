
import axios from 'axios'
import ElementUI from 'element-ui';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
});

service.interceptors.request.use(
  (config) => {
    return config
  }, (error) => {
    return Promise.reject(error)
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data
  }, (error) => {
    ElementUI.Message({
      message: '网络请求失败',
      type: 'error'
    });
    return Promise.reject(error)
  }
);

export default service;
