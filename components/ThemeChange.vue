<template>
  <div class="theme-selector fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <button
      @click="toggleMenu"
      @keydown.space.prevent="toggleMenu"
      tabindex="0"
      class="theme-btn bg-base-200 p-4 rounded-full focus:outline-none focus:ring focus:ring-primary shadow-md transform hover:scale-110 transition-all ease-in-out duration-200"
    >
      <span class="theme-icon w-6 h-6"></span>
    </button>
    <transition name="fade">
      <div
        v-show="open"
        class="origin-top-right absolute left-0 ml-[-224px] mt-8 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-opacity duration-200"
      >
        <div
          class="py-1 theme-list grid grid-cols-3 gap-2 p-2"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <button
            v-for="(theme, index) in themes"
            :key="index"
            @click="changeTheme(theme)"
            class="theme-item block w-full text-center px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
            role="menuitem"
            tabindex="0"
          >
            {{ theme }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import "theme-change";

const open = ref(false);

const themes = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
];

const toggleMenu = () => {
  open.value = !open.value;
};

const changeTheme = (theme: string) => {
  open.value = false;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};
</script>

<style>
.theme-selector {
  z-index: 1000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.theme-icon {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="%239CA3AF"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>');
}
.theme-list {
  max-height: 320px;
  overflow-y: auto;
}
.theme-item:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.5);
}
</style>
