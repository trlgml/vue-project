<template>
  <div class="mock">
    <el-button @click="goBack">goBack</el-button>
    <div>{{ JSON.stringify(data) }}</div>
  </div>
</template>

<script>
export default {
  name: "Mock",
  data() {
    return {
      data: null,
    };
  },
  created() {
    this.$axios.get("/parameter/query").then((result) => {
      this.data = result;
    });
  },
  computed: {},
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>
