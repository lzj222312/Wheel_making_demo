# 造轮子 VUE-UI框架

[![Build Status](https://www.travis-ci.org/lzj222312/Wheel_making_demo.svg?branch=master)](https://www.travis-ci.org/lzj222312/Wheel_making_demo)

##  介绍

这是在学习VUE过程中做的一个 UI 框架

##  开始使用

1.  添加 CSS 样式

使用本框架前，请在CSS中开启border-box
```
*, *::before, *::after {box-sizing: border-box}
```
IE 8 及以上浏览器支持此样式

你还需要设置默认颜色等变量（后续会改为 SCSS变量）
```
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```
IE 15 及以上浏览器支持此样式

2. 安装 lunzi_ui
```
npm i --save lunzi_ui
```

3. 引入 lunzi_ui
```
import { Button, ButtonGrop, Icon } from 'lunzi_ui'
import 'lunzi_ui/dist/index.css'

export default {
    name: 'app',
    components: {
        'g-button': Button,
        'g-icon': Icon
    }
}
```


##  文档

##  提问

##  变更记录

##  联系方式

##  贡献代码

