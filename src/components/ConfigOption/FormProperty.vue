<template>
  <div class="form-config-container">
    <el-form label-position="top" size="small">
      <el-form-item label="标签对齐方式">
        <el-radio-group v-model="data.labelPosition">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="表单标签宽度">
        <el-input-number
          v-model="data.labelWidth"
          :min="0"
          :max="200"
          :step="10"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="组件尺寸">
        <el-radio-group v-model="data.size">
          <el-radio-button label="medium">medium</el-radio-button>
          <el-radio-button label="small">small</el-radio-button>
          <el-radio-button label="mini">mini</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="自定义Class">
        <el-input v-model="data.customClass"></el-input>
      </el-form-item>

      <el-form-item label="隐藏校验错误信息">
        <el-switch v-model="data.hideError"></el-switch>
      </el-form-item>

      <el-form-item label="隐藏必填字段星号">
        <el-switch v-model="data.hideAsterisk"></el-switch>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import store from "store/index.js";

export default {
  name: "FormProperty",
  computed: {
    data() {
      return store.state.data.config;
    },
  },
};
</script>
