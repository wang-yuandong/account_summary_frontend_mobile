import request from '@/utils/request'
export const MP_PATH = '/mp-web'

/**
 * 关联 身体部位
 * @param param
 */
export const bodyPartDict = param =>
  request({
    url: `${MP_PATH}/body-part/dict`,
    method: 'POST',
    data: param
  })
