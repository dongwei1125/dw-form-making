<template>
  <el-row
    type="flex"
    :gutter="element.options.gutter"
    :justify="element.options.justify"
    :align="element.options.align"
  >
    <el-col
      :xs="element.options.isFlex ? undefined : column.xs"
      :sm="element.options.isFlex ? undefined : column.sm"
      :md="element.options.isFlex ? undefined : column.md"
      :lg="element.options.isFlex ? undefined : column.lg"
      :xl="element.options.isFlex ? undefined : column.xl"
      :span="column.span"
      v-for="(column, index) in element.columns"
      :key="index"
    >
      <draggable
        v-if="draggable"
        style="min-height: 50px"
        @add="handleAdd($event, column)"
        v-model="column.list"
        v-bind="{
          group: 'view',
          animation: 200,
          ghostClass: 'move',
          handle: '.drag-icon',
        }"
      >
        <transition-group
          :name="column.list.length ? 'appear' : ''"
          tag="div"
          class="el-col-list"
        >
          <widget
            v-for="(element, index) in column.list"
            :key="element.key"
            :data="column"
            :element="element"
            :index="index"
          />
        </transition-group>
      </draggable>
      <template v-else>
        <component
          :is="element.component"
          v-model="models[element.model]"
          :element="element"
          :models="models"
          :slots="slots"
          v-for="element in column.list"
          :key="element.key"
          :remoteOption="remoteOption"
          :draggable="draggable"
          @editor-upload-image="(data) => $emit('editor-upload-image', data)"
        >
          <template v-for="slot in slots" :slot="slot" slot-scope="scope">
            <slot :name="slot" :model="scope.model" />
          </template>
        </component>
      </template>
    </el-col>
  </el-row>
</template>

<script>
import Draggable from "vuedraggable";
import components from "elements/view";

import store from "store/index";

export default {
  name: "DwGrid",
  beforeCreate() {
    Object.assign(this.$options.components, components);
  },
  components: {
    Draggable,
    Widget: () => import("components/ButtonView/Widget.vue"),
  },
  computed: {
    select() {
      return store.state.select;
    },
  },
  props: {
    element: {
      type: Object,
    },
    config: {
      type: Object,
    },
    draggable: {
      type: Boolean,
      default: () => true,
    },
    models: {
      type: Object,
    },
    slots: {
      type: Array,
    },
    remoteOption: {
      type: Object,
    },
  },
  methods: {
    handleAdd({ newIndex }, column) {
      store.commit("SET_SELECT", column.list[newIndex]);
    },
  },
};
</script>
<style lang="scss" scoped>
.appear-leave-to {
  opacity: 0;
}

.appear-leave-active {
  transition: all 0.5s ease;
}
</style>