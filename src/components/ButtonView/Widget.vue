<template>
  <div
    :class="[
      'view-form-item',
      {
        active: select.key === element.key,
        grid: element.type === 'grid',
      },
    ]"
    :data-model="element.model"
    @click.stop="handleSelect(element)"
  >
    <component :is="element.component" :value="element.options.defaultValue" :element="element" />

    <div v-if="select.key === element.key" class="item-drag">
      <i class="iconfont icon-drag drag-icon"></i>
    </div>

    <div v-if="select.key === element.key" class="item-action">
      <i class="iconfont icon-clone" @click.stop="handleClone(element, index, data.list)"></i>
      <i class="iconfont icon-trash" @click.stop.once="handleDelete(data.list, index)"></i>
    </div>
  </div>
</template>

<script>
import components from 'elements/view'

import store from 'store/index'

export default {
  name: 'Widget', // eslint-disable-line
  components,
  props: {
    element: {
      type: Object,
      default: () => ({}),
    },
    data: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    select() {
      return store.state.select
    },
  },
  methods: {
    handleDelete(list, index) {
      store.commit('DELETE_ELEMENT', { list, index })
    },

    handleClone(element, index, list) {
      store.commit('CLONE_ELEMENT', { element, index, list })
    },

    handleSelect(element) {
      store.commit('SET_SELECT', element)
    },
  },
}
</script>
