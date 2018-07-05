# vue + webpack 多页面应用模板

> 用于构建基于vue的多页面应用

## 使用方法
将项目clone到本地。然后执行下面的命令

``` bash
# 首先安装依赖
npm i

# 然后运行项目
npm start

# 发布打包
npm run build
```

## 已有模块
- vue
- vue-router
- axios

## 路径配置说明
- `src/modules`下的`css文件夹`放公用css(比如common.css、global.css)，`js文件夹`放公用js
- `路径@`表示`src文件夹`,`路径css`表示`src/modules/css`，`路径js`表示`src/modules/js`,`路径cp`表示`src/components`
- `src/pages/`下的 各个文件夹 里的js文件是入口文件，通过`import`引入css和js
- `src/modules/js/api.js`用于存放接口地址

```javascript
'@': resolve('src'),
'css': '@/modules/css',
'js': '@/modules/js',
'cp': '@/components',
```