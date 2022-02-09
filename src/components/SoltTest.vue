<template>
  <div class="logo">
    <img src="../assets/logo.png" />
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style scoped>
</style>
