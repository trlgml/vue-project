<template>
  <div class="slot">
    <el-button @click="goBack">goBack</el-button>
    <div>
      <SoltTest>
        <template #header>
          <h1>Here might be a page title</h1>
        </template>

        <p>A paragraph for the main content.</p>
        <p>And another one.</p>

        <template #footer>
          <p>Here's some contact info</p>
        </template>
      </SoltTest>
    </div>
  </div>
</template>

<script>
import SoltTest from "@/components/SoltTest.vue";
export default {
  name: "SlotTest",
  computed: {},
  components: {
    SoltTest,
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>
