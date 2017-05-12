// require dependencies
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  // the base directory (abs path) for resolving the entry option
  context: __dirname,
  entry: [
      'babel-polyfill',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './bruin_meet_project/src/index.js',
  ],
  output: {
    // compiled bundle to be stored here
    path: path.resolve('./assets/bundles/'),
    // naming convention webpack uses for our files
    filename: '[name]-[hash].js',
    publicPath: 'http://localhost:3000/assets/bundles/',
  },

  plugins: [
    // tells webpack where to store data about our bundles
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
    // make jquery available in every module
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],

  module: {
    loaders: [
      // tells webpack to use following loaders on all .js and .jsx files
      {test: /\.jsx?$/,
        //make babel not able to transpile all files in node_modules -> too lonng time
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react'],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        query: { mimetype: "image/png" }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]'
      }
    ]
  },
  resolve: {
    // tell webpack where to look for modules
    modules: ['node_modules'],
    // extensions that should be used to resolve modules
    extensions: ['.js', '.jsx']
  }
}
