<template>
  <div class="Mixin">
    <div>{{ JSON.stringify($data) }}</div>
  </div>
</template>


<script>
import mixin from "@/minxin/test";
export default {
  name: "Mixin",
  mixins: [mixin],
  data: function () {
    return {
      message: "goodbye",
      bar: "def",
    };
  },
  created: function () {},
};
</script>

<style scoped>
</style>