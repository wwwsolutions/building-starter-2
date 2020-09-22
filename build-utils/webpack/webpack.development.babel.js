
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
        port: 8000, // omit for defaults
        // host: '0.0.0.0', // enable for testing on other devices on the LAN

        // more examples
        // host: process.env.HOST,
        // port: process.env.PORT,
      }
    ),

  ])

};
