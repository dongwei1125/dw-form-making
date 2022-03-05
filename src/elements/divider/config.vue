<template>
  <common-field
    :data="data"
    :field="false"
    :option="false"
    :name="false"
    :width="false"
    :label-width="false"
    :hide-label="false"
    :required="false"
  >
    <template slot="custom">
      <el-form-item label="字段标识">
        <el-input v-model="data.model" disabled></el-input>
      </el-form-item>

      <el-form-item label="标签">
        <el-input v-model="data.name"></el-input>
      </el-form-item>

      <el-form-item label="宽度（% / px）">
        <el-input v-model="data.options.width"></el-input>
      </el-form-item>

      <el-form-item label="文本位置">
        <el-radio-group v-model="data.options.textPosition">
          <el-radio-button label="left">左侧</el-radio-button>
          <el-radio-button label="center">居中</el-radio-button>
          <el-radio-button label="right">右侧</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </template>
  </common-field>
</template>

<script>
import CommonField from '../CommonField'

export default {
  name: 'DwDividerConfig',
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
