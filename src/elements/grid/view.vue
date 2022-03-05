<template>
  <el-row
    type="flex"
    :gutter="element.options.gutter"
    :justify="element.options.justify"
    :align="element.options.align"
  >
    <el-col
      v-for="(column, index) in element.columns"
      :key="index"
      :xs="element.options.isFlex ? undefined : column.xs"
      :sm="element.options.isFlex ? undefined : column.sm"
      :md="element.options.isFlex ? undefined : column.md"
      :lg="element.options.isFlex ? undefined : column.lg"
      :xl="element.options.isFlex ? undefined : column.xl"
      :span="column.span"
    >
      <draggable
        v-if="draggable"
        v-model="column.list"
        style="min-height: 50px"
        v-bind="{
          group: 'view',
          animation: 200,
          ghostClass: 'move',
          handle: '.drag-icon',
        }"
        @add="handleAdd($event, column)"
      >
        <transition-group :name="column.list.length ? 'appear' : ''" tag="div" class="el-col-list">
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
          v-for="element in column.list"
          :key="element.key"
          v-model="models[element.model]"
          :element="element"
          :models="models"
          :slots="slots"
          :remote-option="remoteOption"
          :draggable="draggable"
          @editor-upload-image="data => $emit('editor-upload-image', data)"
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
import components from 'elements/view'

import Draggable from 'vuedraggable'
import store from 'store/index'

export default {
  name: 'DwGrid',
  components: {
    Draggable,
    Widget: () => import('components/ButtonView/Widget.vue'),
  },
  props: {
    element: {
      type: Object,
      default: () => ({}),
    },
    config: {
      type: Object,
      default: () => ({}),
    },
    draggable: {
      type: Boolean,
      default: () => true,
    },
    models: {
      type: Object,
      default: () => ({}),
    },
    slots: {
      type: Array,
      default: () => [],
    },
    remoteOption: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    select() {
      return store.state.select
    },
  },
  beforeCreate() {
    Object.assign(this.$options.components, components)
  },
  methods: {
    handleAdd({ newIndex }, column) {
      store.commit('SET_SELECT', column.list[newIndex])
    },
  },
}
</script>
