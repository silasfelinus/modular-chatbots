<!-- ThemeSelector.vue -->
<template>
  <div class="relative inline-block text-left">
    <button
      @click="open = !open"
      class="theme-btn fixed top-0 left-0 ml-2 mt-2 bg-base-200 p-2 rounded-full focus:outline-none focus:ring focus:ring-primary shadow-md transform hover:scale-110 transition-all ease-in-out duration-200"
    >
      <span class="theme-icon w-4 h-4"></span>
    </button>
    <transition name="fade">
      <div
        v-show="open"
        class="origin-top-left absolute left-0 ml-4 mt-12 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-opacity duration-200"
      >
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <button
            v-for="(theme, index) in themes"
            :key="index"
            @click="changeTheme(theme)"
            class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
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

const themes: string[] = [
"light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
  
];

const changeTheme = (theme: string) => {
  open.value = false;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
