import request from '@/utils/request'
// import {MP_PATH} from '../server-path'
import {MP_PATH} from '@/settings'
// export const MP_PATH = '/mp-web'

/**
 * 用户的登录
 */
export const userLogin = param =>
  request({
    url: `${MP_PATH}/user/login`,
    method: 'POST',
    data: param,
    needToken: false
  })

