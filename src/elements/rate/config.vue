<template>
  <common-field :data="data">
    <template slot="custom">
      <el-form-item label="最大值">
        <el-input-number v-model="data.options.max" :min="1" :step="1" />
      </el-form-item>
      <el-form-item label="默认值" class="rate-default">
        <el-rate
          v-model="data.options.defaultValue"
          :allow-half="data.options.isAllowhalf"
          :max="data.options.max"
        ></el-rate>
        <el-button
          type="text"
          v-if="data.options.defaultValue > 0"
          @click="handleClearDefault"
          >清空</el-button
        >
      </el-form-item>
    </template>
    <template slot="option">
      <el-checkbox v-model="data.options.disabled">禁用</el-checkbox>
      <el-checkbox v-model="data.options.isAllowhalf">半选</el-checkbox>
      <el-checkbox v-model="data.options.showScore">分数</el-checkbox>
    </template>
  </common-field>
</template>

<script>
import CommonField from "../CommonField";

export default {
  name: "DwRateConfig",
  components: {
    CommonField,
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    handleClearDefault() {
      this.data.options.defaultValue = 0;
    },
  },
};
</script>