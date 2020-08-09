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
  data() {
    return {
      docs: [
        {
          id: 1,
          title: "This is my first document",
          tagline: "First few characters or custom short description",
          content: "The long content part of this thing!",
        },
        {
          id: 2,
          title: "Another title",
          tagline: "Fsome other oneon",
          content:
            "The long content ptent part of thistent part of thistent part of thistent part of thisart of this thing!",
        },
      ],
    };
  },
};
</script>