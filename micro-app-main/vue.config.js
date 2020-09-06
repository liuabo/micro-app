const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  devServer: {
    port: 9999,
    open: true,
    disableHostCheck: true,
    // 配置跨域请求头，解决开发环境的跨域问题
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    // 设置代理
    proxy: {
      "/api": {
        target: "http://dev-api.jt-gmall.com/mall",
        ws: true,
        changOrigin: true
      }
    },
  },
};
