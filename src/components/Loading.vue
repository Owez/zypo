<!--NOTE: Unused, rarely need a fullscreen loading for vue..-->

<template>
  <div class="loading">
    <div class="loading-inner">
      <h1 class="title">Loading {{ msg }}</h1>
      <h4 class="subtitle">This should only take a sec..</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: ["msg"],
};
</script>

<style scoped>
.loading {
  background-color: #454b4e;
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-inner {
  text-align: center;
}
</style>