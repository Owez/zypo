<template>
  <div class="login">
    <Splashscreen title="Sign in" subtitle="Sign into your Zypo account" />
    <div class="fullscreen-prompt">
      <div class="fullscreen-prompt-inner">
        <form action>
          <p class="fullscreen-prompt-text">
            Username or email
            <span class="required-text">*</span>
          </p>
          <input type="text" class="fullscreen-prompt-input" />
          <p class="fullscreen-prompt-text">
            Password
            <span class="required-text">*</span>
          </p>
          <input type="password" class="fullscreen-prompt-input" />
          <input class="btn fullscreen-prompt-btn" type="button" value="Sign in" />
        </form>
      </div>
    </div>
    <div class="fullscreen-prompt">
      <div class="fullscreen-prompt-inner">
        <p>
          Don't have an account?
          <router-link to="/join" class="blue-link">Join Zypo.app</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Splashscreen from "@/components/Splashscreen.vue";

export default {
  name: "Login",
  components: {
    Splashscreen,
  },
};
</script>
