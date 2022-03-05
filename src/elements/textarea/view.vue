<template>
  <common-view :element="element">
    <el-input
      type="textarea"
      :rows="5"
      :style="{ width: element.options.width }"
      :disabled="element.options.disabled"
      :readonly="element.options.readonly"
      :placeholder="element.options.placeholder"
      :value="value"
      @input="value => $emit('change', value)"
    ></el-input>
  </common-view>
</template>

<script>
import CommonView from '../CommonView'

export default {
  name: 'DwTextarea',
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
