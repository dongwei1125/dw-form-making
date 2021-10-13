<template>
  <common-field :data="data">
    <template slot="custom">
      <el-form-item label="默认值">
        <!-- 切换透明度 hex/rgba 无切换 -->
        <el-color-picker
          key="alpha"
          v-model="data.options.defaultValue"
          v-if="data.options.showAlpha"
          show-alpha
        ></el-color-picker>
        <el-color-picker
          key="default"
          v-model="data.options.defaultValue"
          v-else
        ></el-color-picker>
      </el-form-item>
    </template>
    <template slot="option">
      <el-checkbox v-model="data.options.disabled">禁用</el-checkbox>
      <el-checkbox v-model="data.options.showAlpha" @change="handleAlphaChange"
        >透明度</el-checkbox
      >
    </template>
  </common-field>
</template>

<script>
import CommonField from "../CommonField";

export default {
  name: "DwColorConfig",
  components: {
    CommonField,
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    handleAlphaChange() {
      this.data.options.defaultValue = null;
    },
  },
};
</script>