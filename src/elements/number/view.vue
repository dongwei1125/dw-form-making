<template>
  <common-view :element="element">
    <el-input-number
      :max="element.options.max"
      :min="element.options.min"
      :step="element.options.step"
      :disabled="element.options.disabled"
      :controls-position="element.options.controlsPosition"
      :style="{ width: element.options.width }"
      :value="value"
      @input="(value) => $emit('change', value)"
    ></el-input-number>
  </common-view>
</template>

<script>
import CommonView from "../CommonView";

export default {
  name: "DwNumber",
  components: {
    CommonView,
  },
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    element: {
      type: Object,
    },
    value: {},
  },
};
</script>