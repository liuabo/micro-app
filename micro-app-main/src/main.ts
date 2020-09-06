import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import startQiankun from './micro';

Vue.config.productionTip = false;

Vue.use(Antd);
startQiankun();
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#main-app');
