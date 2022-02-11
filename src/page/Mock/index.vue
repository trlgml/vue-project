<template>
  <div class="mock">
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
};
</script>

<style scoped>
</style>
