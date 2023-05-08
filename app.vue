<template>
  <div class="container mx-auto px-4">
    <header class="py-4">
      <ThemeChange />
    </header>
    <NuxtErrorBoundary>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AgentManager />
        <SocialMediaPostGenerator />
        <ChatWidget v-if="!isSmallScreen" />
      </div>
      <template #error="{ error }">
        <div class="text-center">
          <p class="text-4xl pt-10">⚠️ A fatal error has occurred:</p>
          <p>{{ error }}</p>
        </div>
      </template>
    </NuxtErrorBoundary>
    <ChatWidget v-if="isSmallScreen" />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { useAppStore } from './store';
import { useBreakpoints } from './composables/useBreakpoints';

const store = useAppStore();
provide('store', store);

// Use the breakpoints composable
const { isSmallScreen } = useBreakpoints();
</script>
