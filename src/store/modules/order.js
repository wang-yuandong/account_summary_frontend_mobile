import {orderList} from '@/apis/order'

// const order = {
//   state: () => ({
//     orderList: [],//订单列表
//     addOrderResult: null,//添加订单
//   }),
//   mutations: {
//     /**
//      * 查询订单列表
//      * @param state
//      * @param list
//      */
//     queryOrderList: (state, list) => {
//       state.orderList = list
//     },
//   },
//   actions: {
//     queryOrderList({commit}, param) {
//       orderList(param)
//         .then(value => {
//           if (value.code === 200) {
//             console.log('valuevalue',value)
//             commit('queryOrderList',[1,2,3])
//           } else {
//             console.log(value.msg)
//           }
//         })
//         .catch(err => {
//           console.log(err)
//         })
//     },
//   },
//   getters: {}
// }
// export default order


const state= () => ({
  orderListData: {},//订单列表查询结果
  addOrderResult: null,//添加订单
})
 const  mutations= {
  /**
   * 查询订单列表
   * @param state
   * @param list
   */
  queryOrderList: (state, data) => {
    state.orderListData = data
  },
}
const actions= {
  queryOrderList({commit}, param) {
   return orderList(param)
      .then(value => {
        if (value.code === 200) {
          console.log('valuevalue',value.data)
          commit('queryOrderList',value.data)

        } else {
          console.log(value.msg)
        }
        return value
      })
      .catch(err => {
        console.log(err)
      })
  },
}
const getters= {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
