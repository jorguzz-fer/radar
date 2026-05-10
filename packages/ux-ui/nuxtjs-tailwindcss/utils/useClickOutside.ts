import { ref, onMounted, onUnmounted } from "vue";

export function useClickOutside(elementId: string) {
  // Reactive property to track active state
  const isActive = ref(false);
  const isActive2 = ref(false);

  // Method to toggle active state
  const toggleActive = () => {
    isActive.value = !isActive.value;
  };
  const toggleActive2 = () => {
    isActive2.value = !isActive2.value;
  };

  // Method to deactivate when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const element = document.getElementById(elementId);
    if (element && !element.contains(target)) {
      isActive.value = false;
      isActive2.value = false;
    }
  };

  // Add and remove the event listener
  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
  });

  return {
    isActive,
    toggleActive,
    isActive2,
    toggleActive2,
  };
}
