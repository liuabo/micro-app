<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <main-menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;text-align: left">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <!--        <router-view v-show="$route.name" />-->
        <!--        <router-view v-show="!$route.name" id="frame" />-->
        <section class="cns-frame-wrapper">
          <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
          <router-view v-show="$route.name" />
          <!-- 子应用渲染区，用于挂载子应用节点 -->
          <section v-show="!$route.name" id="frame"></section>
        </section>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
// @ts-ignore
import MainMenu from '@/components/MainMenu';
import {Component, Vue} from 'vue-property-decorator';
@Component({
  components: { MainMenu },
})
export default class Home extends Vue {
  // @Prop() private msg!: string;
  private collapsed: boolean = false;
}



// export default {
//   components: { MainMenu },
//   data() {
//     return {
//       collapsed: false
//     };
//   }
// };
</script>
<style lang="scss">
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.ant-layout {
  height: 100%;
}
</style>
