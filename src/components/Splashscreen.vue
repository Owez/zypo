<template>
  <div class="splashscreen">
    <div class="splashscreen-inner">
      <h1 class="title">{{ title }}</h1>
      <h4 class="subtitle">{{ subtitle }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Splashscreen",
  props: ["title", "subtitle"]
};
</script>

<style>
.splashscreen {
  background-color: #454b4e;
  margin: 0;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splashscreen-inner {
  text-align: center;
}

.title {
  font-size: 3.5rem;
  margin: 0;
}

.subtitle {
  font-size: 1.25rem;
  color: #b8b8b8;
}
</style>