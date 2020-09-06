<template>
  <div class='main-menu'>
    <a-menu
      :default-selected-keys="['Home']"
      :default-open-keys="['Home']"
      mode='inline'
      theme='dark'
      :inline-collapsed='collapsed'
    >
      <template v-for='item in menus'>
        <a-menu-item v-if='item.children.length === 0' :key='item.key'>
          <span slot='title'
            ><a-icon type='appstore' /><span> {{ item.title }}</span></span
          >
          <router-link :to='{ path: item.path }'>
            <span>{{ item.title }}</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu v-else :key='item.key'>
          <span slot='title'
            ><a-icon type='appstore' /><span> {{ item.title }}</span></span
          >
          <a-menu-item v-for='ele in item.children' :key='ele.key'>
            <router-link :to='{ path: ele.path }'>
              {{ ele.title }}
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
type MenuItem = {
  key: string;
  title: string;
  icon?: string;
  path: string;
  children?: MenuItem[];
};
@Component
export default class MainMenu extends Vue {
  private menus: MenuItem[] = [
    {
      key: 'Home',
      title: '主页',
      icon: '/',
      path: '/',
      children: [],
    },
    {
      key: 'vueOne',
      title: 'Vue 子应用-01',
      path: '/vue',
      children: [
        {
          key: 'vueOne',
          title: 'Vue 子应用-01-首页',
          path: '/appOne',
          children: [],
        },
        {
          key: 'vueTow',
          title: 'Vue 子应用-01-列表',
          path: '/appOne/list',
          children: [],
        },
      ],
    },
    {
      key: 'vueTow',
      title: 'Vue 子应用-02',
      path: '/vue',
      children: [
        {
          key: 'vueTow-home',
          title: 'Vue 子应用-02-首页',
          path: '/appTwo',
          children: [],
        },
        {
          key: 'vueTow-list',
          title: 'Vue 子应用-02-列表',
          path: '/appTwo/list',
          children: [],
        },
      ],
    },
    {
      key: 'Login',
      title: '登录页',
      icon: '/',
      path: '/login',
      children: [],
    },
  ];
  private collapsed: boolean = false;
}
</script>
<style scoped lang='scss'>
.main-menu {
  width: 200px;
  height: 100%;
  /deep/.ant-menu {
    height: 100%;
  }
}
</style>
