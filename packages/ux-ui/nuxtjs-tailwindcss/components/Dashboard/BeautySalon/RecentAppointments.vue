<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Recent Appointments</h5>
      </div>
      <div class="trezo-card-subtitle mt-[12px] sm:mt-0">
        <div
          class="inline-block py-[6.5px] px-[19px] bg-[#f5f7f8] dark:bg-[#0a0e19] rounded-md"
        >
          <span class="inline-block relative ltr:pr-[22px] rtl:pl-[22px]">
            {{ formattedCurrentDate }}
            <i
              class="ri-calendar-2-line absolute text-lg top-1/2 -translate-y-1/2 ltr:-right-[3px] rtl:-left-[3px]"
            ></i>
          </span>
        </div>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
        <div id="workingScheduleCalendar">
          <div class="header flex items-center justify-between mb-[16px]">
            <button
              @click="prevMonth"
              class="transition-all text-black bg-[#E6EFF2] dark:text-white dark:bg-[#172036] flex items-center justify-center rounded-full w-[30px] h-[30px] hover:bg-primary-500 hover:text-white"
            >
              <i class="material-symbols-outlined">chevron_left</i>
            </button>
            <span class="block font-medium text-black dark:text-white">
              {{ currentMonth }} {{ currentYear }}
            </span>
            <button
              @click="nextMonth"
              class="transition-all text-black bg-[#E6EFF2] dark:text-white dark:bg-[#172036] flex items-center justify-center rounded-full w-[30px] h-[30px] hover:bg-primary-500 hover:text-white"
            >
              <i class="material-symbols-outlined">chevron_right</i>
            </button>
          </div>
          <div
            class="calendar recent-appointments-calendar grid grid-cols-7 text-center"
          >
            <!-- Days of the week -->
            <div v-for="day in daysOfWeek" :key="day" class="days">
              {{ day }}
            </div>
            <!-- Calendar dates -->
            <div
              v-for="date in calendarDates"
              :key="date.date"
              class="date-cell p-2"
              :class="{
                'text-gray-200': !date.isCurrentMonth,
                'bg-primary-500 text-white dark:bg-primary-800 rounded-full':
                  date.isToday,
                'font-medium': date.hasAppointments,
              }"
              @click="selectDate(date)"
            >
              {{ date.day }}
              <!-- <div
                v-if="date.hasAppointments"
                class="w-1 h-1 bg-primary-500 rounded-full mx-auto mt-1"
              ></div> -->
            </div>
          </div>
        </div>

        <!-- Appointments List -->
        <div
          class="schedule-list h-[293px] overflow-y-scroll ltr:-mr-[20px] ltr:md:-mr-[25px] rtl:-ml-[20px] rtl:md:-ml-[25px] ltr:pr-[20px] ltr:md:pr-[25px] rtl:pl-[20px] rtl:md:pl-[25px]"
        >
          <div
            v-for="appointment in filteredAppointments"
            :key="appointment.id"
            class="p-[20px] rounded-md relative z-[1] ltr:ml-[34px] rtl:mr-[34px] mb-[20px] last:mb-0"
            :class="{
              'bg-primary-100 dark:bg-[#172036]': appointment.status === 'done',
              'bg-purple-100 dark:bg-[#172036]':
                appointment.status === 'upcoming',
            }"
          >
            <div
              class="absolute ltr:-left-[34px] rtl:-right-[34px] top-1/2 -translate-y-1/2"
            >
              <img
                :src="getStatusIcon(appointment.status)"
                :alt="appointment.status"
              />
            </div>
            <div class="flex justify-between">
              <div>
                <span class="block text-black dark:text-white font-medium">
                  {{ appointment.time }}
                </span>
                <span
                  class="block font-semibold mt-[4px]"
                  :class="{
                    'text-primary-500': appointment.status === 'done',
                    'text-purple-500': appointment.status === 'upcoming',
                  }"
                >
                  {{ appointment.service }}
                </span>
              </div>
              <div>
                <span
                  class="inline-block text-xs rounded-[30px] px-[10px] border"
                  :class="{
                    'border-success-300 text-success-700 bg-success-100 dark:border-dark dark:bg-dark':
                      appointment.status === 'done',
                    'border-danger-300 text-danger-700 bg-danger-100 dark:border-dark dark:bg-dark':
                      appointment.status === 'upcoming',
                  }"
                >
                  {{ appointment.status === "done" ? "Done" : "Upcoming" }}
                </span>
              </div>
            </div>
            <div class="mt-[15px] sm:flex lg:block xl:flex justify-between">
              <div class="flex items-center gap-[8px]">
                <img
                  :src="appointment.client.image"
                  :alt="appointment.client.name"
                  class="rounded-full w-[35px] border border-white dark:border-black"
                />
                <div>
                  <span class="block text-xs">Client</span>
                  <span
                    class="block text-[13px] font-semibold text-black dark:text-white"
                  >
                    {{ appointment.client.name }}
                  </span>
                </div>
              </div>
              <div
                class="flex items-center gap-[8px] mt-[15px] sm:mt-0 lg:mt-[15px] xl:mt-0"
              >
                <img
                  :src="appointment.staff.image"
                  :alt="appointment.staff.name"
                  class="rounded-full w-[35px] border border-white dark:border-black"
                />
                <div>
                  <span class="block text-xs">Served by</span>
                  <span
                    class="block text-[13px] font-semibold text-black dark:text-white"
                  >
                    {{ appointment.staff.name }}
                  </span>
                </div>
              </div>
            </div>
            <div
              class="-mt-[20px] absolute ltr:-left-[22px] rtl:-right-[22px] top-0 bottom-0 w-[1px] bg-gray-100 dark:bg-[#172036] -z-[1]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";

