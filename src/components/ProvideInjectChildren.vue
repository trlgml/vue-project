<template>
  <div class="ProvideInjectChildren">
    <div>父元素inject数据:{{ abc }}</div>
    <div>父元素props数据:{{ bcd }}</div>
    <el-button @click="reload">触发父亲inject</el-button>
    <el-button @click="notice">通知父亲emit</el-button>
  </div>
</template>

<script>
export default {
  name: "ProvideInjectChildren",
  inject: ["reload", "abc"],
  props: ["bcd"],
  methods: {
    notice() {
      this.$emit("notice");
    },
  },
};
</script>

<style scoped>
</style>
