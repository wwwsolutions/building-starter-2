// PATHS
import paths from '../webpack.paths';


// https://www.npmjs.com/package/postcss-assets
const postcssAssets = [
  'postcss-assets',
  {
    basePath: paths.src,
    loadPaths: [paths.assets.fonts, paths.assets.icons, paths.assets.images, paths.assets.sprites, paths.assets.videos],
  }
];


export default postcssAssets;
