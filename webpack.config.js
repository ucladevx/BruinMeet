// require dependencies
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    // the base directory (abs path) for resolving the entry option
    context: __dirname,
    entry: './assets/src/index',
    output: {
	// compiled bundle to be stored here
	path: path.resolve('./assets/bundles/'),
	// naming convention webpack uses for our files
	filename: '[name]-[hash].js',
    },

    plugins: [
	// tells webpack where to store data about our bundles
	new BundleTracker({filename: './webpack-stats.json'}),
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
	     loader: 'babel-loader',
	     query: {
		 // specify use of react code
		 presets: ['react']
       },
     },
     {
    test: /\.css$/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
    ]
  },
  {
    test: /\.png$/,
    loader: "url-loader",
    query: { mimetype: "image/png" }
  }
	]
    },

    resolve: {
	// tell webpack where to look for modules
	modulesDirectories: ['node_modules'],
	// extensions that should be used to resolve modules
	extensions: ['', '.js', '.jsx']
    }
}
