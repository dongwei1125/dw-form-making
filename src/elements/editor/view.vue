<template>
  <common-view :element="element">
    <div :style="{ width: element.options.width }">
      <editor
        :init="init"
        :disabled="element.options.disabled"
        :value="value"
        @input="(value) => $emit('change', value)"
      ></editor>
    </div>
  </common-view>
</template>

<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import CommonView from "../CommonView";

import "tinymce/themes/silver";
import "tinymce/skins/ui/oxide/skin.css";
import "tinymce/icons/default/icons";
import "tinymce/plugins/lists";
import "tinymce/plugins/code";
import "tinymce/plugins/table";
import "tinymce/plugins/colorpicker";
import "tinymce/plugins/textcolor";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/image";
import "tinymce/plugins/link";

export default {
  name: "DwEditor",
  components: {
    CommonView,
    Editor,
  },
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {},
    element: {
      type: Object,
    },
  },
  data() {
    return {
      init: {
        language_url:
          "https://unpkg.com/dw-form-making/public/tinymce/langs/zh_CN.js",
        language: "zh_CN",
        height: 280,
        menubar: false,
        statusbar: false, // 字数统计
        link_title: false, // 链接标题
        default_link_target: "_blank",
        plugins: "table link lists image code wordcount",
        toolbar:
          "bold italic underline strikethrough | fontsizeselect fontselect | forecolor backcolor | alignleft aligncenter alignright alignjustify|bullist numlist |outdent indent blockquote | undo redo | link unlink image code table | removeformat",
        branding: false,
        images_upload_handler: (blobInfo, success, failure) => {
          this.$emit("editor-upload-image", {
            blobInfo,
            success,
            failure,
            model: this.element.model,
          });
        },
      },
    };
  },
};
</script>