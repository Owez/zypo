<template>
  <router-link :to="{ path: 'doc', query: { 'id': doc.id } }">
    <div class="doc-card">
      <h2 class="card-text">{{ doc.title }}</h2>
      <hr />
      <p class="card-text">{{ doc.tagline }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "DocCard",
  props: ["doc"],
};
</script>

<style scoped>
.doc-card {
  padding: 1rem;
  margin: 1rem;
  background-color: #454b4e;
  width: 20rem;
  height: 15rem;
  border-radius: 1rem;
  text-decoration: none;
}

.card-text {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}

hr {
  border: 3px solid #5c6468;
  border-radius: 0.25rem;
  margin: 0;
}
</style>