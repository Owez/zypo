<template>
  <div class="editor">
    <Splashscreen title="Editor coming soon.." subtitle="We're working on it, we promise!" />
    <p>{{ cur_doc.tagline }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Splashscreen from "@/components/Splashscreen.vue";

export default {
  name: "DocEditor",
  components: {
    Splashscreen,
  },
  computed: mapGetters(["cur_doc"]),
  created() {
    var doc_id = this.$route.query.id;

    if (doc_id == undefined) {
      this.$router.push("404");
    }
  },
};
</script>
