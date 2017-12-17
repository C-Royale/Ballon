'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const Components = require('../components.json')
var nodeExternals = require('webpack-node-externals');
const baseWebpackConfig = require('./webpack.base.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

let env = process.env.NODE_ENV === 'testing' ? require('../config/test.env') : config.dist.env

let rules = baseWebpackConfig.module.rules
// find vue-loader and disable css source map & extract
for (let i = 0; i < rules.length; i++) {
  if (rules[i].loader === 'vue-loader') {
    rules[i].options = {
      loaders: utils.cssLoaders({
        sourceMap: false,
        extract: false
      })
    }
    break
  }
}

// externals
let externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`ballon/packages/${key}`] = `ballon/dist/${key}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

let webpackConfig = {
  entry: Components,
  externals: externals,
  output: {
    path: config.dist.assetsRoot,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  resolve: baseWebpackConfig.resolve,
  module: {
    rules: rules
  }
}

module.exports = webpackConfig
