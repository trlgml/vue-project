import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/routers'
import axios from "@/services";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
require('./mock');

const files = require.context('@/filters', true, /\.js$/)
files.keys().forEach(key => {
  Vue.filter(key.replace(/(\.\/|\.js)/g, ''), files(key).default)
})

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
