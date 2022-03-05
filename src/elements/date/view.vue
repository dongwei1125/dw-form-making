<template>
  <common-view :element="element">
    <el-date-picker
      :value-format="element.options.format"
      :type="element.options.showType"
      :style="{ width: element.options.width }"
      :placeholder="element.options.placeholder"
      :disabled="element.options.disabled"
      :readonly="element.options.readonly"
      :editable="element.options.editable"
      :clearable="element.options.clearable"
      :is-range="element.options.isRange"
      :start-placeholder="element.options.startPlaceholder"
      :end-placeholder="element.options.endPlaceholder"
      :range-separator="element.options.rangeSeparator"
      :value="value"
      @input="value => $emit('change', value)"
    ></el-date-picker>
  </common-view>
</template>

<script>
import CommonView from '../CommonView'

export default {
  name: 'DwDate',
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
      type: [Array, String],
      default: '',
    },
  },
}
</script>
