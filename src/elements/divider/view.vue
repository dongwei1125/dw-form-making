<template>
  <div :class="element.options.customClass" :style="{ width: element.options.width }">
    <el-divider :content-position="element.options.textPosition">{{ element.name }}</el-divider>
  </div>
</template>

<script>
export default {
  name: 'DwDivider',
  props: {
    element: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
