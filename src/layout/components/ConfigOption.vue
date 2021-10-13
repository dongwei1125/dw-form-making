<template>
  <div>
    <el-container>
      <el-header height="45px">
        <div
          class="property-tab"
          :class="{ active: property == 'field' }"
          @click="handleSelectConfig('field')"
        >
          字段属性
        </div>
        <div
          class="property-tab"
          :class="{ active: property == 'form' }"
          @click="handleSelectConfig('form')"
        >
          表单属性
        </div>
      </el-header>

      <el-main>
        <div>
          <field-property v-show="property == 'field'" />
          <form-property v-show="property == 'form'" />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import FieldProperty from "components/ConfigOption/FieldProperty";
import FormProperty from "components/ConfigOption/FormProperty";

export default {
  name: "ConfigOption",
  components: {
    FieldProperty,
    FormProperty,
  },
  data() {
    return {
      property: "field",
    };
  },
  methods: {
    handleSelectConfig(property) {
      this.property = property;
    },
  },
};
</script>
