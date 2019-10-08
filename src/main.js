import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
import './styles/index.less'
import '../font_1256617_4kyjqn22kln/iconfont.css'
import './assets/iconfont.css'
import Vant, { Lazyload } from 'vant'
import VeeValidate, { Validator } from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'
import qs from 'qs'

Vue.use(VeeValidate, {
  // events: 'change'
})
Validator.localize('zh_CN', zhCN)
Vue.use(Lazyload)
Vue.use(Vant)
Vue.use(qs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
