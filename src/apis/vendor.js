import request from '@/utils/request'
export const MP_PATH = '/mp-web'

/**
 * 关联 渠道
 * @param param
 */
export const vendorDict = param =>
  request({
    url: `${MP_PATH}/vendor/dict`,
    method: 'POST',
    data: param
  })
