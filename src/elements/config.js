const components = {}

const requireComponent = require.context("elements/", true, /(config.vue)$/);

requireComponent.keys().forEach(fileName => {
    const componentOptions = requireComponent(fileName);

    const component = componentOptions.default || componentOptions;

    components[component.name] = component
});

export default components