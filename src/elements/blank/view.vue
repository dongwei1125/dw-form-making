<template>
  <common-view :element="element">
    <div :style="{ width: element.options.width }">
      <slot :name="element.model" :model="models">
        <div class="custom-area">{{ element.model }}</div>
      </slot>
    </div>
  </common-view>
</template>

<script>
import CommonView from '../CommonView'

export default {
  name: 'DwBlank',
  components: {
    CommonView,
  },
  props: {
    element: {
      type: Object,
      default: () => ({}),
    },
    models: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
