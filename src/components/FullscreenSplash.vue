<template>
  <div class="fullscreen-splash">
    <div>
      <h1 class="title">{{ title }}</h1>
      <h4 class="subtitle">{{ subtitle }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullscreenSplash",
  props: ["title", "subtitle"],
};
</script>

<style scoped>
.fullscreen-splash {
  background-color: #454b4e;
  height: 65vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
