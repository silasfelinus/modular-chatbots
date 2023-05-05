<template>
  <div class="max-w-full w-[900px] m-auto">
    <NuxtErrorBoundary>
      <AgentManager />
      <SocialMediaPostGenerator />
      <ChatBot />
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
import { provide } from 'vue';
import { useAppStore } from './store';

const store = useAppStore();
provide('store', store);
</script>
