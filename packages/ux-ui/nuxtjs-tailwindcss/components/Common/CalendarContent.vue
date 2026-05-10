<template>
  <div id="workingScheduleCalendar">
    <div class="header flex items-center justify-between mb-[20px]">
      <button
        id="prevBtn"
        class="transition-all text-black bg-gray-100 dark:text-white dark:bg-[#172036] flex items-center justify-center rounded-full w-[30px] h-[30px] hover:bg-primary-500 hover:text-white"
        @click="changeMonth(-1)"
      >
        <i class="material-symbols-outlined"> chevron_left </i>
      </button>
      <span id="monthYear" class="block font-medium text-black dark:text-white">
        {{ currentDate }}
      </span>
      <button
        id="nextBtn"
        class="transition-all text-black bg-gray-100 dark:text-white dark:bg-[#172036] flex items-center justify-center rounded-full w-[30px] h-[30px] hover:bg-primary-500 hover:text-white"
        @click="changeMonth(1)"
      >
        <i class="material-symbols-outlined"> chevron_right </i>
      </button>
    </div>
    <div class="calendar grid grid-cols-7 text-center">
      <!-- Days of the week -->
      <div class="days">Sun</div>
      <div class="days">Mon</div>
      <div class="days">Tue</div>
      <div class="days">Wed</div>
      <div class="days">Thu</div>
      <div class="days">Fri</div>
      <div class="days">Sat</div>
      <div
        class="date"
        v-for="(day, index) in calendarDays"
        :key="index"
        :class="[day.class]"
      >
        {{ day.date }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

interface Day {
  date: number;
  class: string;
}

export default defineComponent({
  name: "CalendarContent",
  setup() {
    const date = new Date();
    const currYear = ref(date.getFullYear());
    const currMonth = ref(date.getMonth());
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentDate = ref(`${months[currMonth.value]} ${currYear.value}`);

    const getCalendarDays = (year: number, month: number): Day[] => {
      const days: Day[] = [];
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
      const lastDayOfMonth = new Date(year, month, lastDateOfMonth).getDay();
      const lastDateOfLastMonth = new Date(year, month, 0).getDate();

      for (let i = firstDayOfMonth; i > 0; i--) {
        days.push({ date: lastDateOfLastMonth - i + 1, class: "inactive" });
      }

      for (let i = 1; i <= lastDateOfMonth; i++) {
        const isToday =
          i === date.getDate() &&
          month === date.getMonth() &&
          year === date.getFullYear();
        days.push({ date: i, class: isToday ? "active" : "" });
      }

      for (let i = lastDayOfMonth; i < 6; i++) {
        days.push({ date: i - lastDayOfMonth + 1, class: "inactive" });
      }

      return days;
    };

    const calendarDays = computed(() =>
      getCalendarDays(currYear.value, currMonth.value)
    );

    const changeMonth = (direction: number) => {
      currMonth.value += direction;
      if (currMonth.value < 0 || currMonth.value > 11) {
        const newDate = new Date(currYear.value, currMonth.value);
        currYear.value = newDate.getFullYear();
        currMonth.value = newDate.getMonth();
      }
      currentDate.value = `${months[currMonth.value]} ${currYear.value}`;
    };

    return {
      currentDate,
      calendarDays,
      changeMonth,
    };
  },
});
</script>
