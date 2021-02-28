import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import myToast from './plugins/my-toast'
import moment from 'moment'

Vue.config.productionTip = false
Vue.prototype.$moment = moment
Vue.use(myToast, {vuetify, App})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
