import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import order from './modules/order'
import vendor from './modules/vendor'
import alerts from './modules/common/alerts'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    order,
    vendor,
    alerts
  }
})

export default store
