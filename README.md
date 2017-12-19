# Ballon

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
## 项目结构

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

## Library RoadMap

* [x] 组件支持按需加载
* [x] 添加样式目录结构
* [x] 支持国际化
* [ ] 添加自动化构建 Travis CI
* [x] 绑定 GitHub Page
* [ ] 开发指南添加到 WIKI
* [ ] 添加脚本自动化

## FAQ
TO DO...
