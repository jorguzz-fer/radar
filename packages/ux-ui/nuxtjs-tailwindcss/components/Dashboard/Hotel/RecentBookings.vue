<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Recent Bookings</h5>
      </div>
      <div class="trezo-card-subtitle mt-[12px] sm:mt-0">
        <div
          class="inline-block py-[6.5px] px-[19px] bg-[#f5f7f8] dark:bg-[#0a0e19] rounded-md"
        >
          <span class="inline-block relative ltr:pr-[22px] rtl:pl-[22px]">
            <span>{{ formattedCurrentDate }}</span>
            <i
              class="ri-calendar-2-line absolute text-lg top-1/2 -translate-y-1/2 ltr:-right-[3px] rtl:-left-[3px]"
            ></i>
          </span>
        </div>
      </div>
    </div>

    <div class="trezo-card-content">
      <div id="workingScheduleCalendar">
        <div class="header flex items-center justify-between mb-[16px]">
          <button
            @click="prevMonth"
            class="transition-all text-black bg-[#E6EFF2] dark:text-white dark:bg-[#172036] flex items-center justify-center rounded-full w-[30px] h-[30px] hover:bg-primary-500 hover:text-white"
          >
            <i class="material-symbols-outlined">chevron_left</i>
          </button>
          <span class="block font-medium text-black dark:text-white">
            {{ monthNames[currentMonth] }} {{ currentYear }}
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
          <div v-for="day in daysOfWeek" :key="day" class="days">{{ day }}</div>
          <!-- Calendar dates -->
          <div
            v-for="date in calendarDates"
            :key="date.date.toString()"
            @click="selectDate(date)"
            :class="[
              'date-cell py-2 cursor-pointer',
              {
                'text-gray-400': !date.isCurrentMonth,
                'bg-primary-100 dark:bg-primary-900': date.isToday,
                'bg-primary-500 text-white rounded-full': date.isSelected,
                'font-semibold': date.hasBookings,
              },
            ]"
          >
            {{ date.date.getDate() }}
          </div>
        </div>
      </div>
      <div
        class="schedule-list h-[597px] overflow-y-scroll ltr:-mr-[20px] ltr:md:-mr-[25px] rtl:-ml-[20px] rtl:md:-ml-[25px] ltr:pr-[20px] ltr:md:pr-[25px] rtl:pl-[20px] rtl:md:pl-[25px] mt-[20px] md:mt-[25px]"
      >
        <div
          v-for="(booking, index) in filteredBookings"
          :key="index"
          class="relative flex items-center gap-[15px] mt-[15px] pt-[15px] border-t border-gray-100 dark:border-[#172036] first:border-t-0 first:pt-0 first:mt-0"
        >
          <a href="#" class="image block rounded-[4px] w-[80px]">
            <img
              :src="booking.image"
              class="rounded-[4px]"
              :alt="'room-image-' + index"
            />
          </a>
          <div>
            <h6 class="!font-semibold !mb-[6px]">
              <a
                href="#"
                class="text-black dark:text-white hover:text-primary-500 transition-all"
              >
                {{ booking.room }}
              </a>
            </h6>
            <span class="block text-xs">
              Booked by
              <strong class="font-semibold">{{ booking.guest }}</strong>
            </span>
            <span
              class="inline-block text-xs px-[8px] text-primary-500 bg-primary-50 dark:bg-[#15203c] py-[3px] font-medium rounded-[4px] mt-[9px]"
            >
              {{ formatBookingDates(booking.checkIn, booking.checkOut) }}
            </span>
          </div>
          <a
            href="#"
            class="flex items-center justify-center absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-gray-100 dark:bg-[#172036] transition-all hover:bg-primary-500 hover:text-white"
          >
            <i class="ri-arrow-right-line"></i>
          </a>
        </div>
        <div
          v-if="filteredBookings.length === 0"
          class="text-center py-8 text-gray-500"
        >
          No bookings found for selected date
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";

import image1 from "@/assets/images/rooms/room1.jpg";
import image2 from "@/assets/images/rooms/room2.jpg";
import image3 from "@/assets/images/rooms/room3.jpg";
import image4 from "@/assets/images/rooms/room4.jpg";
import image5 from "@/assets/images/rooms/room5.jpg";

interface Booking {
  room: string;
  guest: string;
  image: string;
  checkIn: Date;
  checkOut: Date;
}

interface CalendarDate {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  hasBookings: boolean;
}

