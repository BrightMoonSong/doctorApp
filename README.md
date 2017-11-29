# axios-vue-first

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1.http请求用 axios

2.弹窗用kiko-->见-https://github.com/rascalHao/kiko
https://segmentfault.com/a/1190000010559711
预览--http://haogewudi.me/kiko/index.html#/

3.拦截器--api/interceptors.js

4.路由--router/index.js

5.页面写在page文件夹下

6.组件--common/--fonts字体图标文件--scss公用scss文件

7.vuex 状态管理（没有写在这里）

8.echarts --common/--echarts--用法在yongfa.txt

9.百度地图--@page/map/--用法：在main.js
```
import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'L0EcRkZ9YBaGTOH5X1mpQqC7SVvDhmKL'
});
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=L0EcRkZ9YBaGTOH5X1mpQqC7SVvDhmKL"></script>
```
