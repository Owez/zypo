<template>
  <div class="join">
    <Splashscreen title="Create your account" subtitle="Join Zypo" />
    <div class="fullscreen-prompt">
      <div class="fullscreen-prompt-inner">
        <form action>
          <p class="fullscreen-prompt-text">
            Username
            <span class="required-text">*</span>
          </p>
          <input type="text" class="fullscreen-prompt-input" />
          <p class="fullscreen-prompt-text">
            Email
            <span class="required-text">*</span>
          </p>
          <input type="text" class="fullscreen-prompt-input" />
          <p class="fullscreen-prompt-text">
            Password
            <span class="required-text">*</span>
          </p>
          <input type="password" class="fullscreen-prompt-input" />
          <input class="btn fullscreen-prompt-btn" type="button" value="Join Zypo" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Splashscreen from "@/components/Splashscreen.vue";

export default {
  name: "Join",
  components: {
    Splashscreen,
  },
};
</script>