import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index.js';
import toast from './components/common/toast/index';
import FastClick from 'fastclick';
import VueLazyLoad from 'vue-lazyload';

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue() // Vue实例可以作为一个事件总线

//安装toast插件
Vue.use(toast);

//使用懒加载插件
Vue.use(VueLazyLoad, {
  error: require('assets/img/common/error.jpg'),
  loading: require('assets/img/common/loading.gif')
})

// 解决300ms延迟
FastClick.attach(document.body);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')