<template>
  <common-field :data="data">
    <template slot="custom">
      <el-form-item label="范围选择">
        <el-switch v-model="data.options.isRange" @change="handleRangeChange"></el-switch>
      </el-form-item>

      <div v-if="data.options.isRange">
        <el-form-item label="开始占位内容">
          <el-input v-model="data.options.startPlaceholder"></el-input>
        </el-form-item>

        <el-form-item label="范围分隔符">
          <el-input v-model="data.options.rangeSeparator"></el-input>
        </el-form-item>

        <el-form-item label="结束占位内容">
          <el-input v-model="data.options.endPlaceholder"></el-input>
        </el-form-item>
      </div>

      <div v-else>
        <el-form-item label="占位内容">
          <el-input v-model="data.options.placeholder"></el-input>
        </el-form-item>
      </div>

      <el-form-item label="格式">
        <el-input v-model="data.options.format" placeholder="HH:mm:ss"></el-input>
      </el-form-item>

      <el-form-item label="默认值">
        <!-- element-ui time-picker bug -->
        <el-time-picker
          v-if="data.options.isRange"
          key="range"
          v-model="data.options.defaultValue"
          style="width: 100%"
          is-range
          arrow-control
          :value-format="data.options.format"
        ></el-time-picker>

        <el-time-picker
          v-else
          key="default"
          v-model="data.options.defaultValue"
          style="width: 100%"
          arrow-control
          :value-format="data.options.format"
        ></el-time-picker>
      </el-form-item>
    </template>

    <template slot="option">
      <el-checkbox v-model="data.options.disabled" :disabled="data.options.readonly">禁用</el-checkbox>
      <el-checkbox v-model="data.options.readonly" :disabled="data.options.disabled">只读</el-checkbox>
      <el-checkbox v-model="data.options.editable">文本框可输入</el-checkbox>
      <el-checkbox v-model="data.options.clearable">清除按钮</el-checkbox>
      <el-checkbox v-model="data.options.isArrowControl">箭头选择方式</el-checkbox>
    </template>
  </common-field>
</template>

<script>
import CommonField from '../CommonField'

export default {
  name: 'DwTimeConfig',
  components: {
    CommonField,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleRangeChange() {
      // 范围选择只能为null
      this.data.options.defaultValue = this.data.options.isRange ? null : ''
    },
  },
}
</script>
