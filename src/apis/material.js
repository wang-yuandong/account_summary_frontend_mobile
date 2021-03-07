import request from '@/utils/request'
export const MP_PATH = '/mp-web'

/**
 *新增消耗
 * @param param
 * POST /material/consume/create
 */
export const consumeCreate = param =>
  request({
    url: `${MP_PATH}/material/consume/create`,
    method: 'POST',
    data: param
  })
/**
 * 消耗物品
 * @param param
 */
export const materialDict = param =>
  request({
    url: `${MP_PATH}/material/dict`,
    method: 'POST',
    data: param
  })
