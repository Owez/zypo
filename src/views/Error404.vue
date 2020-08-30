<template>
  <div class="error-404">
    <FullscreenSplash
      title="Page not found"
      subtitle="Looks like you've wondered into a 404 page, whoops!"
    />
    <div class="fullscreen-prompt">
      <div class="fullscreen-prompt-inner">
        <p>
          Maybe you should go back
          <router-link to="/" class="blue-link">home</router-link>?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import FullscreenSplash from "@/components/FullscreenSplash.vue";

export default {
  name: "Error404",
  components: {
    FullscreenSplash,
  },
};
</script>