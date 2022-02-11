import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const files = require.context('@/page', true, /\.vue$/)
let pages = {};
files.keys().forEach(key => {
  pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default;
})
let generator = [];
Object.keys(pages).forEach(item => {
  generator.push({
    path: `/${pages[item].name.replace(/-/g, '/')}`,
    name: pages[item].name,
    component: pages[item]
  })
});

const routes = [
  {
    path: '/',
    redirect: '/Home',
  },
  ...generator,
  // {
  //   path: '*',
  //   component: () => import('@/Page/404.vue'),
  // }
]

const router = new Router({
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  },
})

export default router


