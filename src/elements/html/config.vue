<template>
  <common-field :data="data" :option="false" :required="false">
    <template slot="custom">
      <el-form-item label="默认值">
        <ace-editor id="htmlAceEditor" ref="htmlAceEditor" type="html" :height="200" @change="handelChange" />
      </el-form-item>
    </template>
  </common-field>
</template>

<script>
import AceEditor from 'components/AceEditor'
import CommonField from '../CommonField'

export default {
  name: 'DwHtmlConfig',
  components: {
    AceEditor,
    CommonField,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    data: {
      handler() {
        this.$nextTick(() => {
          this.$refs.htmlAceEditor.setValue(this.data.options.defaultValue)
        })
      },
      deep: false, // 监听对象引用改变 不监听对象内容改变
      immediate: true,
    },
  },
  methods: {
    handelChange(text) {
      this.data.options.defaultValue = text
    },
  },
}
</script>
