<template>
  <common-view :element="element">
    <el-radio-group
      :disabled="element.options.disabled"
      :style="{ width: element.options.width }"
      :value="value"
      @input="value => $emit('change', value)"
    >
      <el-radio
        v-for="(item, index) in element.options.options"
        :key="index"
        style="height: 32px; line-height: 32px"
        :label="item.value"
        :style="{ display: element.options.inline ? 'inline-block' : 'block' }"
        >{{ item.label }}</el-radio
      >
    </el-radio-group>
  </common-view>
</template>

<script>
import CommonView from '../CommonView'

export default {
  name: 'DwRadio',
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
