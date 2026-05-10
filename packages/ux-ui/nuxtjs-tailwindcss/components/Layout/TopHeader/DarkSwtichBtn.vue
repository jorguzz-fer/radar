<template>
  <button
    id="light-dark-toggle"
    type="button"
    class="light-dark-toggle leading-none inline-block transition-all relative top-[2px] text-[#fe7a36]"
    @click="toggleTheme"
    aria-label="Toggle dark mode"
  >
    <i class="material-symbols-outlined !text-[20px] md:!text-[22px]">
      {{ icon }}
    </i>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "DarkSwtichBtn",
  setup() {
    // Explicitly type the icon ref
    const icon = ref<"light_mode" | "dark_mode">("light_mode");

    // Toggle theme function
    const toggleTheme = (): void => {
      const html = document.documentElement;
      const darkThemeClass = "dark";
      const lightThemeClass = "light";

      if (html.classList.contains(darkThemeClass)) {
        html.classList.remove(darkThemeClass);
        html.classList.add(lightThemeClass);
        icon.value = "light_mode";
        localStorage.setItem("trezo_theme", "light");
      } else {
        html.classList.remove(lightThemeClass);
        html.classList.add(darkThemeClass);
        icon.value = "dark_mode";
        localStorage.setItem("trezo_theme", "dark");
      }
    };

    // Initialize theme on mount
    onMounted(() => {
      const savedTheme = localStorage.getItem("trezo_theme");
      const html = document.documentElement;

      if (savedTheme === "dark") {
        html.classList.add("dark");
        icon.value = "dark_mode";
      } else {
        // Default to light theme if no saved theme
        html.classList.add("light");
        icon.value = "light_mode";
        localStorage.setItem("trezo_theme", "light");
      }
    });

    return {
      icon,
      toggleTheme,
    };
  },
});
</script>
