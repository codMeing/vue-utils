# vue-utils

A simple utils library for Vue.js

## Install

With default options just set an array.

```
Vue.use(require('@conandsherry/vue-utils'))
```

## Utils

### `$compressImg`

```
this.$compressImg(file,options)
options = {
    outputType: 'base64', // 导出格式，默认以base64格式导出，可取值：'base64' || 'blob'
    quality: 0.7, // 压缩质量，取值范围(0, 1]
    type: 'png', // 图片导出格式，默认'png'
    maxDefaultSize: 10, // 压缩后的最大值限制，默认10M，压缩后还超过该值，则报错
    maxWidth: 1200, // 压缩后图片最大宽度
    maxHeight: 900, // 压缩后图片最大高度
    autoOrientation: true, // 是否自动纠正图片旋转角度
}

```

### `$deepClone`

```
this.$deepClone(Object)
```

### `$debounce`

```
this.$debounce(Function,Number)
```

### `$fillContainerWhenImgLoad`

图片加载成功自动撑满父级容器

```
<img @load="$fillContainerWhenImgLoad" alt="" />
```
