<template>
  <common-field :data="data">
    <template slot="custom">
      <el-form-item label="默认值">
        <el-input v-model="data.options.defaultValue" type="textarea" :rows="5"></el-input>
      </el-form-item>

      <el-form-item label="占位内容">
        <el-input v-model="data.options.placeholder"></el-input>
      </el-form-item>
    </template>

    <template slot="option">
      <el-checkbox v-model="data.options.disabled" :disabled="data.options.readonly">禁用</el-checkbox>
      <el-checkbox v-model="data.options.readonly" :disabled="data.options.disabled">只读</el-checkbox>
    </template>

    <template slot="check">
      <el-checkbox v-model="data.options.isPattern">
        <el-input
          v-model="data.options.pattern"
          style="width: 250px"
          :disabled="!data.options.isPattern"
          size="mini"
          placeholder="正则表达式"
        ></el-input>
      </el-checkbox>

      <el-input
        v-if="data.options.isPattern"
        v-model="data.options.patternMessage"
        style="margin-left: 24px; width: 250px"
        size="mini"
        placeholder="自定义错误提示"
      ></el-input>
    </template>
  </common-field>
</template>

<script>
import CommonField from '../CommonField'

export default {
  name: 'DwTextareaConfig',
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
