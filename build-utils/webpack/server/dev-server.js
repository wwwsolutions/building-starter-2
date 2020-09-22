// PATHS
import paths from '../webpack.paths';

// set contentBase param
const contentBase = paths.src;

// tell webpack to reload page
const reloadHtmlOnChange = function (app, server) {
  server._watch(`./**/*.html`)
};

const devServer = ({ host, port } = {}) => ({

  devServer: {
    before: reloadHtmlOnChange,
    contentBase,
    // compress: true,
    // stats: "errors-only",
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    open: true,
    overlay: true,
    hot: true
  }

});

export default devServer;
