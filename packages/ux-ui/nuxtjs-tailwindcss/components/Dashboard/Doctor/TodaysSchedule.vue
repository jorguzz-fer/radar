<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[22px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Today's Schedule</h5>
      </div>
    </div>

    <div class="trezo-card-content">
      <div id="workingScheduleCalendar">
        <div class="header flex items-center justify-between mb-[20px]">
          <button
            @click="prevMonth"
            class="transition-all text-black bg-[#E6EFF2] dark:text-white dark:bg-[#172036] flex items-center justify-center rounded-full w-[30px] h-[30px] hover:bg-primary-500 hover:text-white"
          >
            <i class="material-symbols-outlined"> chevron_left </i>
          </button>
          <span class="block font-medium text-black dark:text-white">
            {{ currentMonth }} {{ currentYear }}
          </span>
          <button
            @click="nextMonth"
            class="transition-all text-black bg-[#E6EFF2] dark:text-white dark:bg-[#172036] flex items-center justify-center rounded-full w-[30px] h-[30px] hover:bg-primary-500 hover:text-white"
          >
            <i class="material-symbols-outlined"> chevron_right </i>
          </button>
        </div>

        <div class="calendar grid grid-cols-7 text-center">
          <div
            v-for="day in daysOfWeek"
            :key="day"
            class="days font-medium text-gray-500 dark:text-gray-400"
          >
            {{ day }}
          </div>
          <div
            v-for="day in calendarDays"
            :key="day.date.toString()"
            @click="selectDate(day)"
            class="day p-2 cursor-pointer"
            :class="{
              'text-gray-200 dark:text-gray-600': !day.isCurrentMonth,
              'bg-primary-500 text-white dark:bg-primary-800 rounded-full':
                day.isToday,
              'font-semibold': day.isSelected,
              'hover:bg-gray-100 dark:hover:bg-gray-800': !day.isToday,
            }"
          >
            {{ day.day }}
          </div>
        </div>
      </div>
      <div
        class="border-top border-[1px] border-gray-100 dark:border-[#172036] border-dashed mt-[10px] mb-[20px]"
      ></div>
      <div
        class="schedule-list h-[540px] overflow-y-scroll ltr:-mr-[20px] ltr:md:-mr-[25px] rtl:-ml-[20px] rtl:md:-ml-[25px] ltr:pr-[20px] ltr:md:pr-[25px] rtl:pl-[20px] rtl:md:pl-[25px]"
      >
        <div
          v-for="appointment in filteredAppointments"
          :key="appointment.id"
          class="p-[20px] md:p-[25px] rounded-md relative z-[1] mt-[12px] first:mt-0"
          :class="{
            'bg-primary-100 dark:bg-[#172036]': appointment.type === 'regular',
            'bg-secondary-100 dark:bg-[#172036]':
              appointment.type === 'surgery',
            'bg-purple-100 dark:bg-[#172036]': appointment.type === 'meeting',
          }"
        >
          <span class="block text-black dark:text-white font-semibold">
            {{ appointment.time }}
          </span>
          <p class="mt-[3px] !mb-[9px]">{{ appointment.title }}</p>
          <div class="flex items-center gap-[5px]">
            <img
              :src="appointment.userImage"
              alt="user-image"
              class="rounded-full w-[24px] border-[1px] border-white dark:border-black"
            />
            <span class="block font-medium">{{ appointment.userName }}</span>
          </div>

          <div class="mt-[15px] flex items-center justify-between">
            <button
              type="button"
              class="inline-block font-medium py-[5.5px] px-[16px] bg-white dark:bg-[#0C1427] rounded-md transition-all hover:text-white"
              :class="{
                'text-primary-500 hover:bg-primary-500':
                  appointment.type === 'regular',
                'text-secondary-500 hover:bg-secondary-500':
                  appointment.type === 'surgery',
                'text-purple-500 hover:bg-purple-500':
                  appointment.type === 'meeting',
              }"
              @click="viewDetails(appointment)"
            >
              View Details
            </button>
            <button
              type="button"
              class="flex items-center justify-center rounded-full bg-white dark:bg-[#0C1427] transition-all hover:text-white w-[28px] h-[28px]"
              :class="{
                'text-primary-500 hover:bg-primary-500':
                  appointment.type === 'regular',
                'text-secondary-500 hover:bg-secondary-500':
                  appointment.type === 'surgery',
                'text-purple-500 hover:bg-purple-500':
                  appointment.type === 'meeting',
              }"
              @click="notify(appointment)"
            >
              <i class="ri-notification-2-line"></i>
            </button>
          </div>
          <div
            class="absolute -z-[1] ltr:right-0 rtl:left-0 top-0 rtl:-scale-x-[1] dark:opacity-[0.2]"
          >
            <img src="@/assets/images/cut-circle.png" alt="cut-circle" />
          </div>
        </div>

        <div
          v-if="filteredAppointments.length === 0"
          class="text-center py-8 text-gray-500"
        >
          No appointments scheduled for this day
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";

