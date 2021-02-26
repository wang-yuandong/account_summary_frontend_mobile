

const test = 'http://39.102.103.243'// 测试

module.exports = {
  lintOnSave: false,
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    open:true,
    proxy: {
      // '/user': {
      //   target: test,//需要跨域的目标url
      //   changeOrigin: true,// 将基于名称的虚拟托管网站的选项，如果不配置，请求会报404
      //   // pathRewrite: {
      //   // '^/user': 'user'
      //   // }
      // },
      '/mp-web':{
        target: test,//需要跨域的目标url
        changeOrigin: true,// 将基于名称的虚拟托管网站的选项，如果不配置，请求会报404
        // pathRewrite: {
        // '^/mp-web': 'mp-web'
        // }
      }
    }
  }
}
