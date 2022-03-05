<template>
  <common-view :element="element">
    <el-time-picker
      :value-format="element.options.format"
      :style="{ width: element.options.width }"
      :placeholder="element.options.placeholder"
      :range-separator="element.options.rangeSeparator"
      :disabled="element.options.disabled"
      :readonly="element.options.readonly"
      :editable="element.options.editable"
      :clearable="element.options.clearable"
      :arrow-control="element.options.isArrowControl"
      :is-range="element.options.isRange"
      :start-placeholder="element.options.startPlaceholder"
      :end-placeholder="element.options.endPlaceholder"
      :value="value"
      @input="value => $emit('change', value)"
    ></el-time-picker>
  </common-view>
</template>

<script>
import CommonView from '../CommonView'

export default {
  name: 'DwTime',
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
      type: [String, Array],
      default: '',
    },
  },
}
</script>
