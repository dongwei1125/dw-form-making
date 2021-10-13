<template>
  <common-field :data="data">
    <template slot="custom">
      <el-form-item label="展开方式">
        <el-radio-group v-model="data.options.expandTrigger">
          <el-radio-button label="click">click</el-radio-button>
          <el-radio-button label="hover">hover</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="选项">
        <el-radio-group v-model="data.options.isStatic">
          <el-radio-button :label="true">静态数据</el-radio-button>
          <el-radio-button :label="false" disabled>动态数据</el-radio-button>
        </el-radio-group>
        <div v-if="data.options.isStatic">
          <el-input v-model="data.options.remoteOption" size="mini" />
          <el-input v-model="data.options.props.value" size="mini">
            <template slot="prepend">值</template>
          </el-input>
          <el-input v-model="data.options.props.label" size="mini">
            <template slot="prepend">标签</template>
          </el-input>
          <el-input v-model="data.options.props.children" size="mini">
            <template slot="prepend">子选项</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="选项分隔符">
        <el-input v-model="data.options.separator"></el-input>
      </el-form-item>
      <el-form-item label="占位内容">
        <el-input v-model="data.options.placeholder"></el-input>
      </el-form-item>
    </template>
    <template slot="option">
      <el-checkbox v-model="data.options.disabled">禁用</el-checkbox>
      <el-checkbox
        v-model="data.options.multiple"
        @change="handleMultipleChange"
        >多选</el-checkbox
      >
      <el-checkbox
        v-model="data.options.collapseTags"
        :disabled="!data.options.multiple"
        >多选折叠</el-checkbox
      >
      <el-checkbox v-model="data.options.clearable">清除按钮</el-checkbox>
      <el-checkbox v-model="data.options.filterable">搜索</el-checkbox>
      <el-checkbox v-model="data.options.emitPath">节点数组</el-checkbox>
      <el-checkbox v-model="data.options.showAllLevels">完整路径</el-checkbox>
      <el-checkbox v-model="data.options.checkStrictly"
        >父子节点不关联</el-checkbox
      >
    </template>
  </common-field>
</template>

<script>
import CommonField from "../CommonField";

export default {
  name: "DwCascaderConfig",
  components: {
    CommonField,
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    handleMultipleChange(multiple) {
      this.data.options.defaultValue = multiple ? [] : null;
    },
  },
};
</script>