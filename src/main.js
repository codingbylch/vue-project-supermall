import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index.js';

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue() // Vue实例可以作为一个事件总线

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
