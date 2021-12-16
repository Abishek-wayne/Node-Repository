const path = require('path');

module.exports = {
    entry : './public/src/App.js',
    output : {
      path : path.join(__dirname,'public'),
      filename : 'bundle.js'
    },

    module : {
      rules : [
        {
        loaders : 'babel-loader',
        test : /.\js$/,
        exclude : /node_modules/
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer:{
      contentBase : path.join(__dirname,'public')
    }
}