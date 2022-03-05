<template>
  <common-field :data="data">
    <template slot="custom">
      <el-form-item label="选项">
        <el-radio-group v-model="data.options.isStatic">
          <el-radio-button :label="true">静态数据</el-radio-button>
          <el-radio-button :label="false" disabled>动态数据</el-radio-button>
        </el-radio-group>

        <div v-if="data.options.options.length > 0">
          <div v-if="data.options.multiple">
            <el-checkbox-group v-model="data.options.defaultValue">
              <draggable
                v-model="data.options.options"
                tag="ul"
                class="checkbox-ul"
                v-bind="{
                  group: 'options',
                  ghostClass: 'active',
                  handle: '.drag-icon',
                }"
              >
                <li v-for="(item, index) in data.options.options" :key="index">
                  <el-checkbox :label="item.value" class="hidden-label">&nbsp;</el-checkbox>
                  <el-input v-model="item.label" size="mini" placeholder="标签" style="margin-right: 6px" />
                  <el-input v-model="item.value" size="mini" placeholder="值" />
                  <i class="drag-icon">
                    <i class="iconfont icon-move" />
                  </i>
                  <el-button
                    circle
                    plain
                    type="danger"
                    size="mini"
                    icon="el-icon-minus"
                    @click="handleDeleteOptions(item, index)"
                  />
                </li>
              </draggable>
            </el-checkbox-group>
          </div>

          <div v-else>
            <el-radio-group v-model="data.options.defaultValue">
              <draggable
                v-model="data.options.options"
                tag="ul"
                class="radio-ul"
                v-bind="{
                  group: 'options',
                  ghostClass: 'active',
                  handle: '.drag-icon',
                }"
              >
                <li v-for="(item, index) in data.options.options" :key="index">
                  <el-radio :label="item.value" class="hidden-label">&nbsp;</el-radio>
                  <el-input v-model="item.label" size="mini" placeholder="标签" style="margin-right: 6px" />
                  <el-input v-model="item.value" size="mini" placeholder="值" />
                  <i class="drag-icon">
                    <i class="iconfont icon-move" />
                  </i>
                  <el-button
                    circle
                    plain
                    type="danger"
                    size="mini"
                    icon="el-icon-minus"
                    @click="handleDeleteOptions(item, index)"
                  />
                </li>
              </draggable>
            </el-radio-group>
          </div>
        </div>

        <div style="margin-left: 22px">
          <el-button type="text" @click="handleAddOptions">添加选项</el-button>

          <el-button v-if="data.options.options.length > 0" type="text" @click="handleClearOptions"
            >清空</el-button
          >

          <el-button
            v-if="data.options.options.length > 0"
            type="text"
            style="color: #606266"
            @click="handleResetOptions"
            >重置</el-button
          >
        </div>
      </el-form-item>

      <el-form-item label="占位内容">
        <el-input v-model="data.options.placeholder"></el-input>
      </el-form-item>
    </template>

    <template slot="option">
      <el-checkbox v-model="data.options.disabled">禁用</el-checkbox>
      <el-checkbox v-model="data.options.multiple" @change="handleMultipleChange">多选</el-checkbox>
      <el-checkbox v-model="data.options.filterable">搜索</el-checkbox>
      <el-checkbox v-model="data.options.clearable">清除按钮</el-checkbox>
    </template>
  </common-field>
</template>

<script>
import Draggable from 'vuedraggable'
import CommonField from '../CommonField'

import { S4 } from 'utils/index'

export default {
  name: 'DwSelectConfig',
  components: {
    Draggable,
    CommonField,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleMultipleChange(multiple) {
      var value = this.data.options.defaultValue

      // 单选过渡多选保留值 多选过渡单选默认取索引0
      this.data.options.defaultValue = multiple
        ? value === null
          ? []
          : [value]
        : value.length
        ? value[0]
        : null
    },

    handleDeleteOptions(element, index) {
      // 默认值选项删除 更新默认值
      if (this.data.options.multiple) {
        // 多选
        const i = this.data.options.defaultValue.indexOf(element.value)

        if (i > -1) {
          this.data.options.defaultValue.splice(i, 1)
        }
      } else {
        // 单选
        if (element.value === this.data.options.defaultValue) {
          this.data.options.defaultValue = null
        }
      }

      this.data.options.options.splice(index, 1)
    },

    handleAddOptions() {
      const key = S4()

      this.data.options.options.push({
        label: `选项 ${key}`,
        value: `option ${key}`,
      })
    },

    handleClearOptions() {
      this.data.options.options = []
      this.data.options.defaultValue = this.data.options.multiple ? [] : null
    },

    handleResetOptions() {
      this.data.options.defaultValue = this.data.options.multiple ? [] : null
    },
  },
}
</script>
