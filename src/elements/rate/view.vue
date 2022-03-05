<template>
  <common-view :element="element">
    <el-rate
      :style="{ width: element.options.width }"
      :disabled="element.options.disabled"
      :max="element.options.max"
      :show-score="element.options.showScore"
      text-color="#ff9900"
      :allow-half="element.options.isAllowhalf"
      :value="value"
      @input="value => $emit('change', value)"
    />
  </common-view>
</template>

<script>
import CommonView from '../CommonView'

export default {
  name: 'DwRate',
  components: {
    CommonView,
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    element: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Number,
      default: 0,
    },
  },
}
</script>
