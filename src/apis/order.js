import request from '@/utils/request'
// import {MP_PATH} from '../server-path'
export const MP_PATH = '/mp-web'

/**
 * 订单列表
 */
export const orderList = param =>
  request({
    url: `${MP_PATH}/order/list`,
    method: 'POST',
    data: param,
  })
/**
 * 订单添加
 * @param param
 */
export const orderCreate = param =>
  request({
    url: `${MP_PATH}/order/create`,
    method: 'POST',
    data: param,
  })
