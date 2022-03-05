<template>
  <common-view :element="element">
    <el-checkbox-group
      :disabled="element.options.disabled"
      :style="{ width: element.options.width }"
      :value="value"
      @input="value => $emit('change', value)"
    >
      <el-checkbox
        v-for="(item, index) in element.options.options"
        :key="index"
        style="height: 32px; line-height: 32px"
        :label="item.value"
        :style="{ display: element.options.inline ? 'inline-block' : 'block' }"
        >{{ item.label }}</el-checkbox
      >
    </el-checkbox-group>
  </common-view>
</template>

<script>
import CommonView from '../CommonView'

export default {
  name: 'DwCheckbox',
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
      type: Array,
      default: () => [],
    },
  },
}
</script>
