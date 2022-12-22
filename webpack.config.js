const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output:{
    path: path.resolve(__dirname,'dist/'),
    publicPath:'/',
    filename:'bundle.js',
  },
  mode:'production',
  module:{
    rules:[
      {
        test:/\.less$/i,
        use:[
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test:/\.(c|le)ss$/,
        use:[
          {
            loader:MiniCssExtractPlugin.loader
          },
          {
            loader:"css-loader",
          },
          {
            loader:"less-loader",
          },
        ]
      }
    ]
  },
  optimization:{
    minimizer:[
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:"bundle.css"
    }),  
    new HtmlWebpackPlugin({
			template: './src/html/index.html',
			minify: true,
      hash:true
		}),  
  ],
  };
