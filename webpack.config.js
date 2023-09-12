const path = require('path');

module.exports = {
  entry: './src/index.js',  // Replace with your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')  // Replace with your output directory
  }
};
