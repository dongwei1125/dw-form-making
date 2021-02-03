<template>
  <common-view :element="element">
    <div :style="{ width: element.options.width }">
      <span>{{ value }}</span>
    </div>
  </common-view>
</template>

<script>
import CommonView from "../CommonView";

export default {
  name: "DwText",
  components: {
    CommonView,
  },
  model: {
    prop: "value",
  },
  props: {
    element: {
      type: Object,
    },
    value: {},
  },
};
</script>