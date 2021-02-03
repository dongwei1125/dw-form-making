var path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  productionSourceMap: false, 
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('elements', resolve('src/elements'))
      .set('store', resolve('src/store'))
      .set('utils', resolve('src/utils'))
  }
};
