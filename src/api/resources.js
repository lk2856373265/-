import request from '@/utils/request'
/**
 * 封装资源接口相关请求函数
 */

export const getResources = () => {
  return request({
    method: 'GET',
    url: '/statistics/index/resource'
  })
}
