<template>
  <div>
    <template v-if="basic.length">
      <div class="element-cate-title">基础字段</div>
      <!-- 
        group-name：view 同组别名可相互拖动
        group-pull：clone 拖动至其他组别克隆/复制，而非直接取出再移动
        group-put：false其他组别拖动至该组别不放入
        ghostClass：move 拖动时副本及原始元素类名
        sort：false 同组别拖动后不排序
      -->
      <draggable
        tag="ul"
        v-model="basic"
        v-bind="{
          group: {
            name: 'view',
            pull: 'clone',
            put: false,
          },
          sort: false,
        }"
        :clone="handleMoveClone"
      >
        <li
          class="element-cate-item"
          v-for="(item, index) in basic"
          :key="index"
        >
          <a>
            <i class="icon iconfont" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </a>
        </li>
      </draggable>
    </template>

    <template v-if="advance.length">
      <div class="element-cate-title">高级字段</div>
      <draggable
        tag="ul"
        v-model="advance"
        v-bind="{
          group: {
            name: 'view',
            pull: 'clone',
            put: false,
          },
          sort: false,
        }"
        :clone="handleMoveClone"
      >
        <li
          class="element-cate-item"
          v-for="(item, index) in advance"
          :key="index"
        >
          <a>
            <i class="icon iconfont" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </a>
        </li>
      </draggable>
    </template>

    <template v-if="layout.length">
      <div class="element-cate-title">布局字段</div>
      <draggable
        tag="ul"
        v-model="layout"
        v-bind="{
          group: {
            name: 'view',
            pull: 'clone',
            put: false,
          },
          sort: false,
        }"
        :clone="handleMoveClone"
      >
        <li
          class="element-cate-item"
          v-for="(item, index) in layout"
          :key="index"
        >
          <a>
            <i class="icon iconfont" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </a>
        </li>
      </draggable>
    </template>
  </div>
</template>

<script>
import Draggable from "vuedraggable";

import { basic, advance, layout } from "elements/index";
import { uuid, deepClone } from "utils/index";

export default {
  name: "ElementCate",
  components: { Draggable },
  data() {
    return {
      basic,
      advance,
      layout,
    };
  },
  methods: {
    handleMoveClone(element) {
      const key = uuid();
      const el = deepClone(element);
      // 级联选项
      if (element.type === "cascader") {
        el.options.remoteOption = "cascader_option_" + key;
      }
      return Object.assign(el, {
        key,
        model: element.type + "_" + key,
      });
    },
  },
};
</script>
