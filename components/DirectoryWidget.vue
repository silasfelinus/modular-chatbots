<template>
    <div v-if="!isMobile || showWidget" class="directory-widget">
      <h2 class="widget-title">Welcome</h2>
      <p class="widget-description">
        Explore our amazing features and support our cause!
      </p>
      <div class="links-container">
        <a href="https://www.againstmalaria.org" class="link-item">
          <img src="against_malaria_logo.svg" alt="Against Malaria" />
          Against Malaria
        </a>
        <a href="/giftshop" class="link-item">
          <img src="giftshop_icon.svg" alt="Gift Shop" />
          Gift Shop
        </a>
        <a href="/cafepurr" class="link-item">
          <img src="cafepurr_icon.svg" alt="Cafe Purr" />
          Cafe Purr Digital Art Gallery
        </a>
        <a href="/wonderforge" class="link-item">
          <img src="wonderforge_icon.svg" alt="Wonderforge" />
          Wonderforge
        </a>
      </div>
      <p class="chatbot-apology">
        Our Chatbot is taking a short break and will be back <em>soon</em>™! Bear with us 🐻.
      </p>
    </div>
    <button v-if="isMobile" @click="toggleWidget" class="toggle-widget-btn">
      {{ showWidget ? 'Hide' : 'Show' }} Directory
    </button>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const isMobile = ref(false);
  const showWidget = ref(false);
  
  const updateMobileState = () => {
    isMobile.value = window.innerWidth < 768;
  };
  
  const toggleWidget = () => {
    showWidget.value = !showWidget.value;
  };
  
  onMounted(() => {
    updateMobileState();
    window.addEventListener('resize', updateMobileState);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateMobileState);
  });
  </script>
  
  <style scoped>
  .directory-widget {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
    height: 300px;
    padding: 20px;
    background: linear-gradient(135deg, #83a4d4, #b6fbff);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: 'Roboto', sans-serif;
  }
  
  .widget-title {
    font-size: 24px;
    color: #ffffff;
    margin-bottom: 10px;
  }
  
  .widget-description {
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .links-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .link-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: #ffffff;
    text-decoration: none;
  }
  
  .link-item:hover {
    text-decoration: underline;
  }
  
  .link-item img {
    width: 20px;
    height: 20px;
  }
  
  .chatbot-apology {
    font-size: 12px;
    color: #ffffff;
    font-style: italic;
    text-align: center;
  }
  </style>  