import { initGlobalState, MicroAppStateActions } from 'qiankun';

const initialState = {
  appParams: [
    {
      path: '/router',
      key: 'app-vue',
    },
  ],
};
const actions: MicroAppStateActions = initGlobalState(initialState);

export default actions;
