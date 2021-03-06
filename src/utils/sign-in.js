import Cookies from 'js-cookie'
// import {ACCESS_TOKEN} from './request'
import {TokenKey} from '@/settings'

export default function ({phone, name, accessToken, expiresIn}) {
  // 1、设置用户信息
  // phone && localStorage.setItem('phone', secret.Encrypt(phone))
  name && localStorage.setItem('name',name)
  let cookieParams = {
    expires: expiresIn ? new Date(new Date().getTime() + expiresIn * 1000) : 1,
  }
  // 2、设置token
  Cookies.set(TokenKey, accessToken, cookieParams)
}
