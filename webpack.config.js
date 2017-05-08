const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, "public"),
		filename: 'bundle.js',
	},
    resolve: {
        alias: {
            Components: path.resolve(__dirname, "src/components"),
            Config: path.resolve(__dirname, "src/config"),
            Helpers: path.resolve(__dirname, "src/helpers"),
        },
    },
	module: {
		loaders: [{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {}
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            minimize: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {}
                    }
                ],
            }
		]
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 8080
    }
}