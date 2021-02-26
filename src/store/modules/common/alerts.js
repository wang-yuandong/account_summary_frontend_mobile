/**
 * @param msg 信息
 * @param  type 提示类型 （success,error,warn）
 * @param visible 是否可见
 * @param timeout 停留持续时间
 */
const alerts = {
  namespaced: true,
  state: () => ({
    msg: '',
    type: '',
    visible: false,
    timeout: 5000,
  }),
  // 逻辑处理,同步函数
  mutations: {
    OPEN_ALERTS(state, options){
      state.visible = true
      state.msg = options.msg
      state.type = options.type
    },
    CLOSE_ALERTS(state, options){
      state.visible = false
    },

  },
  // 逻辑处理,异步函数
  actions: {
    openAlerts(context,options){
      let timeout = context.state.timeout
      context.commit('OPEN_ALERTS',{
        msg:options.msg,
        type:options.type
      })
      setTimeout(()=>{
        context.commit('CLOSE_ALERTS')
      },timeout)
    }
  },

  getters: {}
}
export default alerts
