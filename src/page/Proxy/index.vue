<template>
  <div class="proxy">
    <el-button @click="goBack">goBack</el-button>
    <div>
      {{ JSON.stringify(list) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Proxy",
  data() {
    return {
      list: [],
    };
  },
  computed: {},
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
  created() {
    this.$axios.get("/api/search/users?q=python").then((result) => {
      this.list = result.items;
    });
  },
};
</script>

<style scoped>
</style>
