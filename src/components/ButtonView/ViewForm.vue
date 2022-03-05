<template>
  <div>
    <div v-if="data.list.length == 0" class="view-form-empty">从左侧拖拽添加字段</div>

    <el-form
      :size="data.config.size"
      :label-width="data.config.labelWidth + 'px'"
      :label-position="data.config.labelPosition"
      :hide-required-asterisk="data.config.hideAsterisk"
    >
      <draggable
        v-model="data.list"
        v-bind="{
          group: 'view',
          animation: 200,
          ghostClass: 'move',
          handle: '.drag-icon',
        }"
        @add="handleAdd"
      >
        <transition-group class="view-form" :name="data.list.length ? 'appear' : ''" tag="div">
          <widget
            v-for="(element, index) in data.list"
            :key="element.key"
            :data="data"
            :element="element"
            :index="index"
          />
        </transition-group>
      </draggable>
    </el-form>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import Widget from './Widget'

import store from 'store/index.js'

export default {
  name: 'ViewForm',
  components: {
    Draggable,
    Widget,
  },
  computed: {
    data() {
      return store.state.data
    },
  },
  methods: {
    handleAdd({ newIndex }) {
      store.commit('SET_SELECT', this.data.list[newIndex])
    },
  },
}
</script>
