
import webpackMerge from 'webpack-merge';
import devServer from './server/dev-server';

// WEBPACK PLUGINS
import HotModuleReplacementPlugin from './plugins/HotModuleReplacementPlugin';

module.exports = () => {

  return webpackMerge([
    {

      output: {
        filename: '[name].js',
      },

      devtool: 'source-map',

      // PLUGINS <> DEVELOPMENT
      plugins: [
        HotModuleReplacementPlugin,
      ]

    },

    devServer(
      // pass to override dev-server configuration object
      {
        // omit for defaults
        port: 3001,
        host: '0.0.0.0', // for testing on other devices on the LAN

        // more examples
        // host: process.env.HOST,
        // port: process.env.PORT,
      }
    ),

  ])

};
