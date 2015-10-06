var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");

var config = {
    plugins : [new webpack.HotModuleReplacementPlugin()],
    entry : ['webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    'webpack/hot/dev-server', // "only" prevents reload on syntax errors
    './index.js' // Your appʼs entry point
    ],
    output : {
        path : path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath : '/assets/',
        library : 'op',
        libraryTarget : 'this'
    }
};

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  // webpack-dev-server options

  contentBase: "./public",
  hot: true,
  // Enable special support for Hot Module Replacement
  // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
  // Use "webpack/hot/dev-server" as additional module in your entry point
  // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: false,

  // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
  // Use "*" to proxy all paths to the specified server.
  // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
  // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
  /*proxy: {
    "*": "http://localhost:9090"
  }*/

  // webpack-dev-middleware options
  quiet: false,
  noInfo: false,
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  publicPath: "/assets/",
  stats: { colors: true },
});

module.exports = {
    server : server
}
