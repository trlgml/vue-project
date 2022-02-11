<template>
  <div class="proxy">
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
  methods: {},
  created() {
    this.$axios.get("/api/search/users?q=python").then((result) => {
      this.list = result.items;
    });
  },
};
</script>

<style scoped>
</style>
