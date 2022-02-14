<template>
  <div class="SoltTest">
    <img src="../assets/logo.png" />
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "SoltTest",
};
</script>

<style scoped>
</style>
