<template>
  <div id="app">
    <el-button @click="goBack">goBack</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<style>
</style>
