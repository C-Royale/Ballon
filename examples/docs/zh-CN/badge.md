## Badge 标记

出现在按钮、图标旁的数字或状态标记。

### 基础用法
展示新消息数量。

::: demo 这里填写描述
```html
<cr-badge>
  测试测试
</cr-badge>
```
:::

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value          | 显示值      | string, number          |          —             |    —     |
| max          |  最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型    | number  |         —              |     —    |
| is-dot       | 小圆点    | boolean  |  —  |  false |
| hidden | 隐藏 badge | boolean | — | false |
