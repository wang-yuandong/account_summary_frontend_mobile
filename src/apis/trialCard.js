import request from '@/utils/request'
export const MP_PATH = '/mp-web'

/**
 * 关联 体验卡项
 * @param param
 */
export const trialCardDict = param =>
  request({
    url: `${MP_PATH}/trial-card/dict`,
    method: 'POST',
    data: param
  })
