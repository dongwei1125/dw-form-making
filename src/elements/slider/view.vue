<template>
  <common-view :element="element">
    <el-slider
      :max="element.options.max"
      :min="element.options.min"
      :step="element.options.step"
      :style="{ width: element.options.width }"
      :disabled="element.options.disabled"
      :value="value"
      @input="(value) => $emit('change', value)"
    ></el-slider>
  </common-view>
</template>

<script>
import CommonView from "../CommonView";

export default {
  name: "DwSlider",
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