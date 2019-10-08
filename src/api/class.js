import request from '@/utils/request'
// import qs from './qs'
/**
 * 封装微课接口相关请求函数
 */

// 获取微课列表
export const getClass = ({
  subjectId,
  page,
  pageNum,
  courseType,
  type,
  PressId
}) => {
  return request({
    method: 'POST',
    url: '/api/course/get_course_list',
    params: {
      // subject_id: subjectId,
      // page,
      // page_num: pageNum,
      // course_type: courseType,
      // type,
      // press_id: PressId
    }
  })
}
// 获取资源
export const getResources = () => {
  return request({
    method: 'POST',
    url: '/statistics/index/resource',
    data: 'login_name=13568683001&password=123456'
  })
}
