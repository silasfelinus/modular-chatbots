<template>
  <div class="max-w-full w-[900px] m-auto">
    <NuxtErrorBoundary>
      <ChatWidget />
      <BotManager />
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
import { BotPreset } from "@/types";
import { ref } from "vue";
import ChatWidget from "@/components/ChatWidget.vue";
import BotManager from "@/components/BotManager.vue";


</script>

<style>
/* Your styles go here */
</style>
