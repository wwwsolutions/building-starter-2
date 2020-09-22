
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

        // more examples
        // host: process.env.HOST,
        // port: process.env.PORT,
      }
    ),

  ])

};
