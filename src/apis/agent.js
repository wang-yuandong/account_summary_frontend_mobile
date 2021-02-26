import request from '@/utils/request'
export const MP_PATH = '/mp-web'

/**
 * 关联 代理商
 * @param param
 */
export const agentDict = param =>
  request({
    url: `${MP_PATH}/agent/dict`,
    method: 'POST',
    data: param
  })
