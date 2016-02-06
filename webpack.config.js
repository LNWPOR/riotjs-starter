var	path	=	require('path'),
	bourbon = 	require('node-bourbon').includePaths
	neat = 		require('node-neat').includePaths;

module.exports = {
	entry: [
			'webpack/hot/dev-server',
			'./client/index.js'
			],
	output: {
		path:__dirname,
		filename:'bundle.js'
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
            }
		]
	}
}