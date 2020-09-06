<template>
  <div>
    <a-button @click="login" type="primary">
      登录
    </a-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import actions from '@/shared/actions';
import {ApiLoginQuickly} from '@/apis';
import shared from '@/shared'

@Component
export default class Login extends Vue {
  private async login() {
    // ApiLoginQuickly 是一个远程登录函数，用于获取 token，详见 Demo
    const result = await ApiLoginQuickly();
    const {token} = result.data.loginQuickly;
    console.log('shared', shared);
    shared.setToken(token)
    // 登录成功后，设置 token
    actions.setGlobalState({token});
    this.$router.push('/')
  }
}
</script>

<style scoped>

</style>
