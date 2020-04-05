module.exports = {
  'presets': ['module:metro-react-native-babel-preset'],
  'plugins': [
    'react-native-paper/babel',
    'syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        'extensions': [
          '.ios.js',
          '.android.js',
          '.js',
          '.json',
          'jsx'
        ],
        'alias': {
          'api': './src/api',
          'assets': './src/assets',
          'components': './src/components',
          'containers': './src/containers',
          'models': './src/models',
          'router': './src/router',
          'services': './src/services',
          'src': './src',
          'store': './src/store',
          'style': './src/style',
        },
      },
    ],
  ],
};
