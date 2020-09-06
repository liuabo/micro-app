<template>
  <section style="padding: 20px; color: red;">
    我是子应用一了
    <a-button @click="change" type="primary">测试</a-button>
  </section>
</template>
<script>
import actions from "@/shared/actions";
export default {
  name: "Home",
  data() {
    return {
      state: null
    };
  },
  mounted() {
    actions.onGlobalStateChange((state, prev) => {
      console.log("state, prev --- 这是子应用", state, prev);
      this.state = state;
    }, true);
  },
  methods: {
    change() {
      let params = "我是子应用数据";
      actions.setGlobalState({ appParams: { ...this.state, params } });
    }
  }
};
</script>
