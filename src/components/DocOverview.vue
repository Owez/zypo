<template>
  <div class="doc-overview">
    <div v-bind:key="doc.id" v-for="doc in all_docs">
      <DocCard v-bind:doc="doc" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DocCard from "@/components/DocCard.vue";

export default {
  name: "HelloWorld",
  components: {
    DocCard,
  },
  computed: mapGetters(["all_docs"]),
};
</script>

<style scoped>
.doc-overview {
  display: flex;
}
</style>
