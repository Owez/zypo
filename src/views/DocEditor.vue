<template>
  <div class="editor">
    <Splashscreen title="Editor coming soon.." subtitle="We're working on it, we promise!" />
  </div>
</template>

<script>
import Splashscreen from "@/components/Splashscreen.vue";

export default {
  name: "DocEditor",
  components: {
    Splashscreen,
  },
  data() {
    // temporary, should fetch id given in query
    return {
      doc: {
        id: 1,
        title: "This is my first document",
        tagline: "First few characters or custom short description",
        content: "The long content part of this thing!",
      },
    };
  },
};
</script>
