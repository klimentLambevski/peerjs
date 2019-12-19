const webpack = require('webpack');
const {resolve} = require('path')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './lib/peer.ts',
  optimization: {
    minimize: true
  },
  output: {
    libraryTarget: 'commonjs',
    path: resolve('dist'),
    filename: 'peerjs.min.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: { }
        },
        exclude: [/test/],
      },
    ]
  },
    plugins: [
      // new webpack.DefinePlugin({
      //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      // }),
      // new WebpackDeepScopeAnalysisPlugin(),
    ]
};

