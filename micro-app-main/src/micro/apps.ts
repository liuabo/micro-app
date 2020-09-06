import shared from "@/shared";

const apps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: 'micro-app-one',
    entry: '//localhost:10000',
    container: '#frame',
    activeRule: '/appOne',
    props: { shared },
  },
  {
    name: 'micro-app-two',
    entry: '//localhost:10100',
    container: '#frame',
    activeRule: '/appTwo',
    props: { shared },
  },
];

export default apps;
