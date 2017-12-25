# Ballon
[![Build Status](https://travis-ci.org/C-Royale/Ballon.svg?branch=master)](https://travis-ci.org/C-Royale/Ballon)
[![NPM downloads](http://img.shields.io/npm/dm/ballon.svg)](https://npmjs.org/package/ballon)
[![License](https://img.shields.io/npm/l/ballon.svg)](https://npmjs.org/package/ballon)
[![Coverage Status](https://coveralls.io/repos/github/C-Royale/Ballon/badge.svg?branch=master)](https://coveralls.io/github/C-Royale/Ballon?branch=master)

> A Vue.js UI Library

## Install
```shell
npm install ballon --save
```

## Quick Start
``` javascript
import Vue from 'vue'
import Ballon from 'ballon'
import 'ballon/dist/styles/ballon.css'

Vue.use(Ballon)

// or according to the need to load
import {
  Badge,
  // ...
} from 'ballon'

Vue.component(Badge)
```
## Project Structure

```text
├── README.md
├── build --------------------- webpack 构建目录
├── components.json
├── config
├── dist  --------------------- 组件打包目录
├── examples ------------------ 文档目录
├── index.html
├── package-lock.json
├── package.json
├── packages  ----------------- 组件目录
├── src ----------------------- 项目源代码
├── static
└── test

```

## Changelog
TO DO...

## RoadMap

* [x] 组件支持按需加载
* [x] 添加样式目录结构
* [x] 支持国际化
* [x] 添加自动化构建 Travis CI
* [x] 绑定 GitHub Page
* [ ] 开发指南添加到 WIKI
* [x] 单元测试
* [ ] 添加脚本自动化

## FAQ
* [项目开发指南](https://github.com/C-Royale/Ballon/wiki)

## License
[MIT](http://opensource.org/licenses/MIT)
