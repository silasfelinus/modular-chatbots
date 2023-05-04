<template>
  <div class="max-w-full w-[900px] m-auto">
    <NuxtErrorBoundary>
      <AgentManager @select-agent="currentAgent = $event" />
      <SocialMediaPostGenerator />
      <ChatBot :current-agent="currentAgent" />
      <template #error="{ error }">
        <div>
          <p class="text-4xl pt-10">⚠️ A fatal error has occurred:</p>
          <p>{{ error }}</p>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentAgent = ref(null);
</script>