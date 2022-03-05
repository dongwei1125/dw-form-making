<template>
  <div class="generate-form">
    <el-form
      ref="modelsForm"
      :show-message="!data.config.hideError"
      :hide-required-asterisk="data.config.hideAsterisk"
      label-suffix
      :model="models"
      :rules="rules"
      :size="data.config.size"
      :label-position="data.config.labelPosition"
      :label-width="data.config.labelWidth + 'px'"
      :class="data.config.customClass"
    >
      <component
        :is="element.component"
        v-for="element in data.list"
        :key="element.key"
        v-model="models[element.model]"
        :remote-option="remoteOption"
        :element="element"
        :models="models"
        :slots="slots"
        :draggable="false"
        @editor-upload-image="data => $emit('editor-upload-image', data)"
      >
        <template v-for="slot in slots" :slot="slot" slot-scope="scope">
          <slot :name="slot" :model="scope.model" />
        </template>
      </component>
    </el-form>
  </div>
</template>

<script>
import components from 'elements/view'

import { deepClone } from 'utils/index'

export default {
  name: 'GenerateForm',
  components,
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Object,
      default: () => ({}),
    },
    remoteOption: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      models: {},
      rules: {},
      slots: [],
    }
  },
  created() {
    this.handleSetModels()
  },
  methods: {
    reset() {
      this.$refs.modelsForm.resetFields()
      this.resetTimePicker()
    },

    resetTimePicker() {
      // time-picker 范围选择 无初值 选择后表单重置 置为[null]固定值
      for (const key in this.models) {
        if (
          Array.isArray(this.models[key]) &&
          this.models[key].length === 1 &&
          this.models[key][0] === null
        ) {
          this.models[key] = null
        }
      }
    },

    getData() {
      return new Promise((resolve, reject) => {
        this.$refs.modelsForm.validate(valid => {
          if (valid) {
            resolve(deepClone(this.models))
          } else {
            reject()
          }
        })
      })
    },

    handleSetModels() {
      const models = {}
      const rules = {}
      const slots = []

      getGridModel(this.data.list)

      this.rules = rules
      this.slots = slots
      this.models = Object.assign(models, deepClone(this.value))

      function getGridModel(list) {
        list.forEach(element => {
          if (element.type === 'grid') {
            element.columns.forEach(column => {
              if (column.list.length) {
                getGridModel(column.list)
              }
            })
          } else {
            if (element.type === 'blank') {
              slots.push(element.model)
            }

            rules[element.model] = [
              {
                required: !!element.options.required,
                message: element.options.requiredMessage || `请输入${element.name}`,
              },
            ]

            if (element.options.isType) {
              rules[element.model].push({
                type: element.options.type,
                message: element.options.typeMessage || `${element.name}验证不匹配`,
              })
            }

            if (element.options.isPattern) {
              rules[element.model].push({
                pattern: new RegExp(element.options.pattern),
                message: element.options.patternMessage || `${element.name}格式不匹配`,
              })
            }

            if (element.type !== 'divider') {
              models[element.model] = element.options.defaultValue
            }
          }
        })
      }
    },
  },
}
</script>
