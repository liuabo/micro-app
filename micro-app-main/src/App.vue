<template>
  <div id="main-app">
    <home />
  </div>
</template>

<style lang="scss">
#main-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
<script>
import Home from '@/components/Home';
import actions from "@/shared/actions";
export default {
  components: {Home},
  mounted () {
    console.log('mounted');
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log("主应用观察者： ", prevState);
      console.log("主应用观察者：token 改变前的值为 ", prevState.token);
      console.log("主应用观察者：登录状态发生改变，改变后的 token 的值为 ", state.token);
      console.log("主应用观察者：登录状态发生改变，改变后的值为 ", state);
    });
  }
};
</script>
