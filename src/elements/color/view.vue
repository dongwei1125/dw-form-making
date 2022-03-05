<template>
  <common-view :element="element">
    <el-color-picker
      :style="{ width: element.options.width }"
      :disabled="element.options.disabled"
      :show-alpha="element.options.showAlpha"
      :value="value"
      @input="value => $emit('change', value)"
    ></el-color-picker>
  </common-view>
</template>

<script>
import CommonView from '../CommonView'

export default {
  name: 'DwColor',
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
      type: String,
      default: '',
    },
  },
}
</script>
