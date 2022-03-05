import Vue from 'vue'
import App from './App.vue'

// 基础样式重置
import 'normalize.css/normalize.css'
import './styles/index.scss'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
