'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const baseWebpackConfig = require('./webpack.base.conf')
const Components = require('../components.json')
const externals = utils.generationExternals()

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
