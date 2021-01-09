import axios from 'axios'

export function request(config) {
  const instance = new axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:5000
  })
  //拦截请求
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  //拦截响应
  axios.interceptors.response.use(res =>{
    return res.data
  },err => {
    console.error(err);
  })
  return instance(config);
}
