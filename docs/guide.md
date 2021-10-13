# 开发指南

## 安装

&emsp;&emsp;推荐使用`npm`的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```bash
npm install dw-form-making --save

# or

cnpm install dw-form-making --save
```

## 快速上手

### 引入 Element

&emsp;&emsp;项目中使用的是`element-ui`的组件库，在使用的时候需要引入`Element`包，具体引入方法请参考 [Element](https://element.eleme.cn/#/zh-CN/component/quickstart) 文档。

```javascript
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
```

### 引入 DwFormMaking

#### 完整引入

```javascript
import DwFormMaking from 'dw-form-making'
import 'dw-form-making/dist/DwFormMaking.css'

Vue.use(DwFormMaking)
```

&emsp;以上代码便完成了`DwFormMaking`的引入。需要注意的是，样式文件需要单独引入。

#### 部分引入

```javascript
import {
  GenerateForm,
  MakingForm
} from 'dw-form-making'
import 'dw-form-making/dist/DwFormMaking.css'

Vue.component(GenerateForm.name, GenerateForm)
Vue.component(MakingForm.name, MakingForm)
```

#### 引入 ace.js

&emsp;默认情况下没有引入`ace.js`，如果需要使用`ace.js`，需单独引入。

```html
<script src="https://unpkg.com/dw-form-making/public/ace/ace.js"></script>
```

### 开始使用

#### 表单设计（MakingForm）

```html
<template>
    <making-form />
</template>
```

#### 表单反显（GenerateForm）

```html
<template>
    <generate-form :data="jsonData" :value="editData" ref="generateForm" ... />
</template>
```

#### 富文本编辑器（图片上传）

```javascript
/**
  + model [String] 对应编辑器字段标识
  + blobInfo [Object] 含base64、blob
  + success [Function] 成功回调，参数为图片地址
  + failure [Function] 失败回调, 参数为失败说明
  */
  editorUploadImage({ model, blobInfo, success, failure }) {
    // success('图片src')/failure('失败说明')可异步调用
    // success('http://xxx.xxx.xxx/xxx/image-url.png')
    // failure('上传失败')

    success('data:image/jpeg;base64,' + blobInfo.base64())
  }, 
```
