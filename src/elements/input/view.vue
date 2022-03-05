<template>
  <common-view :element="element">
    <el-input
      v-if="element.options.isType && ['number', 'integer', 'float'].includes(element.options.type)"
      type="number"
      :style="{ width: element.options.width }"
      :placeholder="element.options.placeholder"
      :disabled="element.options.disabled"
      :readonly="element.options.readonly"
      :show-password="element.options.showPassword"
      :value="value"
      @input="input"
    ></el-input>

    <el-input
      v-else
      :style="{ width: element.options.width }"
      :placeholder="element.options.placeholder"
      :disabled="element.options.disabled"
      :readonly="element.options.readonly"
      :show-password="element.options.showPassword"
      :value="value"
      @input="input"
    ></el-input>
  </common-view>
</template>

<script>
import CommonView from '../CommonView'

export default {
  name: 'DwInput',
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
      type: [String, Number],
      default: '',
    },
  },
  methods: {
    input(value) {
      const { type, isType } = this.element.options

      if (isType && ['number', 'integer', 'float'].includes(type) && value !== '') {
        value = Number(value)
      }

      this.$emit('change', value)
    },
  },
}
</script>
