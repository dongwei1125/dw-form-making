<template>
  <common-field :data="data">
    <template slot="custom">
      <el-form-item label="默认值">
        <div style="padding: 0 8px">
          <el-slider
            v-model="data.options.defaultValue"
            :max="data.options.max"
            :min="data.options.min"
            :step="data.options.step"
          ></el-slider>
        </div>
      </el-form-item>

      <el-form-item label="最小值">
        <el-input-number v-model="data.options.min" :step="1"></el-input-number>
      </el-form-item>

      <el-form-item label="最大值">
        <el-input-number v-model="data.options.max" :step="1"></el-input-number>
      </el-form-item>

      <el-form-item label="步长">
        <el-input-number v-model="data.options.step" :step="1"></el-input-number>
      </el-form-item>
    </template>

    <template slot="option">
      <el-checkbox v-model="data.options.disabled">禁用</el-checkbox>
    </template>
  </common-field>
</template>

<script>
import CommonField from '../CommonField'

export default {
  name: 'DwSliderConfig',
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
