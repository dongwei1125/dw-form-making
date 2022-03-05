<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from './layout/index'

import { consoleFont } from 'assets/js'

export default {
  name: 'App',
  components: {
    Layout,
  },
  mounted() {
    console.log(`%c${consoleFont}`, 'color: #409eff')
  },
}
</script>
