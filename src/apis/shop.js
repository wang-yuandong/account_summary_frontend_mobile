import request from '@/utils/request'
export const MP_PATH = '/mp-web'

/**
 * 关联 门店
 * @param param
 */
export const shopDict = param =>
  request({
    url: `${MP_PATH}/shop/dict`,
    method: 'POST',
    data: param
  })
