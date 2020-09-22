// PATHS
import paths from '../webpack.paths';

// https://github.com/pascalduez/postcss-map
const postcssMap = [
  'postcss-map',
  {
    basePath: paths.presets,
    maps: [
      // SELECT ONE OF RESPONSIVE DESIGN STRATEGIES
      // COMMENT/UNCOMMENT DESIRED STRATEGY
      // @MOBILE-FIRST STRATEGY
      // 'responsive/@mobile-first/breakpoints.yml',
      // 'responsive/@mobile-first/font-size.yml',
      // 'responsive/@mobile-first/line-height.yml',
      // @DESKTOP-FIRST STRATEGY
      'responsive/@desktop-first/breakpoints.yml',
      'responsive/@desktop-first/font-size.yml',
      'responsive/@desktop-first/line-height.yml',
      // SET PROJECT'S FONTS [@font-face]
      'typography/font-family.yml',
    ],
  }
];

export default postcssMap;
