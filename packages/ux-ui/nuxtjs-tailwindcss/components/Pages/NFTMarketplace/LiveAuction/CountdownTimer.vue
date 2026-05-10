<template>
  <div
    class="absolute left-[10px] right-[10px] bottom-[10px] text-center z-[1] p-[10px]"
  >
    <span
      class="active-auctions-timer block text-xs font-semibold text-gray-900 dark:text-gray-400"
      data-duration="9900"
      id="active-auctions-timer"
    >
      <span class="day-span mx-[2px]">
        <span class="day">{{ days }}</span
        >d:
      </span>
      <span class="hours-span mx-[2px]">
        <span class="hours">{{ hours }}</span
        >h:
      </span>
      <span class="minutes-span mx-[2px]">
        <span class="minutes">{{ hours }}</span
        >m:
      </span>
      <span class="seconds-span mx-[2px]">
        <span class="seconds">{{ minutes }}</span
        >s:
      </span>
    </span>
    <div
      class="absolute left-0 right-0 top-0 bottom-0 -z-[1] bg-white opacity-[.80] backdrop-blur-[12px]"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  props: {
    endDate: { type: String, required: true },
  },
  setup(props) {
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    let interval: number;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const endTime = new Date(props.endDate).getTime();
      const timeLeft = endTime - now;

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      days.value = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      hours.value = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      minutes.value = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      seconds.value = Math.floor((timeLeft % (1000 * 60)) / 1000);
    };

    onMounted(() => {
      updateCountdown();
      interval = setInterval(updateCountdown, 1000) as unknown as number;
    });

    onBeforeUnmount(() => {
      clearInterval(interval);
    });

    return { days, hours, minutes, seconds };
  },
});
</script>
