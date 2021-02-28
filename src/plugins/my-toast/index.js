import ToastComponent from './MyMessage'

const MyToast = {};

MyToast.install = (Vue, options) => {
  let instance = null

  const open = ({msg,type, duration = 1500}) => {
    if (instance) {
      return
    }
    ToastComponent.vuetify = options.vuetify
    instance = new Vue(ToastComponent);
    document.getElementsByClassName('v-application--wrap')[0].appendChild(instance.$mount().$el)
    instance.message = msg
    instance.type = type
    setTimeout(() => {
      destroy()
    }, duration)
  }
  const destroy = () => {
    if (instance) {
      document.getElementsByClassName('v-application--wrap')[0].removeChild(instance.$mount().$el);
      instance = null
    }
  }
  Vue.prototype.$myToast = {open, destroy}
};
export default MyToast
