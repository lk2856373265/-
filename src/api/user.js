import request from '@/utils/request'
/**
 * 封装用户接口相关请求函数
 */

export const login = () => {
  return request({
    method: 'POST',
    url: '/api/all/login',
    data: 'login_name=13568683001&password=123456'
  })
}
