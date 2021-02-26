import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import moment from 'moment'
import Toast  from "./components/common/Message/index";

Vue.config.productionTip = false
Vue.prototype.$moment = moment
Vue.use(Toast)

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
