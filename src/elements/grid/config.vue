<template>
  <common-field
    :data="data"
    :field="false"
    :option="false"
    :name="false"
    :width="false"
    :label-width="false"
    :hide-label="false"
    :required="false"
  >
    <template slot="custom">
      <el-form-item label="字段标识">
        <el-input v-model="data.model" disabled></el-input>
      </el-form-item>

      <el-form-item label="栅格间隔">
        <el-input-number v-model="data.options.gutter" :min="0" :controls="false"></el-input-number>
      </el-form-item>

      <el-form-item label="布局方式">
        <el-radio-group v-model="data.options.isFlex">
          <el-radio-button :label="true">Flex</el-radio-button>false
          <el-radio-button :label="false">响应式</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <div v-if="data.options.isFlex">
        <el-form-item label="列配置项">
          <draggable
            tag="ul"
            :list="data.columns"
            class="grid-ul"
            v-bind="{
              group: 'options',
              ghostClass: 'active',
              handle: '.drag-icon',
            }"
          >
            <li v-for="(item, index) in data.columns" :key="index">
              <i class="drag-icon">
                <i class="iconfont icon-icon_bars" />
              </i>
              <el-input-number v-model="item.span" :controls="false"></el-input-number>

              <el-button
                v-if="data.columns.length > 1"
                circle
                plain
                type="danger"
                size="mini"
                icon="el-icon-minus"
                @click="handleDeleteColums(index)"
              />
            </li>
          </draggable>
          <el-button type="text" @click="handleAddColumns">添加选项</el-button>

          <el-button v-if="data.columns.length > 1" type="text" @click="handleClearColumns">清空</el-button>
        </el-form-item>
      </div>

      <div v-else>
        <el-form-item label="列配置项">
          <draggable
            tag="ul"
            :list="data.columns"
            class="grid-ul"
            v-bind="{
              group: 'options',
              ghostClass: 'active',
              handle: '.drag-icon',
            }"
          >
            <li v-for="(item, index) in data.columns" :key="index" style="align-items: start">
              <i class="drag-icon">
                <i class="iconfont icon-icon_bars" />
              </i>
              <div>
                <span class="limit-title">xs:</span>
                <el-input-number v-model="item.xs" :controls="false"></el-input-number>
                <span class="limit-text">&lt;768px</span>
                <br />
                <span class="limit-title">sm:</span>
                <el-input-number v-model="item.sm" :controls="false"></el-input-number>
                <span class="limit-text">≥768px</span>
                <br />
                <span class="limit-title">md:</span>
                <el-input-number v-model="item.md" :controls="false"></el-input-number>
                <span class="limit-text">≥992px</span>
                <br />
                <span class="limit-title">lg:</span>
                <el-input-number v-model="item.lg" :controls="false"></el-input-number>
                <span class="limit-text">≥992px</span>
                <br />
                <span class="limit-title">xl:</span>
                <el-input-number v-model="item.xl" :controls="false"></el-input-number>
                <span class="limit-text">≥992px</span>
                <br />
              </div>
              <el-button
                circle
                plain
                type="danger"
                size="mini"
                icon="el-icon-minus"
                @click="handleDeleteColums(index)"
              />
            </li>
          </draggable>
          <el-button type="text" @click="handleAddColumns">添加选项</el-button>

          <el-button v-if="data.columns.length > 0" type="text" @click="handleClearColumns">清空</el-button>
        </el-form-item>
      </div>

      <el-form-item label="水平排列方式">
        <el-select key="justify" v-model="data.options.justify">
          <el-option v-for="(item, index) in justify" :key="index" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>

      <el-form-item label="垂直排列方式">
        <el-select key="align" v-model="data.options.align">
          <el-option v-for="(item, index) in align" :key="index" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
    </template>
  </common-field>
</template>

<script>
import Draggable from 'vuedraggable'
import CommonField from '../CommonField'

export default {
  name: 'DwGridConfig',
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
  data() {
    return {
      align: [
        {
          label: '顶部对齐',
          value: 'top',
        },
        {
          label: '居中',
          value: 'middle',
        },
        {
          label: '底部对齐',
          value: 'bottom',
        },
      ],
      justify: [
        {
          label: '左对齐',
          value: 'start',
        },
        {
          label: '右对齐',
          value: 'end',
        },
        {
          label: '居中',
          value: 'center',
        },
        {
          label: '两侧间隔相等',
          value: 'space-around',
        },
        {
          label: '两端对齐',
          value: 'space-between',
        },
      ],
    }
  },
  methods: {
    handleClearColumns() {
      this.data.columns = [
        {
          span: 12,
          xs: 12,
          sm: 12,
          md: 12,
          lg: 12,
          xl: 12,
          list: [],
        },
      ]
    },

    handleDeleteColums(index) {
      this.data.columns.splice(index, 1)
    },

    handleAddColumns() {
      this.data.columns.push({
        span: 12,
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        list: [],
      })
    },
  },
}
</script>
