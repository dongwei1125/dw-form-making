import GenerateForm from 'components/ButtonView/GenerateForm'
import MakingForm from './layout/index'

import 'normalize.css/normalize.css'
import './styles/index.scss'

const outComponent = [GenerateForm, MakingForm]
const install = Vue => {
  outComponent.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// Vue.component()部分导入
export { GenerateForm, MakingForm }

// Vue.use() default.install() 全部导入
export default {
  install,
}
