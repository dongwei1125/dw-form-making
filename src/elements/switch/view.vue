<template>
  <common-view :element="element">
    <el-switch
      :style="{ width: element.options.width }"
      :disabled="element.options.disabled"
      :active-color="element.options.isColor ? element.options.activeColor : '#409EFF'"
      :inactive-color="element.options.isColor ? element.options.inactiveColor : '#C0CCDA'"
      :active-text="element.options.isText ? element.options.activeText : ''"
      :inactive-text="element.options.isText ? element.options.inactiveText : ''"
      :value="value"
      @input="value => $emit('change', value)"
    ></el-switch>
  </common-view>
</template>

<script>
import CommonView from '../CommonView'

export default {
  name: 'DwSwitch',
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
      type: Boolean,
      default: false,
    },
  },
}
</script>
