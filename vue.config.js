const pages = require('./pages.config')
const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  publicPath: './',
  chainWebpack: config => {
    // 添加组件路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@js', resolve('src/assets/js'))
      .set('@css', resolve('src/assets/css'))
    // 添加js忽略文件夹
    config.module.rule('js')
      .test(/\.jsx?$/)
      .exclude
      .add(resolve('src/sdk'))
      .end()
    config.module.rule('json')
      .test(/\.json$/)
      .exclude
      .add(resolve('src/sdk'))
      .end()
    // 添加eslint忽略文件夹
    config.module.rule('eslint')
      .test(/\.(vue|(j|t)sx?)$/)
      .exclude
      .add(resolve('src/sdk'))
  },
  pages: pages,
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/zxcity_restful/ws/rest': {
        target: 'https://share.zxtest.izxcs.com',
        // target: 'http://appmain.izxcs.com:81',
        // target: 'http://192.168.11.21:8080',
        ws: true,
        changeOrigin: true
      },
      '/zxcity_restful/ws/oss/ossUpload': {
        target: 'https://share.zxtest.izxcs.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
