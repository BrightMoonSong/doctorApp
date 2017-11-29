import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/page/HelloWorld';
import index from '@/page/home/index';
// import notficTest from '@/page/notficTest';
// import mapTest from '@/page/map/mapTest';
// import infoMap from '@/page/map/infoMap';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: HelloWorld
  }, {
    path: '/index',
    name: 'index',
    component: index
  }]
});
