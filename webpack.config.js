var webpack = require('webpack');
module.exports = {
  entry: {
  app: ['webpack/hot/dev-server', './entry.js'],
},
output: {
  path: __dirname + "/public/built",
  filename: 'bundle.js',
  publicPath: 'http://localhost:8080/built/'
},
devServer: {
  contentBase: './public',
  publicPath: 'http://localhost:8080/built/'
},
module: {
 loaders: [
   { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015', 'react']}},
   { test: /\.css$/, loader: 'style-loader!css-loader' },
   { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
 ]
},
 plugins: [
   new webpack.HotModuleReplacementPlugin()
 ]
}

new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))