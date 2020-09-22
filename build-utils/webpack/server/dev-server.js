// PATHS
import paths from '../webpack.paths';

const devServer = ({ host, port } = {}) => ({

  devServer: {
    contentBase: paths.src,
    // compress: true,
    // stats: "errors-only",
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    open: true,
    overlay: true,
    hot: true
  },
});

export default devServer;
