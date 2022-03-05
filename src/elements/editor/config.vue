<template>
  <common-field :data="data">
    <template slot="option">
      <el-checkbox v-model="data.options.disabled">禁用</el-checkbox>
    </template>
  </common-field>
</template>

<script>
import CommonField from '../CommonField'

export default {
  name: 'DwEditorConfig',
  components: {
    CommonField,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
