<template>
  <div class="Filters">
    <div>{{ phone | privatePhone }}</div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  components: {},
  data() {
    return {
      phone: "17701089944",
    };
  },
  computed: {},
  props: [],
  watch: {},
  created() {},
  methods: {},
};
</script>

<style scoped>
</style>