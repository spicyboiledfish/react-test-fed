const { default: createWebpackConfig, log } = require('@hupu/create-webpack-config');

const yourProjectId = 'bbs-test-fed';

const { devWebpackConfig, buildWebpackConfig } = createWebpackConfig(
  // 设置特殊配置
  ({ isDev }) => ({
    port: 9528,
    proxy: {
      '/api': {
        target: 'https://bbsactivity-stg.hupu.com/bbsactivityapi/ ',
        pathRewrite: {
          '^/api': '/',
        },
        secure: false,
        changeOrigin: true,
      },
      '/bbsactivityapi': {
        target: 'https://bbsactivity-stg.hupu.com',
        secure: false,
        changeOrigin: true,
        logLevel: 'debug',
      },
    },
  }),
  // 配置加工(在设置特殊配置之后)
  (webpackConfig, { isDev, merge }) => {
    webpackConfig = merge(webpackConfig, isDev ? {} : {
      output: {
        publicPath: `//w2.hoopchina.com.cn/games/static/${yourProjectId}/`,
      },
    });
    return webpackConfig;
  },
);

// log('devWebpackConfig: ', devWebpackConfig);
// log('buildWebpackConfig: ', buildWebpackConfig);

module.exports = process.env.NODE_ENV === 'development'
  ? devWebpackConfig
  : buildWebpackConfig;
