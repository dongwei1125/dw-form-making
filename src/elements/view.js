const components = {}
const requireComponent = require.context('elements/', true, /(view.vue)$/)

requireComponent.keys().forEach(fileName => {
  const componentOptions = requireComponent(fileName)
  const component = componentOptions.default || componentOptions

  components[component.name] = component
})

export default components
