<template>
  <common-view :element="element">
    <el-cascader
      :style="{ width: element.options.width }"
      :disabled="element.options.disabled"
      :props="{
        emitPath: element.options.emitPath,
        multiple: element.options.multiple,
        expandTrigger: element.options.expandTrigger,
        checkStrictly: element.options.checkStrictly,
        value: element.options.props.value,
        label: element.options.props.label,
        children: element.options.props.children,
      }"
      :separator="element.options.separator"
      :options="remoteOption && remoteOption[element.options.remoteOption]"
      :clearable="element.options.clearable"
      :collapse-tags="element.options.collapseTags"
      :filterable="element.options.filterable"
      :show-all-levels="element.options.showAllLevels"
      :placeholder="element.options.placeholder"
      :value="value"
      @input="(value) => $emit('change', value)"
    ></el-cascader>
  </common-view>
</template>

<script>
import CommonView from "../CommonView";

export default {
  name: "DwCascader",
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
    remoteOption: {
      type: Object,
    },
  },
};
</script>