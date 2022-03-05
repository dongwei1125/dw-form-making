<template>
  <div>
    <el-form size="small" label-position="top">
      <el-form-item v-if="field" label="字段标识">
        <el-input v-model="data.model"></el-input>
      </el-form-item>

      <el-form-item v-if="name" label="标签">
        <el-input v-model="data.name"></el-input>
      </el-form-item>

      <el-form-item v-if="width" label="宽度（% / px）">
        <el-input v-model="data.options.width"></el-input>
      </el-form-item>

      <el-form-item v-if="labelWidth" label="标签宽度（px）">
        <el-checkbox v-model="data.options.isLabelWidth" style="margin-right: 5px">自定义</el-checkbox>
        <el-input-number
          v-model="data.options.labelWidth"
          :disabled="!data.options.isLabelWidth"
          :min="1"
          :step="10"
        ></el-input-number>
      </el-form-item>

      <el-form-item v-if="hideLabel" label="隐藏标签">
        <el-switch v-model="data.options.hideLabel"></el-switch>
      </el-form-item>

      <slot name="custom" />

      <el-form-item v-if="customClass" label="自定义Class">
        <el-input v-model="data.options.customClass"></el-input>
      </el-form-item>

      <el-form-item v-if="option" label="操作属性">
        <slot name="option" />
      </el-form-item>

      <el-form-item v-if="required" label="校验规则">
        <el-checkbox v-model="data.options.required">必填</el-checkbox>

        <el-input
          v-if="data.options.required"
          v-model="data.options.requiredMessage"
          style="margin-left: 24px; width: 250px"
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
  name: 'CommonField',
  props: {
    data: {
      type: Object,
      default: () => ({}),
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
}
</script>
