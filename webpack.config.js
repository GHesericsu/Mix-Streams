const path = require('path');
// const nodeExternals = require('webpack-node-externals');

const CLIENT_DIR = path.join(__dirname, 'client/src');
const PUBLIC_DIR = path.join(__dirname, 'client/dist');

module.exports = {
  entry: `${CLIENT_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR,
  },
  // mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: CLIENT_DIR,
        exclude: /node.modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  // target: 'node', // in order to ignore built-in modules like path, fs, etc.
  // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
};
