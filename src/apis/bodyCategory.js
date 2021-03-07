import request from '@/utils/request'
export const MP_PATH = '/mp-web'

/**
 * 关联 身体部位分类
 * @param param
 */
export const dictBodyCategory = param =>
  request({
    url: `${MP_PATH}/body-category/dict`,
    method: 'POST',
    data: param
  })
