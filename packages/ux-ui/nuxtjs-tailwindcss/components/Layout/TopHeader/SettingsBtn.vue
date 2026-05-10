<template>
  <div class="settings-menu-container relative">
    <button
      type="button"
      :class="{
        'leading-none inline-block transition-all relative top-[2px] hover:text-primary-500': true,
        active: isActive,
      }"
      id="settingsMenuDropdown"
      @click.stop="toggleActive"
    >
      <i class="material-symbols-outlined !text-[22px] md:!text-[24px]">
        settings
      </i>
    </button>

    <div
      v-if="isActive"
      ref="dropdownMenu"
      class="settings-menu-dropdown bg-white dark:bg-[#0c1427] transition-all shadow-3xl dark:shadow-none p-[20px] absolute mt-[17px] md:mt-[20px] w-[195px] z-[1] top-full ltr:right-0 rtl:left-0 rounded-md"
      role="menu"
      aria-labelledby="settingsMenuDropdown"
    >
      <button
        type="button"
        class="rtl-mode-toggle flex items-center text-black dark:text-white font-medium"
        @click="toggleDirection"
        role="menuitem"
      >
        RTL Mode:
        <span
          class="inline-block relative rounded-full w-[35px] h-[20px] bg-gray-50 dark:bg-[#0a0e19] ltr:ml-[10px] rtl:mr-[10px]"
        >
          <span
            class="inline-block transition-all absolute h-[12px] w-[12px] bg-black dark:bg-white rounded-full top-1/2 -translate-y-1/2"
            :style="{
              left: direction === 'ltr' ? '4px' : 'calc(100% - 16px)',
            }"
          ></span>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const isActive = ref(false);
const direction = ref<"ltr" | "rtl">("ltr");
const dropdownMenu = ref<HTMLElement | null>(null);

// Initialize direction from localStorage (client-side only)
onMounted(() => {
  if (typeof window !== "undefined") {
    const savedDirection = localStorage.getItem("direction");
    direction.value =
      savedDirection === "ltr" || savedDirection === "rtl"
        ? savedDirection
        : "ltr";
    document.body.setAttribute("dir", direction.value);
  }
});

const toggleActive = () => {
  isActive.value = !isActive.value;
};

const toggleDirection = () => {
  direction.value = direction.value === "ltr" ? "rtl" : "ltr";
  if (typeof window !== "undefined") {
    document.body.setAttribute("dir", direction.value);
    localStorage.setItem("direction", direction.value);
  }
};

// Click outside handler
const handleClickOutside = (event: MouseEvent) => {
  if (!dropdownMenu.value) return;

  const target = event.target as HTMLElement;
  if (!dropdownMenu.value.contains(target)) {
    isActive.value = false;
  }
};

// Event listeners
onMounted(() => {
  if (typeof window !== "undefined") {
    document.addEventListener("click", handleClickOutside);
  }
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    document.removeEventListener("click", handleClickOutside);
  }
});
</script>
