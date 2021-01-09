import {request} from "./request";

export function getHomeMutatidata() {
  return request({
    url:'/home/multidata'
  })
}
//请求流行新款潮流的数据
export function getHomeGoogs(type, page) {
  return request({
    url:'home/data',
    method:'get',
    params: {
      type,
      page
    }
  })
}
