const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
      },
      module: {
        rules: [
           {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: "babel-loader"
          },
          {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader?modules&importLoaders=1&camelCase&localIdentName=[name]__[local]___[hash:base64:5]", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
        ]
      },
      plugins: [new HtmlWebpackPlugin({
        template: './index.html'
      })]
};

// loaders: [
//     {
//       test: /\.scss$/,
//       include: [
//         path.join(__dirname, 'node_modules/wix-style-react'),
//         path.join(__dirname, 'node_modules/bootstrap-sass') // only if you use Grid component
//       ],
//       loaders: [
//         'style-loader',
//         'css-loader?modules&importLoaders=1&camelCase&localIdentName=[name]__[local]___[hash:base64:5]',
//         'sass-loader'
//       ]
//     }
//   ]