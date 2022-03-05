<template>
  <el-dialog
    v-if="show"
    :visible.sync="dialogFormVisible"
    :width="width"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    center
    append-to-body
    :show-close="false"
    class="public-dialog"
    :fullscreen="full"
  >
    <template slot="title">
      <span class="public-dialog-header-title">{{ title }}</span>

      <el-button v-if="fullscreen" class="public-dialog-header-fullscreen" type="text" @click="handleFull">
        <i class="el-icon-full-screen"></i>
      </el-button>

      <el-button class="public-dialog-header-close" type="text" @click="close">
        <i class="el-icon-close"></i>
      </el-button>
    </template>

    <slot name="body" />

    <template slot="footer">
      <slot name="action" />
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'PublicDialog',
  props: {
    show: Boolean,
    fullscreen: {
      type: Boolean,
      default: false,
    },
    title: {
      type: [String, Number],
      default: '',
    },
    width: {
      type: String,
      default: '50%',
    },
  },
  data() {
    return {
      dialogFormVisible: true,
      full: false,
    }
  },
  methods: {
    handleFull() {
      this.full = !this.full
    },

    close() {
      this.$emit('update:show', false)
      this.full = false
    },
  },
}
</script>
