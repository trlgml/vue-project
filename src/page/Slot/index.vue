<template>
  <div class="slot">
    <div>
      <SoltTest>
        <template #header>
          <h1>Here might be a page title</h1>
        </template>

        <p>A paragraph for the main content.</p>

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
  name: "Slot",
  computed: {},
  components: {
    SoltTest,
  },
  methods: {},
};
</script>

<style scoped>
</style>
