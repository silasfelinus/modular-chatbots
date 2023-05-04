<template>
  <div class="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex flex-col items-start justify-center pl-10">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
      <select id="ai-personality" v-model="selectedBotIndex" class="w-full border border-gray-300 px-3 py-2 rounded shadow-sm focus:outline-none focus:border-blue-300">
        <option v-for="(bot, index) in botPresets" :key="bot.id" :value="index">{{ bot.title }}</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, provide } from "vue";
import { BotPreset } from "~~/types";
import { useBots } from "../composables/useBots";

const { botPresets } = useBots();

const selectedBotIndex = ref(0);
const activeBot = computed(() => botPresets.value[selectedBotIndex.value]);
provide('activeBot', activeBot);
</script>