import client1 from "@/assets/images/users/user36.jpg";
import client2 from "@/assets/images/users/user38.jpg";
import staff1 from "@/assets/images/users/user37.jpg";
import staff2 from "@/assets/images/users/user40.jpg";

import statusIcon1 from "@/assets/images/icons/done.svg";
import statusIcon2 from "@/assets/images/icons/not-done.svg";

interface User {
  name: string;
  image: string;
}

interface Appointment {
  id: number;
  date: string;
  time: string;
  service: string;
  status: "done" | "upcoming";
  client: User;
  staff: User;
}

export default defineComponent({
  name: "RecentAppointments",
  setup() {
    // Current date handling
    const currentDate = ref(new Date());
    const selectedDate = ref(new Date());

    // Calendar data
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

    // Sample appointments data
    const appointments = ref<Appointment[]>([
      {
        id: 1,
        date: formatDate(new Date()),
        time: "10:00 AM",
        service: "Pedicure Treatment",
        status: "done",
        client: { name: "Jonathon Ronan", image: client1 },
        staff: { name: "Zinia Andy", image: staff1 },
      },
      {
        id: 2,
        date: formatDate(new Date()),
        time: "11:00 AM",
        service: "Facial Treatment",
        status: "upcoming",
        client: { name: "Angela Carter", image: client2 },
        staff: { name: "Skyler White", image: staff2 },
      },
      {
        id: 3,
        date: formatDate(
          new Date(new Date().setDate(new Date().getDate() + 1))
        ),
        time: "10:00 AM",
        service: "Hair Coloring",
        status: "upcoming",
        client: { name: "Michael Scott", image: client1 },
        staff: { name: "Zinia Andy", image: staff1 },
      },
      {
        id: 4,
        date: formatDate(
          new Date(new Date().setDate(new Date().getDate() - 1))
        ),
        time: "02:00 PM",
        service: "Manicure",
        status: "done",
        client: { name: "Pam Beesly", image: client2 },
        staff: { name: "Jim Halpert", image: staff2 },
      },
      {
        id: 5,
        date: formatDate(new Date()),
        time: "10:00 AM",
        service: "Pedicure Treatment",
        status: "done",
        client: { name: "Jonathon Ronan", image: client1 },
        staff: { name: "Zinia Andy", image: staff1 },
      },
      {
        id: 6,
        date: formatDate(new Date()),
        time: "11:00 AM",
        service: "Facial Treatment",
        status: "upcoming",
        client: { name: "Angela Carter", image: client2 },
        staff: { name: "Skyler White", image: staff2 },
      },
      {
        id: 7,
        date: formatDate(
          new Date(new Date().setDate(new Date().getDate() + 1))
        ),
        time: "10:00 AM",
        service: "Hair Coloring",
        status: "upcoming",
        client: { name: "Michael Scott", image: client1 },
        staff: { name: "Zinia Andy", image: staff1 },
      },
      {
        id: 8,
        date: formatDate(
          new Date(new Date().setDate(new Date().getDate() - 1))
        ),
        time: "02:00 PM",
        service: "Manicure",
        status: "done",
        client: { name: "Pam Beesly", image: client2 },
        staff: { name: "Jim Halpert", image: staff2 },
      },
    ]);

    // Computed properties
    const formattedCurrentDate = computed(() => {
      return currentDate.value.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    });

    const currentMonth = computed(() => {
      return months[currentDate.value.getMonth()];
    });

    const currentYear = computed(() => {
      return currentDate.value.getFullYear();
    });

    const calendarDates = computed(() => {
      const year = currentDate.value.getFullYear();
      const month = currentDate.value.getMonth();

      // Get first day of month and total days in month
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      // Get days from previous month to show
      const prevMonthDays = new Date(year, month, 0).getDate();
      const daysFromPrevMonth = firstDay;

      // Get days from next month to show
      const totalDays = daysFromPrevMonth + daysInMonth;
      const daysFromNextMonth =
        totalDays <= 35 ? 35 - totalDays : 42 - totalDays;

      const dates = [];

      // Previous month days
      for (let i = daysFromPrevMonth; i > 0; i--) {
        const day = prevMonthDays - i + 1;
        const date = new Date(year, month - 1, day);
        dates.push({
          date: formatDate(date),
          day,
          isCurrentMonth: false,
          isToday: false,
          hasAppointments: hasAppointmentsOnDate(date),
        });
      }

      // Current month days
      const today = new Date();
      for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(year, month, i);
        dates.push({
          date: formatDate(date),
          day: i,
          isCurrentMonth: true,
          isToday:
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear(),
          hasAppointments: hasAppointmentsOnDate(date),
        });
      }

      // Next month days
      for (let i = 1; i <= daysFromNextMonth; i++) {
        const date = new Date(year, month + 1, i);
        dates.push({
          date: formatDate(date),
          day: i,
          isCurrentMonth: false,
          isToday: false,
          hasAppointments: hasAppointmentsOnDate(date),
        });
      }

      return dates;
    });

    const filteredAppointments = computed(() => {
      return appointments.value.filter(
        (appt) => appt.date === formatDate(selectedDate.value)
      );
    });

    // Helper functions
    function formatDate(date: Date): string {
      return `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    }

    function hasAppointmentsOnDate(date: Date): boolean {
      const dateStr = formatDate(date);
      return appointments.value.some((appt) => appt.date === dateStr);
    }

    function getStatusIcon(status: string): string {
      return status === "done" ? statusIcon1 : statusIcon2;
    }

    // Calendar navigation
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

    function selectDate(date: {
      date: string;
      day: number;
      isCurrentMonth: boolean;
    }) {
      if (date.isCurrentMonth) {
        const [year, month, day] = date.date.split("-").map(Number);
        selectedDate.value = new Date(year, month - 1, day);
      }
    }

    // Initialize
    onMounted(() => {
      selectedDate.value = new Date();
    });

    return {
      currentDate,
      selectedDate,
      daysOfWeek,
      formattedCurrentDate,
      currentMonth,
      currentYear,
      calendarDates,
      filteredAppointments,
      prevMonth,
      nextMonth,
      selectDate,
      getStatusIcon,
    };
  },
});
</script>
