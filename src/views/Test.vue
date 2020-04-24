<template>
  <div>当前路由: {{ current_router }}</div>
  <div>点击了{{ times }}次</div>
  <div>count.value.index * 2 = {{ doubleCount }}</div>
  <div>
    count: {{ count }}
    <button @click="add">index++</button>
  </div>

  <div>Vuex state store_value: {{ vuexMsg }}</div>
  <button @click="update">更新vuex数据</button>
</template>

<script>
import { ref, computed, watch, getCurrentInstance } from 'vue';

export default {
  setup() {
    // ctx 相当于 this
    const { ctx } = getCurrentInstance();
    // data  基本 or 复杂数据类型, 都放在 yourdata.value 下, 但是在template里会被直接解析
    // 类似react-hooks
    const count = ref({ index: 0 });
    const times = ref(0);
    // router 当前路由信息ctx.$router.currentRoute.value
    const current_router = ref(ctx.$router.currentRoute.value.fullPath);
    // computed
    const doubleCount = computed(() => count.value.index * 2);
    // Vuex State
    const vuexMsg = computed(() => ctx.$store.state.store_value);
    // methods
    const add = () => {
      count.value.index++;
    };
    // Vuex mutations
    const update = () => {
      add();
      ctx.$store.commit(
        'SET_STORE_VALUE',
        `${vuexMsg.value}-${count.value.index}`,
      );
    };

    // watch
    watch(
      () => count.value.index,
      () => {
        times.value++;
      },
    );
    return {
      count,
      add,
      times,
      vuexMsg,
      update,
      current_router,
      doubleCount,
    };
  },
};
</script>

<style></style>
