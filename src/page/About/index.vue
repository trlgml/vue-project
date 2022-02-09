<template>
  <div class="About">
    <el-button @click="goBack">goBack</el-button>
    <div>
      <img src="../../assets/logo.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  computed: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>
