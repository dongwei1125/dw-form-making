<template>
  <common-field :data="data">
    <template slot="custom">
      <el-form-item label="默认值">
        <el-input v-model="data.options.defaultValue"></el-input>
      </el-form-item>

      <el-form-item label="占位内容">
        <el-input v-model="data.options.placeholder"></el-input>
      </el-form-item>
    </template>

    <template slot="option">
      <el-checkbox v-model="data.options.disabled" :disabled="data.options.readonly">禁用</el-checkbox>
      <el-checkbox v-model="data.options.readonly" :disabled="data.options.disabled">只读</el-checkbox>
      <el-checkbox v-model="data.options.showPassword">密码</el-checkbox>
    </template>

    <template slot="check">
      <el-checkbox v-model="data.options.isType">
        <el-select v-model="data.options.type" :disabled="!data.options.isType" placeholder="验证器类型">
          <el-option
            v-for="item in type"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-checkbox>

      <el-input
        v-if="data.options.isType"
        v-model="data.options.typeMessage"
        style="margin-left: 24px; width: 250px"
        size="mini"
        placeholder="自定义错误提示"
      ></el-input>

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
  name: 'DwInputConfig',
  components: {
    CommonField,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      type: [
        {
          label: '字符串',
          value: 'string',
        },
        {
          label: '数字',
          value: 'number',
        },
        {
          label: '整数',
          value: 'integer',
        },
        {
          label: '浮点数',
          value: 'float',
        },
        {
          label: 'URL',
          value: 'url',
        },
        {
          label: '邮箱',
          value: 'email',
        },
        {
          label: '十六进制',
          value: 'hex',
        },
      ],
    }
  },
}
</script>
