<template>
  <div class="home">
    <router-link :to="`/${item.path}`" :key="item.path" v-for="item in router">
      <el-button type="primary">Go to {{ item.path }}</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      router: [
        { path: "About" },
        { path: "Store" },
        { path: "Slot" },
        { path: "Proxy" },
        { path: "Mock" },
      ],
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
