<template>
  <common-field :data="data" :option="false" :required="false" />
</template>

<script>
import CommonField from '../CommonField'

export default {
  name: 'DwBlankConfig',
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
