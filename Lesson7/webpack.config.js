const path = require('path');

module.exports = {
  entry: './code/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
		{
	test: /\.css/,
	use: ['style-loader','css-loader']
	}
    ]
  },
	devServer:{
		historyApiFallback: true,
		contentBase: path.resolve(__dirname,'dist')
	}
}