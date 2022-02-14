
import axios from 'axios'
import axiosRetry from 'axios-retry'
import jsonpAdapter from 'axios-jsonp'
import ElementUI from 'element-ui';
const CancelToken = axios.CancelToken

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
});

axiosRetry(service, { retries: 3 })

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


export async function request(url, config) {
  const response = await service.request({ url, ...config })
  const result = response.data
  // 你的业务判断逻辑
  return result
}

export function jsonp(url, config) {
  return request(url, { ...config, adapter: jsonpAdapter })
}


export function withCancelToken(fetcher) {
  let abort

  function send(data, config) {
    cancel()

    const cancelToken = new CancelToken(cancel => (abort = cancel))
    return fetcher(data, { ...config, cancelToken })
  }

  function cancel(message = 'abort') {
    if (abort) {
      abort(message)
      abort = null
    }
  }

  return [send, cancel]
}

export default service;
