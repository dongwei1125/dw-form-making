<template>
  <common-field :data="data">
    <template slot="custom">
      <el-form-item label="最小值">
        <el-input-number v-model="data.options.min" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item label="最大值">
        <el-input-number v-model="data.options.max" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item label="步长">
        <el-input-number
          v-model="data.options.step"
          :step="1"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="默认值">
        <el-input-number
          :max="data.options.max"
          :min="data.options.min"
          :step="data.options.step"
          v-model="data.options.defaultValue"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="操作按钮位置">
        <el-radio-group v-model="data.options.controlsPosition">
          <el-radio-button label="default">两端对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </template>
    <template slot="option">
      <el-checkbox v-model="data.options.disabled">禁用</el-checkbox>
    </template>
  </common-field>
</template>

<script>
import CommonField from "../CommonField";

export default {
  name: "DwNumberConfig",
  components: {
    CommonField,
  },
  props: {
    data: {
      type: Object,
    },
  },
};
</script>