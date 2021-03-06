import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/routers'
import axios from "@/services";
require('./mock');

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

const files = require.context('@/filters', true, /\.js$/)
files.keys().forEach(key => {
  Vue.filter(key.replace(/(\.\/|\.js)/g, ''), files(key).default)
})

Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
