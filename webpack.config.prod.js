// require dependencies
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  // the base directory (abs path) for resolving the entry option
  context: __dirname,
  entry: [
      'babel-polyfill',
      './bruin_meet_project/src/index.js',
  ],
  output: {
    // compiled bundle to be stored here
    path: path.resolve('./assets/dist'),
    // naming convention webpack uses for our files
    filename: '[name]-[hash].js',
    publicPath: '/assets/bundles/',
  },

  plugins: [
    // tells webpack where to store data about our bundles
    new BundleTracker({filename: './webpack-stats-prod.json'}),
    // removes a lot of debugging code in React
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }}),

    // keeps hashes consistent between compilations
    new webpack.optimize.OccurrenceOrderPlugin(),

    // minifies your code
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      // tells webpack to use following loaders on all .js and .jsx files
      {test: /\.jsx?$/,
        //make babel not able to transpile all files in node_modules -> too lonng time
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react',
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
        loader: 'file-loader?name=fonts/[name].[ext]'
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
