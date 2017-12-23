## 安装

### npm 安装
推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm install ballon -save
```

### 引入 Ballon

你可以引入整个 Ballon，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Ballon。

#### 完整引入

在 main.js 中写入以下内容：
```javascript
import Vue from 'vue'
import Ballon from 'ballon'
import 'ballon/dist/styles/index.css'
import App from './App.vue'

Vue.use(Ballon)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
以上代码便完成了 Ballon 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：
```json
{
  "presets": [
    ["env", {
      "modules": false
    }],
    "stage-2"
  ],
  "plugins": ["transform-runtime", ["component", [
    {
      "libraryName": "ballon",
      "libDir": "dist",
      "styleLibrary": {
        "name": "styles",
        "base": false
      }
    }
  ]]]
}

```

接下来，如果你只希望引入部分组件，比如 Badge，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue'
import { Badge } from 'ballon'
import App from './App.vue'

Vue.component(Badge.name, Badge)
/* 或写为
 * Vue.use(Badge)
 */

new Vue({
  el: '#app',
  render: h => h(App)
})
```
