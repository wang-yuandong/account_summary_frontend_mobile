module.exports = {
  /**
   * @description 网站标题
   */
  title: '',

  /**
   * @description 记住密码状态下的token在Cookie中存储的天数，默认1天
   */
  tokenCookieExpires: 1,
  /**
   * @description 记住密码状态下的密码在Cookie中存储的天数，默认1天s
   */
  passCookieExpires: 1,
  /**
   * @description token key
   */
  TokenKey: 'access_token',
  /**
   * @description 请求超时时间，毫秒（默认2分钟）
   */
  timeout: 1200000,

  MP_PATH : '/mp-web',
}
