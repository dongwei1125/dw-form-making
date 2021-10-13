<template>
  <el-container>
    <el-header>
      <el-button
        v-for="(item, index) in buttons"
        :key="index"
        :type="item.type"
        :size="item.size"
        :icon="item.icon"
        @click="item.method"
        >{{ item.label }}</el-button
      >
    </el-header>

    <el-main>
      <view-form />
    </el-main>

    <!-- 导入JSON -->
    <public-dialog title="导入JSON" :show.sync="showUpload" width="70%">
      <template slot="body">
        <ace-editor
          id="uploadAceEditor"
          ref="uploadAceEditor"
          :data="uploadJson"
        />
      </template>
      <template slot="action">
        <el-button size="small" type="primary" @click="handleUploadJson"
          >确定</el-button
        >
        <el-button size="small" v-if="showPasteBtn" @click="handlePaste"
          >粘贴</el-button
        >
        <el-button size="small" v-else @click="showUpload = false"
          >取消</el-button
        >
      </template>
    </public-dialog>

    <!-- 预览 -->
    <public-dialog
      title="预览"
      class="preview-dialog"
      fullscreen
      :show.sync="showPreview"
      width="70%"
    >
      <template slot="body">
        <generate-form
          :data="data"
          :value="editData"
          ref="generateForm"
          :remoteOption="remoteOption"
          @editor-upload-image="editorUploadImage"
        />
      </template>
      <template slot="action">
        <el-button size="small" type="primary" @click="handleGetData"
          >获取数据</el-button
        >
        <el-button size="small" @click="handleReset">重置</el-button>
      </template>
    </public-dialog>

    <!-- 获取数据 -->
    <public-dialog title="表单数据" :show.sync="showPreviewData" width="70%">
      <template slot="body">
        <ace-editor id="dataAceEditor" ref="dataAceEditor" :data="models" />
      </template>
      <template slot="action">
        <el-button
          size="small"
          class="copyData"
          type="primary"
          @click="handleCopyData"
          >复制</el-button
        >
      </template>
    </public-dialog>

    <!-- 生成JSON -->
    <public-dialog title="生成JSON" :show.sync="showJson" width="70%">
      <template slot="body">
        <ace-editor id="jsonAceEditor" ref="jsonAceEditor" :data="JsonData" />
      </template>
      <template slot="action">
        <el-button
          size="small"
          type="primary"
          class="copyJson"
          @click="handleCopyJson"
          >复制</el-button
        >
      </template>
    </public-dialog>

    <!-- 生成代码 -->
    <public-dialog title="生成代码" :show.sync="showCode" width="70%">
      <template slot="body">
        <el-tabs type="border-card" v-model="active">
          <el-tab-pane label="Vue Component" name="Vue Component">
            <ace-editor
              id="componentAceEditor"
              ref="componentAceEditor"
              :data="componentData"
              :height="330"
              type="html"
            />
          </el-tab-pane>
        </el-tabs>
      </template>
      <template slot="action">
        <el-button
          size="small"
          type="primary"
          class="copyCode"
          @click="handleCopyCode(active)"
          >复制</el-button
        >
      </template>
    </public-dialog>
  </el-container>
</template>

<script>
import GenerateForm from "components/ButtonView/GenerateForm";
import PublicDialog from "components/PublicDialog";
import ViewForm from "components/ButtonView/ViewForm";
import AceEditor from "components/AceEditor";

import { copyText, deepClone, getDefaultJson } from "utils/index";
import { formatJson } from "utils/format";
import { cascaderOption } from "assets/js/index.js";
import vueComponent from "utils/vue-component";
import store from "store/index.js";

export default {
  name: "ButtonView",
  components: { ViewForm, PublicDialog, GenerateForm, AceEditor },
  data() {
    return {
      buttons: [
        {
          type: "text",
          size: "medium",
          icon: "el-icon-upload2",
          label: "导入JSON",
          method: this.handleUpload,
        },
        {
          type: "text",
          size: "medium",
          icon: "el-icon-delete",
          label: "清空",
          method: this.handleClear,
        },
        {
          type: "text",
          size: "medium",
          icon: "el-icon-view",
          label: "预览",
          method: this.handlePreview,
        },
        {
          type: "text",
          size: "medium",
          icon: "el-icon-tickets",
          label: "生成JSON",
          method: this.handleCreateJson,
        },
        {
          type: "text",
          size: "medium",
          icon: "el-icon-document",
          label: "生成代码",
          method: this.handleCreateCode,
        },
      ],
      showPreview: false,
      showPreviewData: false,
      showJson: false,
      showUpload: false,
      showCode: false,
      showPasteBtn: !!navigator.clipboard,
      editData: {},
      models: {},
      JsonData: {},
      uploadJson: {},
      CodeData: {},
      componentData: "",
      active: "Vue Component",
      remoteOption: {},
    };
  },
  computed: {
    data() {
      return store.state.data;
    },
  },
  methods: {
    editorUploadImage({ model, blobInfo, success, failure }) {
      success("data:image/jpeg;base64," + blobInfo.base64());
    },

    handleUpload() {
      this.uploadJson = getDefaultJson();
      this.showUpload = true;
    },

    handleUploadJson() {
      formatJson(this.$refs.uploadAceEditor.getValue())
        .then((json) => {
          store.commit("SET_DATA", json);
          this.showUpload = false;
        })
        .catch((err) => {
          this.$message({
            message: "数据格式有误",
            type: "error",
            center: true,
          });
          console.error(err);
        });
    },

    handlePaste() {
      // 浏览器安全策略 非本地/http 不支持获取clipboard
      navigator.clipboard.readText().then((res) => {
        this.$refs.uploadAceEditor.setValue(res);
      });
    },

    handleClear() {
      store.commit("CLEAR_DATA_LIST");
    },

    handlePreview() {
      this.showPreview = true;
      // 级联数据
      const remoteOption = {};
      getOption(this.data.list);
      function getOption(list) {
        list.forEach((element) => {
          if (element.type === "cascader") {
            remoteOption[element.options.remoteOption] = deepClone(
              cascaderOption
            );
          }
          if (element.type === "grid") {
            element.columns.forEach((e) => {
              if (e.list.length) {
                getOption(e.list);
              }
            });
          }
        });
      }
      this.remoteOption = remoteOption;
    },

    handleGetData() {
      this.$refs.generateForm
        .getData()
        .then((res) => {
          this.models = res;
          this.showPreviewData = true;
        })
        .catch((err) => {
          this.$message({
            message: "表单数据校验失败",
            type: "error",
            center: true,
          });
        });
    },

    handleReset() {
      this.$refs.generateForm.reset();
    },

    handleCopyData() {
      this.handleCopyText("dataAceEditor", ".copyData");
    },

    handleCreateJson() {
      this.JsonData = deepClone(store.state.data);
      this.showJson = true;
    },

    handleCopyJson() {
      this.handleCopyText("jsonAceEditor", ".copyJson");
    },

    handleCreateCode() {
      this.componentData = vueComponent(this.data);
      this.showCode = true;
    },

    handleCopyCode(active) {
      if (active === "Vue Component") {
        this.handleCopyText("componentAceEditor", ".copyCode");
      }
    },

    handleCopyText(ref, className) {
      copyText(this.$refs[ref].getValue(), className)
        .then((res) => {
          this.$message({
            message: "复制成功",
            type: "success",
            center: true,
          });
        })
        .catch((err) => {
          this.$message({
            message: "复制失败",
            type: "error",
            center: true,
          });
        });
    },
  },
};
</script>
