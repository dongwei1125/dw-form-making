<template>
  <el-form-item
    :label-width="
      element.options.hideLabel
        ? '0px'
        : (element.options.isLabelWidth ? element.options.labelWidth : config.labelWidth) + 'px'
    "
    :prop="element.model"
    :class="element.options.customClass"
    :required="element.options.required"
  >
    <template v-if="!element.options.hideLabel" slot="label">{{ element.name }}</template>

    <slot></slot>
  </el-form-item>
</template>

<script>
import store from 'store/index'

export default {
  name: 'CommonView',
  props: {
    element: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    config() {
      return store.state.data.config
    },
  },
}
</script>
