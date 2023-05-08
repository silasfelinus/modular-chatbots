import { ref, onMounted, onUnmounted, computed } from 'vue';

export function useBreakpoints() {
  const width = ref(window.innerWidth);
  const breakpoint = 768; // Adjust this value based on your desired breakpoint

  const onResize = () => {
    width.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', onResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onResize);
  });

  const isSmallScreen = computed(() => width.value < breakpoint);

  return { isSmallScreen };
}
