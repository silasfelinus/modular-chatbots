<template>
    <div class="bot-manager">
      <h2>Bots</h2>
      <div class="bot-buttons">
        <bot-button
          v-for="bot in botPresets"
          :key="bot.id"
          :bot-id="bot.id"
          :is-active="bot.isActive"
          @click="handleBotButtonClick(bot.id)"
        />
      </div>
    </div>
  </template>
  
  <script>
  import BotButton from './BotButton.vue';
  import { useBots } from '../composables/useBots';
  
  export default {
    components: {
      BotButton,
    },
    setup() {
      const { botPresets } = useBots();
  
      function handleBotButtonClick(id) {
        botPresets.value.forEach(botPreset => {
          botPreset.isActive = (botPreset.id === id);
        });
      }
  
      return {
        botPresets,
        handleBotButtonClick,
      }
    }
  }
  </script>
  
  <style>
  .bot-manager {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .bot-buttons {
    display: flex;
    gap: 20px;
  }
  </style>
  