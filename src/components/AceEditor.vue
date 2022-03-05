<template>
  <div :id="id" class="ace-code-editor" :style="{ height: height + 'px', width: '100%' }">
    {{ data }}
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: [String, Object],
      default: '',
    },
    height: {
      type: [String, Number],
      default: 400,
    },
    type: {
      type: String,
      default: 'json',
    },
    id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      editor: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.editor = ace.edit(this.id)
      this.editor.session.setMode(`ace/mode/${this.type}`)
      this.editor.session.on('change', () => {
        this.$emit('change', this.getValue())
      })
    })
  },
  beforeDestroy() {
    this.destoryEditor()
  },
  methods: {
    getValue() {
      return this.editor.getValue()
    },

    setValue(value) {
      this.$nextTick(() => {
        this.editor.session.setValue(value)
      })
    },

    destoryEditor() {
      this.editor.destroy()
      this.editor.container.remove()
      this.editor = null
    },
  },
}
</script>
