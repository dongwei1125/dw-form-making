<template>
  <common-field :data="data" :required="false" :option="false">
    <template slot="custom">
      <el-form-item label="默认值">
        <el-input v-model="data.options.defaultValue"></el-input>
      </el-form-item>
    </template>
  </common-field>
</template>

<script>
import CommonField from '../CommonField'

export default {
  name: 'DwTextConfig',
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
