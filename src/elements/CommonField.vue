<template>
  <div>
    <el-form size="small" label-position="top">
      <el-form-item label="字段标识" v-if="field">
        <el-input v-model="data.model"></el-input>
      </el-form-item>
      <el-form-item label="标签" v-if="name">
        <el-input v-model="data.name"></el-input>
      </el-form-item>
      <el-form-item label="宽度" v-if="width">
        <el-input v-model="data.options.width"></el-input>
      </el-form-item>
      <el-form-item label="标签宽度" v-if="labelWidth">
        <el-checkbox
          v-model="data.options.isLabelWidth"
          style="margin-right: 5px"
          >自定义</el-checkbox
        >
        <el-input-number
          v-model="data.options.labelWidth"
          :disabled="!data.options.isLabelWidth"
          :min="1"
          :step="10"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="隐藏标签" v-if="hideLabel">
        <el-switch v-model="data.options.hideLabel"></el-switch>
      </el-form-item>
      <slot name="custom" />
      <el-form-item label="自定义Class" v-if="customClass">
        <el-input v-model="data.options.customClass"></el-input>
      </el-form-item>
      <el-form-item label="操作属性" v-if="option">
        <slot name="option" />
      </el-form-item>
      <el-form-item label="校验规则" v-if="required">
        <el-checkbox v-model="data.options.required">必填</el-checkbox>
        <el-input
          style="margin-left: 24px; width: 250px"
          v-if="data.options.required"
          v-model="data.options.requiredMessage"
          size="mini"
          placeholder="自定义错误提示"
        ></el-input>
        <slot name="check" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CommonField",
  props: {
    data: {
      type: Object,
    },
    field: {
      type: Boolean,
      default: true,
    },
    name: {
      type: Boolean,
      default: true,
    },
    labelWidth: {
      type: Boolean,
      default: true,
    },
    width: {
      type: Boolean,
      default: true,
    },
    hideLabel: {
      type: Boolean,
      default: true,
    },
    customClass: {
      type: Boolean,
      default: true,
    },
    required: {
      type: Boolean,
      default: true,
    },
    option: {
      type: Boolean,
      default: true,
    },
  },
};
</script>