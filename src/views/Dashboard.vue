<template>
  <div class="dashboard">
    <div class="container">
      <h1>Your documents</h1>
      <DocOverview v-bind:docs="docs" />
    </div>
  </div>
</template>

<script>
import DocOverview from "@/components/DocOverview.vue";

export default {
  name: "Dashboard",
  components: {
    DocOverview,
  },
};
</script>