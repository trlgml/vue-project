<template>
  <div class="Store">
    <el-button @click="addItem({ a: 3 })" :disabled="checkoutStatus"
      >addItme</el-button
    >
    <div>{{ JSON.stringify(demoItems) }}</div>
    <div>{{ JSON.stringify(filter) }}</div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "Store",
  computed: {
    ...mapState({
      demoItems: (state) => state.demo.items,
      checkoutStatus: (state) => state.demo.checkoutStatus,
    }),
    ...mapGetters("demo", {
      filter: "filter",
    }),
  },
  methods: {
    ...mapActions("demo", ["addItem"]),
  },
  created() {
    this.$store.dispatch("demo/getAll");
  },
};
</script>

<style scoped>
</style>
