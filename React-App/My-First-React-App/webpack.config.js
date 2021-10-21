const path = require('path');

module.exports = {
    entry : './public/src/sampleApp.js',
    output : {
      path : path.join(__dirname,'public'),
      filename : 'bundle.js'
    }
}