const path = require('path');

module.exports = {
  resolve: {
    alias: {
      api: path.resolve(__dirname, 'src', 'api'),
      assets: path.resolve(__dirname, 'src', 'assets'),
      containers: path.resolve(__dirname, 'src', 'containers'),
      user: path.resolve(__dirname, 'src', 'user'),
      components: path.resolve(__dirname, 'src', 'components'),
      mocks: path.resolve(__dirname, 'src', 'mocks'),
      models: path.resolve(__dirname, 'src', 'models'),
      router: path.resolve(__dirname, 'src', 'router'),
      services: path.resolve(__dirname, 'src', 'services'),
      store: path.resolve(__dirname, 'src', 'store'),
      style: path.resolve(__dirname, 'src', 'style'),
    },
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['', '.jsx', '.js', '.json', '.jpg', '.png'],
  },
  module: {
    loaders: [
      {
        test: /\.(png|svg|woff|woff2|ttf|eot|json)/,
        loader: 'file-loader',
      },
    ],
  },
};
