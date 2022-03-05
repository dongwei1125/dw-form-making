<template>
  <common-field :data="data">
    <template slot="custom">
      <el-form-item label="默认值">
        <el-switch v-model="data.options.defaultValue"></el-switch>
      </el-form-item>

      <el-form-item label="文字描述">
        <el-switch v-model="data.options.isText"></el-switch>
      </el-form-item>

      <div v-if="data.options.isText">
        <el-form-item label="开启时的文字描述">
          <el-input v-model="data.options.activeText"></el-input>
        </el-form-item>

        <el-form-item label="关闭时的文字描述">
          <el-input v-model="data.options.inactiveText"></el-input>
        </el-form-item>
      </div>

      <el-form-item label="自定义颜色">
        <el-switch v-model="data.options.isColor"></el-switch>
      </el-form-item>

      <div v-if="data.options.isColor">
        <el-form-item label="开启时的背景色">
          <el-color-picker v-model="data.options.activeColor" show-alpha></el-color-picker>
        </el-form-item>

        <el-form-item label="关闭时的背景色">
          <el-color-picker v-model="data.options.inactiveColor" show-alpha></el-color-picker>
        </el-form-item>
      </div>
    </template>

    <template slot="option">
      <el-checkbox v-model="data.options.disabled">禁用</el-checkbox>
    </template>
  </common-field>
</template>

<script>
import CommonField from '../CommonField'

export default {
  name: 'DwSwitchConfig',
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
