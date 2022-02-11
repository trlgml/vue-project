<template>
  <div class="home">
    <router-link :to="`/${item.path}`" :key="item.path" v-for="item in router">
      <el-button type="primary">Go to {{ item.path }}</el-button>
    </router-link>
  </div>
</template>

<script>
const files = require.context("@/page", true, /\.vue$/);
let pages = {};
files.keys().forEach((key) => {
  pages[key.replace(/(\.\/|\.vue)/g, "")] = files(key).default;
});
let generator = [];
Object.keys(pages).forEach((item) => {
  generator.push({
    path: (pages[item] && pages[item].name) || "Home",
    key: item,
  });
});

export default {
  name: "Home",
  data() {
    return {
      router: generator,
    };
  },
};
</script>

<style scoped>
.router-link-active {
  text-decoration: none;
}
a {
  text-decoration: none;
}
</style>
