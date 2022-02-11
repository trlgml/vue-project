<template>
  <div class="ProvideInject">
    <ProvideInjectChildren @notice="notice" :bcd="bcd"></ProvideInjectChildren>
  </div>
</template>

<script>
import ProvideInjectChildren from "@/components/ProvideInjectChildren";
export default {
  name: "ProvideInject",
  data() {
    return {
      abc: "abc",
      bcd: "bcd",
    };
  },
  components: {
    ProvideInjectChildren,
  },
  provide() {
    return {
      reload: this.reload,
      abc: this.abc,
    };
  },
  methods: {
    reload() {
      console.log("reload");
    },
    notice() {
      console.log("notice");
    },
  },
};
</script>

<style scoped>
</style>