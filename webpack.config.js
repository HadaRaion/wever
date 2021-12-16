const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
	mode = 'production';
	target = 'browserslist';
}

module.exports = {
	mode: mode,
	entry: {
		main: path.resolve(__dirname, 'src/app.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].bundle.js',
		assetModuleFilename: 'images/[name][ext]',
		clean: true, // delete old file
	},
	devtool: 'source-map',
	target: target,
	devServer: {
		static: path.resolve('./dist'),
		port: 5001,
		hot: true,
	},

	module: {
		rules: [
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { publicPath: '' },
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|ico|jpe?g|gif|svg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
					options: {
						interpolate: true,
					},
				},
			},
		],
	},

	plugins: [
		// new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
			filename: 'index.html',
			minify: false,
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/features.html'),
			filename: 'features.html',
			minify: false,
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/how-it-works.html'),
			filename: 'how-it-works.html',
			minify: false,
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/badges.html'),
			filename: 'badges.html',
			minify: false,
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/reviews.html'),
			filename: 'reviews.html',
			minify: false,
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/join.html'),
			filename: 'join.html',
			minify: false,
		}),
	],
};
