# Ballon
[![Build Status](https://travis-ci.org/C-Royale/Ballon.svg?branch=master)](https://travis-ci.org/C-Royale/Ballon)
[![NPM downloads](http://img.shields.io/npm/dm/ballon.svg)](https://npmjs.org/package/ballon)
[![License](https://img.shields.io/npm/l/ballon.svg)](https://npmjs.org/package/ballon)
[![codecov](https://codecov.io/gh/C-Royale/Ballon/branch/master/graph/badge.svg)](https://codecov.io/gh/C-Royale/Ballon)

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
### Features

* **Badge:** Add Badge demo components to testing ([a29017c](https://github.com/C-Royale/Ballon/commit/a29017c))
* **Demand:** Added the function to load on demand ([e9a7e81](https://github.com/C-Royale/Ballon/commit/e9a7e81))
* **Locale:** Add language localization ([9b0d7dc](https://github.com/C-Royale/Ballon/commit/9b0d7dc))
* **Style:** Add theme-default file about less style ([b0314f6](https://github.com/C-Royale/Ballon/commit/b0314f6))


### Performance Improvements

* **Docs Route:** Optimize the routing structure of the document and the compatible language switch ([84964bc](https://github.com/C-Royale/Ballon/commit/84964bc))
* **Markdown:** Optimize the demo-block component and Add part of the document ([46fbf19](https://github.com/C-Royale/Ballon/commit/46fbf19))
* **SideNav:** Optimize the sidenav and route config file ([8a2f6ae](https://github.com/C-Royale/Ballon/commit/8a2f6ae))

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
