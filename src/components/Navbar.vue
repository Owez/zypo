<template>
  <div class="navbar">
    <div class="nav-top">
      <div class="nav-left">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
      </div>
      <div class="nav-center"></div>
      <div class="nav-right"></div>
    </div>
    <div class="nav-bottom">
      <div class="nav-left">
        <router-link to="/dash" class="nav-link">Dashboard</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  background-color: #454b4e;
  display: flex;
  justify-content: space-between;
}

.nav-left {
  display: flex;
  align-items: flex-start;
}

.nav-link {
  padding: 1rem;
}

.nav-right {
  display: flex;
  align-items: flex-end;
}
</style>