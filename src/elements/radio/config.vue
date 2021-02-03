<template>
  <common-field :data="data">
    <template slot="custom">
      <el-form-item label="布局方式">
        <el-radio-group v-model="data.options.inline">
          <el-radio-button :label="false">块级</el-radio-button>
          <el-radio-button :label="true">行内</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="选项">
        <el-radio-group v-model="data.options.isStatic">
          <el-radio-button :label="true">静态数据</el-radio-button>
          <el-radio-button :label="false" disabled>动态数据</el-radio-button>
        </el-radio-group>
        <el-radio-group v-model="data.options.defaultValue">
          <draggable
            tag="ul"
            v-model="data.options.options"
            class="radio-ul"
            v-bind="{
              group: 'options',
              ghostClass: 'active',
              handle: '.drag-icon',
            }"
          >
            <li v-for="(item, index) in data.options.options" :key="index">
              <el-radio :label="item.value">{{ }}</el-radio>
              <el-input
                size="mini"
                v-model="item.label"
                placeholder="标签"
                style="margin-right: 6px"
              />
              <el-input size="mini" v-model="item.value" placeholder="值" />
              <i class="drag-icon">
                <i class="iconfont icon-move" />
              </i>
              <el-button
                circle
                plain
                type="danger"
                @click="handleDeleteOptions(item, index)"
                size="mini"
                icon="el-icon-minus"
              />
            </li>
          </draggable>
        </el-radio-group>
        <div style="margin-left: 22px">
          <el-button type="text" @click="handleAddOptions">添加选项</el-button>
          <el-button
            type="text"
            v-if="data.options.options.length > 0"
            @click="handleClearOptions"
            >清空</el-button
          >
          <el-button
            type="text"
            v-if="data.options.options.length > 0"
            @click="handleResetOptions"
            style="color: #606266"
            >重置</el-button
          >
        </div>
      </el-form-item>
    </template>
    <template slot="option">
      <el-checkbox v-model="data.options.disabled">禁用</el-checkbox>
    </template>
  </common-field>
</template>

<script>
import Draggable from "vuedraggable";
import CommonField from "../CommonField";

import { S4 } from "utils/index";

export default {
  name: "DwRadioConfig",
  components: {
    Draggable,
    CommonField,
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    handleDeleteOptions(element, index) {
      // 默认值选项删除 清空默认值
      if (element.value === this.data.options.defaultValue) {
        this.data.options.defaultValue = "";
      }
      this.data.options.options.splice(index, 1);
    },
    handleAddOptions() {
      const key = S4();
      this.data.options.options.push({
        label: `选项 ${key}`,
        value: `option ${key}`,
      });
    },
    handleClearOptions() {
      this.data.options.options = [];
      this.data.options.defaultValue = "";
    },
    handleResetOptions() {
      this.data.options.defaultValue = "";
    },
  },
};
</script>