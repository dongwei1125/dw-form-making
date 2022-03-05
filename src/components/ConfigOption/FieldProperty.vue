<template>
  <component :is="component.component && `${component.component}Config`" :data="component" />
</template>

<script>
import components from 'elements/config'

import store from 'store/index.js'

export default {
  name: 'FieldProperty',
  components,
  computed: {
    component() {
      return store.state.select
    },
  },
}
</script>
