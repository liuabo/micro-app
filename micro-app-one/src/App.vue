<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      menus: [
        {
          key: "vue",
          route: "/",
          title: "主页"
        },
        {
          key: "vue-list",
          route: "/list",
          title: "列表页"
        }
      ]
    };
  },
  computed: {
    currentRoute() {
      const menu = this.menus.find(item => item.route === this.$route.path);
      return menu ? menu.key : "vue";
    }
  }
};
</script>

<style></style>
