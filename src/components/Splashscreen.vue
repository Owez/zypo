<template>
  <div class="splashscreen">
    <div class="splashscreen-inner">
      <h1 class="title">Zypo</h1>
      <h4 class="subtitle">The word processor for a new generation.</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Splashscreen",
};
</script>

<style>
.splashscreen {
  background-color: #454b4e;
  margin: 0;
  height: 12rem;    
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