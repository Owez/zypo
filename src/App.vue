<template>
  <div class="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  margin: 0;
  background-color: #35393C;
  font-family: 'Roboto', sans-serif;
  color: white;
}

a {
  color: white;
  text-decoration: none;
}

.container {
  margin-left: 5vw;
  margin-right: 5vw;
}
</style>
