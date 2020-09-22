// WEBPACK PLUGINS
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// POSTCSS PLUGINS
import postcssImport from '../postcss-plugins/postcssImport';
import postcssAssets from '../postcss-plugins/postcssAssets';
import postcssMap from '../postcss-plugins/postcssMap';
import postcssSimpleVars from '../postcss-plugins/postcssSimpleVars';
import postcssNested from '../postcss-plugins/postcssNested';
// import postcssAutoprefixer from '../postcss-plugins/postcssAutoprefixer'; // >>> instead using autoprefixer from postcss-preset-env
import postcssPresetEnv from '../postcss-plugins/postcssPresetEnv';


const POSTCSSLoader = mode => ({
  test: /\.(sa|sc|c)ss$/,
  exclude: /node_modules/,
  use: [
    mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        sourceMap: mode === 'development' ? true : false
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            postcssImport,
            postcssAssets,
            postcssMap,

            // TODO: ???? FIX IT
            // https://www.npmjs.com/package/postcss-mixins
            // 'postcss-mixins',

            postcssSimpleVars,

            // ['postcss-custom-properties', {
            //   preserve: true,
            // }],

            postcssNested,

            // 'postcss-utilities',

            // ['postcss-jsmath', {
            //   isString(arg) {
            //     if (isNaN(arg)) {
            //       return 1;
            //     }
            //     return 0;
            //   },
            //   // HELPER FUNCTIONS
            //   sum(...numbers) {
            //     return numbers.reduce((x, y) => x + y);
            //   },
            //   pow(base, exponent) {
            //     return Math.pow(base, exponent);
            //   },
            // }],

            // ['postcss-calc', {
            //   warnWhenCannotResolve: false,
            //   preserve: true,
            //   mediaQueries: true,
            //   selectors: true,
            //   precision: 5,
            // }],

            // 'postcss-atroot',

            // 'postcss-selector-not',

            // 'postcss-extend',

            // 'lost',

            postcssPresetEnv,

            // 'postcss-color-function',

            // 'postcss-media-fn',

            // 'postcss-flexbugs-fixes',

            // 'cssnano',

            // 'postcss-reporter',
          ],
        },
      },

    }
  ]
});

export default POSTCSSLoader;
