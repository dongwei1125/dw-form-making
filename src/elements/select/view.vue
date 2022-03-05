<template>
  <common-view :element="element">
    <el-select
      v-if="element.options.multiple"
      key="multiple"
      :style="{ width: element.options.width }"
      :disabled="element.options.disabled"
      multiple
      :filterable="element.options.filterable"
      :clearable="element.options.clearable"
      :placeholder="element.options.placeholder"
      :value="value"
      @input="value => $emit('change', value)"
    >
      <el-option
        v-for="item in element.options.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>

    <el-select
      v-else
      key="default"
      :style="{ width: element.options.width }"
      :disabled="element.options.disabled"
      :multiple="false"
      :filterable="element.options.filterable"
      :clearable="element.options.clearable"
      :placeholder="element.options.placeholder"
      :value="value"
      @input="value => $emit('change', value)"
    >
      <el-option
        v-for="item in element.options.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
  </common-view>
</template>

<script>
import CommonView from '../CommonView'

export default {
  name: 'DwSelect',
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
      type: [String, Array],
      default: '',
    },
  },
}
</script>