export default defineComponent({
  name: "RecentBookings",
  setup() {
    const currentDate = ref(new Date());
    const selectedDate = ref(new Date());
    const currentMonth = ref(new Date().getMonth());
    const currentYear = ref(new Date().getFullYear());

    const bookings = ref<Booking[]>([
      {
        room: "Deluxe Room - G - 3215",
        guest: "Angela Carter",
        image: image1,
        checkIn: new Date(),
        checkOut: new Date(new Date().setDate(new Date().getDate() + 1)),
      },
      {
        room: "The Garden Suite 101",
        guest: "Jack Smith",
        image: image2,
        checkIn: new Date(),
        checkOut: new Date(new Date().setDate(new Date().getDate() + 1)),
      },
      {
        room: "The Tranquil S-02",
        guest: "Jennifer Anderson",
        image: image3,
        checkIn: new Date(),
        checkOut: new Date(new Date().setDate(new Date().getDate() + 1)),
      },
      {
        room: "The Queen - X - 231",
        guest: "Angela Carter",
        image: image4,
        checkIn: new Date(),
        checkOut: new Date(new Date().setDate(new Date().getDate() + 1)),
      },
      {
        room: "The Velvet - F - 32045",
        guest: "Skyler White",
        image: image5,
        checkIn: new Date(),
        checkOut: new Date(new Date().setDate(new Date().getDate() + 1)),
      },
      {
        room: "Deluxe Room - G - 3215",
        guest: "Angela Carter",
        image: image1,
        checkIn: new Date(),
        checkOut: new Date(new Date().setDate(new Date().getDate() + 2)),
      },
      {
        room: "The Garden Suite 101",
        guest: "Jack Smith",
        image: image2,
        checkIn: new Date(),
        checkOut: new Date(new Date().setDate(new Date().getDate() + 2)),
      },
      {
        room: "The Tranquil S-02",
        guest: "Jennifer Anderson",
        image: image3,
        checkIn: new Date(),
        checkOut: new Date(new Date().setDate(new Date().getDate() + 2)),
      },
      {
        room: "The Queen - X - 231",
        guest: "Angela Carter",
        image: image4,
        checkIn: new Date(),
        checkOut: new Date(new Date().setDate(new Date().getDate() + 2)),
      },
      {
        room: "The Velvet - F - 32045",
        guest: "Skyler White",
        image: image5,
        checkIn: new Date(),
        checkOut: new Date(new Date().setDate(new Date().getDate() + 2)),
      },
    ]);

    // Constants
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = [
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

    // Computed properties
    const formattedCurrentDate = computed(() => {
      return currentDate.value.toLocaleDateString("en-US", {
        // weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    });

    const calendarDates = computed(() => {
      const dates: CalendarDate[] = [];
      const firstDayOfMonth = new Date(
        currentYear.value,
        currentMonth.value,
        1
      );
      const lastDayOfMonth = new Date(
        currentYear.value,
        currentMonth.value + 1,
        0
      );

      // Days from previous month
      const prevMonthDays = firstDayOfMonth.getDay();
      for (let i = prevMonthDays - 1; i >= 0; i--) {
        const date = new Date(currentYear.value, currentMonth.value - 1, 0 - i);
        dates.push(createCalendarDate(date, false));
      }

      // Days in current month
      for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        const date = new Date(currentYear.value, currentMonth.value, i);
        dates.push(createCalendarDate(date, true));
      }

      // Days from next month
      const nextMonthDays = 6 - lastDayOfMonth.getDay();
      for (let i = 1; i <= nextMonthDays; i++) {
        const date = new Date(currentYear.value, currentMonth.value + 1, i);
        dates.push(createCalendarDate(date, false));
      }

      return dates;
    });

    const filteredBookings = computed(() => {
      return bookings.value.filter((booking) => {
        return (
          (booking.checkIn <= selectedDate.value &&
            booking.checkOut >= selectedDate.value) ||
          isSameDay(booking.checkIn, selectedDate.value)
        );
      });
    });

    // Methods
    const createCalendarDate = (
      date: Date,
      isCurrentMonth: boolean
    ): CalendarDate => {
      const today = new Date();
      return {
        date,
        isCurrentMonth,
        isToday: isSameDay(date, today),
        isSelected: isSameDay(date, selectedDate.value),
        hasBookings: hasBookingsOnDate(date),
      };
    };

    const isSameDay = (date1: Date, date2: Date): boolean => {
      return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
      );
    };

    const hasBookingsOnDate = (date: Date): boolean => {
      return bookings.value.some((booking) => {
        return (
          (booking.checkIn <= date && booking.checkOut >= date) ||
          isSameDay(booking.checkIn, date)
        );
      });
    };

    const selectDate = (calendarDate: CalendarDate) => {
      selectedDate.value = calendarDate.date;
    };

    const prevMonth = () => {
      if (currentMonth.value === 0) {
        currentMonth.value = 11;
        currentYear.value--;
      } else {
        currentMonth.value--;
      }
    };

    const nextMonth = () => {
      if (currentMonth.value === 11) {
        currentMonth.value = 0;
        currentYear.value++;
      } else {
        currentMonth.value++;
      }
    };

    const formatBookingDates = (checkIn: Date, checkOut: Date): string => {
      return `${checkIn.getDate()} ${monthNames[checkIn.getMonth()].substring(
        0,
        3
      )} - ${checkOut.getDate()} ${monthNames[checkOut.getMonth()].substring(
        0,
        3
      )}`;
    };

    // Initialize with today's date
    onMounted(() => {
      selectedDate.value = new Date();
    });

    return {
      currentDate,
      selectedDate,
      currentMonth,
      currentYear,
      bookings,
      daysOfWeek,
      monthNames,
      formattedCurrentDate,
      calendarDates,
      filteredBookings,
      selectDate,
      prevMonth,
      nextMonth,
      formatBookingDates,
    };
  },
});
</script>
