import {vendorDict} from '@/apis/vendor'

const vendor = {
  namespaced: true,
  state: () => ({
    vendorDictList: [],//渠道列表关联数据
  }),
  mutations: {
    /**
     * 渠道 关联数据
     * @param state
     * @param list
     */
    queryVendorDictList: (state, list) => {
      state.vendorDictList = list
    },
  },
  actions: {
    queryVendorDictList({commit}, param) {
      return vendorDict(param)
        .then(value => {
          if (value.code === 200) {
            commit('queryVendorDictList', value.data)
          } else {
            console.log(value.msg)
            //错误信息
          }
          return value
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  getters: {
    vendorDictList: state => {
      return state.vendorDictList
    }
  },

}
export default vendor


