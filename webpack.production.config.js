var	path				=	require('path'),
	bourbon 			= 	require('node-bourbon').includePaths
	neat 				= 	require('node-neat').includePaths,
	webpack 			= 	require('webpack'),
    HtmlWebpackPlugin 	= 	require('html-webpack-plugin');

module.exports = {
	entry: './client/index.js'
	,
	output: {
		path: path.resolve(__dirname, './build'),
        filename: 'bundle.min.js'
	},
    devtool: 'source-map',
    resolve: {
    	modulesDirectories: ['node_modules'],
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
	module:{
		loaders:[
			{
				tests: /\.js$/,
				loader:'babel-loader',
				query:{
					presets:['es2015']
				}
			},
			{
				test:/\.tag$/,
				loader:'tag-loader'
			},
			{
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {   test: /\.ts$/, 
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/, loader: "style!css!autoprefixer-loader?browsers=last 3 versions!sass?includePaths[]=" + bourbon + 
                '&includePaths[]=' + neat[0] + '&includePaths[]=' + neat[1]
            },
            {
                test: /\.html$/,
                loader: 'file?name=templates/[name].html'
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file?name=assets/[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file?name=img/[name].[ext]!img?minimize&optimizationLevel=5&progressive=true'
            }
		]
	},
    plugins: [
        new HtmlWebpackPlugin({ 
            template: 'client/index.html',
            inject: 'body'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
    		'process.env.NODE_ENV': '"production"'
		})
    ]
}