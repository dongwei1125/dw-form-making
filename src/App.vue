<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from "./layout/index";

import { consoleFont } from "assets/js";

export default {
  name: "App",
  components: {
    Layout,
  },
  mounted() {
    console.log(`%c${consoleFont}`, "color: #409eff");
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
  height: 100%;
}
</style>