<template>
  <div class="doc-overview">
    <div v-bind:key="doc.id" v-for="doc in docs">
      <DocCard v-bind:doc="doc" />
    </div>
  </div>
</template>

<script>
import DocCard from "@/components/DocCard.vue";

export default {
  name: "HelloWorld",
  components: {
    DocCard,
  },
  props: ["docs"],
};
</script>

<style scoped>
.doc-overview {
  display: flex;
}
</style>
