<template>
  <common-view :element="element">
    <div :style="{ width: element.options.width }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="value" />
    </div>
  </common-view>
</template>

<script>
import CommonView from '../CommonView'

export default {
  name: 'DwHtml',
  components: {
    CommonView,
  },
  model: {
    prop: 'value',
  },
  props: {
    element: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>
