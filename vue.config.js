const path = require('path')


module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-project/'
    : '/',
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://api.github.com',  // 后台接口域名
        // ws: true,        //如果要代理 websockets，配置这个参数
        secure: true,  // 如果是https接口，需要配置这个参数
        // changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  }
}

