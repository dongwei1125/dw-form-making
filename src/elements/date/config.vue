<template>
  <common-field :data="data">
    <template slot="custom">
      <el-form-item label="显示类型">
        <el-select v-model="data.options.showType" @change="handleTypeChange">
          <el-option
            :label="item.label"
            :value="item.value"
            v-for="(item, index) in type"
            :key="index"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="格式">
        <el-input
          v-model="data.options.format"
          placeholder="yyyy-MM-dd"
        ></el-input>
      </el-form-item>
      <el-form-item label="默认值">
        <!-- element-ui date-picker bug -->
        <el-date-picker
          key="range"
          v-if="data.options.isRange"
          style="width: 100%"
          v-model="data.options.defaultValue"
          is-range
          :type="data.options.showType"
          :value-format="data.options.format"
        ></el-date-picker>
        <el-date-picker
          key="default"
          style="width: 100%"
          :type="data.options.showType"
          v-else
          v-model="data.options.defaultValue"
          :value-format="data.options.format"
        ></el-date-picker>
      </el-form-item>
      <div v-if="data.options.isRange">
        <el-form-item label="开始占位内容">
          <el-input v-model="data.options.startPlaceholder"></el-input>
        </el-form-item>
        <el-form-item label="范围分隔符">
          <el-input v-model="data.options.rangeSeparator"></el-input>
        </el-form-item>
        <el-form-item label="结束占位内容">
          <el-input v-model="data.options.endPlaceholder"></el-input>
        </el-form-item>
      </div>
      <div v-else>
        <el-form-item label="占位内容">
          <el-input v-model="data.options.placeholder"></el-input>
        </el-form-item>
      </div>
    </template>
    <template slot="option">
      <el-checkbox
        v-model="data.options.disabled"
        :disabled="data.options.readonly"
        >禁用</el-checkbox
      >
      <el-checkbox
        v-model="data.options.readonly"
        :disabled="data.options.disabled"
        >只读</el-checkbox
      >
      <el-checkbox v-model="data.options.editable">文本框可输入</el-checkbox>
      <el-checkbox v-model="data.options.clearable">清除按钮</el-checkbox>
    </template>
  </common-field>
</template>

<script>
import CommonField from "../CommonField";

export default {
  name: "DwDateConfig",
  components: {
    CommonField,
  },
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      type: [
        {
          label: "月份",
          value: "month",
          format: "yyyy-MM",
          type: "",
          isRange: false,
        },
        {
          label: "年份",
          value: "year",
          format: "yyyy",
          type: "",
          isRange: false,
        },
        {
          label: "日期",
          value: "date",
          format: "yyyy-MM-dd",
          type: "",
          isRange: false,
        },
        {
          label: "多日期",
          value: "dates",
          format: "yyyy-MM-dd",
          type: null,
          isRange: false,
        },
        {
          label: "日期时间",
          value: "datetime",
          format: "yyyy-MM-dd HH:mm:ss",
          type: "",
          isRange: false,
        },
        {
          label: "月份范围",
          value: "monthrange",
          format: "yyyy-MM",
          type: null,
          isRange: true,
        },
        {
          label: "日期范围",
          value: "daterange",
          format: "yyyy-MM-dd",
          type: null,
          isRange: true,
        },
        {
          label: "日期时间范围",
          value: "datetimerange",
          format: "yyyy-MM-dd HH:mm:ss",
          type: null,
          isRange: true,
        },
      ],
    };
  },
  methods: {
    handleTypeChange(value) {
      var showType = this.type.find((e) => e.value === value);
      this.data.options.format = showType.format;
      this.data.options.defaultValue = showType.type;
      this.data.options.isRange = showType.isRange;
    },
  },
};
</script>