import image1 from "@/assets/images/users/user1.jpg";
import image2 from "@/assets/images/users/user2.jpg";
import image3 from "@/assets/images/users/user3.jpg";

interface CalendarDay {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
}

interface Appointment {
  id: number;
  date: Date;
  time: string;
  title: string;
  userName: string;
  userImage: string;
  type: "regular" | "surgery" | "meeting";
}

export default defineComponent({
  name: "TodaysSchedule",
  setup() {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDate = ref<Date>(new Date());
    const selectedDate = ref<Date>(new Date());

    // Sample appointments data
    const appointments = ref<Appointment[]>([
      {
        id: 1,
        date: new Date(),
        time: "10:00 AM",
        title: "Appointment With Cardiac Patient",
        userName: "Jonathon Ronan",
        userImage: image1,
        type: "regular",
      },
      {
        id: 2,
        date: new Date(),
        time: "12:00 PM",
        title: "Major Cardiac Surgery of the patient",
        userName: "Walter White",
        userImage: image2,
        type: "surgery",
      },
      {
        id: 3,
        date: new Date(),
        time: "02:00 PM",
        title: "Board Meeting With",
        userName: "Jessy Pinkman",
        userImage: image3,
        type: "meeting",
      },
      {
        id: 4,
        date: new Date(new Date().setDate(new Date().getDate() + 1)),
        time: "09:00 AM",
        title: "Follow-up Checkup",
        userName: "Sarah Connor",
        userImage: image1,
        type: "regular",
      },
    ]);

    const currentMonth = computed(() => {
      return currentDate.value.toLocaleString("default", { month: "long" });
    });

    const currentYear = computed(() => {
      return currentDate.value.getFullYear();
    });

    const calendarDays = computed(() => {
      const year = currentDate.value.getFullYear();
      const month = currentDate.value.getMonth();

      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);

      const prevMonthDays = firstDay.getDay();
      const nextMonthDays = 6 - lastDay.getDay();

      const totalDays = prevMonthDays + lastDay.getDate() + nextMonthDays;

      const days: CalendarDay[] = [];

      // Previous month days
      for (let i = prevMonthDays; i > 0; i--) {
        const date = new Date(year, month, -i + 1);
        days.push({
          date,
          day: date.getDate(),
          isCurrentMonth: false,
          isToday: isSameDay(date, new Date()),
          isSelected: isSameDay(date, selectedDate.value),
        });
      }

      // Current month days
      for (let i = 1; i <= lastDay.getDate(); i++) {
        const date = new Date(year, month, i);
        days.push({
          date,
          day: date.getDate(),
          isCurrentMonth: true,
          isToday: isSameDay(date, new Date()),
          isSelected: isSameDay(date, selectedDate.value),
        });
      }

      // Next month days
      for (let i = 1; i <= nextMonthDays; i++) {
        const date = new Date(year, month + 1, i);
        days.push({
          date,
          day: date.getDate(),
          isCurrentMonth: false,
          isToday: isSameDay(date, new Date()),
          isSelected: isSameDay(date, selectedDate.value),
        });
      }

      return days;
    });

    const filteredAppointments = computed(() => {
      return appointments.value
        .filter((appointment: { date: Date }) =>
          isSameDay(appointment.date, selectedDate.value)
        )
        .sort((a: { time: string }, b: { time: any }) => {
          // Simple time sorting (for demo purposes)
          return a.time.localeCompare(b.time);
        });
    });

    function isSameDay(date1: Date, date2: Date): boolean {
      return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
      );
    }

    function prevMonth() {
      currentDate.value = new Date(
        currentDate.value.getFullYear(),
        currentDate.value.getMonth() - 1,
        1
      );
    }

    function nextMonth() {
      currentDate.value = new Date(
        currentDate.value.getFullYear(),
        currentDate.value.getMonth() + 1,
        1
      );
    }

    function selectDate(day: CalendarDay) {
      selectedDate.value = day.date;
    }

    function viewDetails(appointment: Appointment) {
      // Implement view details logic
      console.log("View details:", appointment);
      // You might want to emit an event or open a modal here
    }

    function notify(appointment: Appointment) {
      // Implement notification logic
      console.log("Notify about:", appointment);
      // You might want to show a notification or reminder here
    }

    onMounted(() => {
      // You could load appointments from an API here
    });

    return {
      daysOfWeek,
      currentMonth,
      currentYear,
      calendarDays,
      filteredAppointments,
      prevMonth,
      nextMonth,
      selectDate,
      viewDetails,
      notify,
    };
  },
});
</script>
