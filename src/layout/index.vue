<template>
  <el-container class="dw-form-making-container">
    <el-header class="dw-form-making-header">
      <link-header />
    </el-header>

    <el-container class="dw-form-making-body">
      <el-aside class="dw-form-making-elementcate" width="250px">
        <element-cate />
      </el-aside>

      <el-main class="dw-form-making-buttonview">
        <button-view />
      </el-main>

      <el-aside class="dw-form-making-configoption" width="300px">
        <config-option />
      </el-aside>
    </el-container>

    <el-footer class="dw-form-making-footer">
      Powered by
      <a href="https://github.com/dongwei1125/dw-form-making" target="black">dw-form-making</a>
    </el-footer>
  </el-container>
</template>

<script>
import LinkHeader from './components/LinkHeader'
import ElementCate from './components/ElementCate'
import ButtonView from './components/ButtonView'
import ConfigOption from './components/ConfigOption'

export default {
  name: 'MakingForm',
  components: {
    LinkHeader,
    ElementCate,
    ButtonView,
    ConfigOption,
  },
}
</script>
