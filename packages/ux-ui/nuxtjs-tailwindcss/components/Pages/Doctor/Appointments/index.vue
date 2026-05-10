<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md mb-[25px]"
      >
        <div
          class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
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
                class="transition-all text-black bg-gray-100 dark:text-white dark:bg-[#172036] flex items-center justify-center rounded-full w-[30px] h-[30px] hover:bg-primary-500 hover:text-white"
              >
                <i class="material-symbols-outlined"> chevron_left </i>
              </button>
              <span class="block font-medium text-black dark:text-white">
                {{ monthYear }}
              </span>
              <button
                @click="nextMonth"
                class="transition-all text-black bg-gray-100 dark:text-white dark:bg-[#172036] flex items-center justify-center rounded-full w-[30px] h-[30px] hover:bg-primary-500 hover:text-white"
              >
                <i class="material-symbols-outlined"> chevron_right </i>
              </button>
            </div>

            <div
              class="calendar recent-appointments-calendar grid grid-cols-7 text-center"
            >
              <div class="days">Sun</div>
              <div class="days">Mon</div>
              <div class="days">Tue</div>
              <div class="days">Wed</div>
              <div class="days">Thu</div>
              <div class="days">Fri</div>
              <div class="days">Sat</div>
              <div
                v-for="(day, index) in calendarDays"
                :key="index"
                @click="selectDate(day)"
                class="py-2 cursor-pointer transition-all"
                :class="{
                  'text-gray-200 dark:text-gray-500': !day.isCurrentMonth,
                  'bg-primary-500 text-white dark:bg-primary-800 rounded-full':
                    day.isToday,
                  'bg-primary-100 dark:bg-primary-900 rounded-full':
                    day.isSelected,
                  'bg-primary-50 dark:bg-[#172036]': hasAppointments(day.date),
                }"
              >
                {{ day.day }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        @click="showPopup = true"
        class="font-medium inline-block transition-all rounded-md md:text-md py-[10px] md:py-[12px] px-[20px] md:px-[22px] bg-primary-500 text-white hover:bg-primary-400"
      >
        <span class="inline-block relative ltr:pl-[29px] rtl:pr-[29px]">
          <i
            class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2"
          >
            add
          </i>
          Add A Schedule
        </span>
      </button>
    </div>
    <div class="lg:col-span-2">
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md mb-[25px]"
      >
        <div
          class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
        >
          <div class="trezo-card-title">
            <h5 class="!mb-0">{{ selectedDateTitle }} Appointments</h5>
          </div>
        </div>

        <div class="trezo-card-content">
          <div
            v-for="appointment in filteredAppointments"
            :key="appointment.id"
            class="p-[20px] rounded-md relative z-[1] ltr:ml-[40px] rtl:mr-[40px] mb-[20px] last:mb-0"
            :class="{
              'bg-primary-50 dark:bg-[#172036]':
                appointment.type === 'appointment',
              'bg-info-50 dark:bg-[#172036]': appointment.type === 'meeting',
              'bg-secondary-50 dark:bg-[#172036]':
                appointment.type === 'surgery',
            }"
          >
            <div
              class="absolute ltr:-left-[40px] rtl:-right-[40px] top-1/2 -translate-y-1/2"
            >
              <img
                :src="appointment.status === 'completed' ? done : notDone"
                :alt="appointment.status === 'completed' ? 'done' : 'not-done'"
              />
            </div>
            <div class="flex items-center justify-between">
              <div>
                <div class="flex items-center gap-[12px] mb-[7px]">
                  <span class="block text-black dark:text-white font-semibold">
                    {{ appointment.time }}
                  </span>
                  <button
                    v-if="appointment.status === 'upcoming'"
                    class="flex items-center justify-center text-white transition-all rounded-full w-[28px] h-[28px]"
                    :class="{
                      'bg-primary-500': appointment.type === 'appointment',
                      'bg-info-500': appointment.type === 'meeting',
                      'bg-secondary-500': appointment.type === 'surgery',
                    }"
                    type="button"
                  >
                    <i class="ri-notification-2-line"></i>
                  </button>
                  <span
                    v-if="appointment.status === 'upcoming'"
                    class="inline-block text-xs px-[9px] font-medium bg-white dark:bg-dark text-sm rounded-[100px]"
                    :class="{
                      'text-primary-500': appointment.type === 'appointment',
                      'text-info-500': appointment.type === 'meeting',
                      'text-secondary-500': appointment.type === 'surgery',
                    }"
                  >
                    Upcoming
                  </span>
                </div>
                <p class="!mb-[12px]">{{ appointment.title }}</p>
                <div class="flex items-center gap-[8px]">
                  <img
                    :src="appointment.patientImage"
                    alt="user-image"
                    class="rounded-full w-[30px] border border-white dark:border-dark"
                  />
                  <span
                    class="block text-[13px] text-black dark:text-white font-semibold"
                  >
                    {{ appointment.patientName }}
                  </span>
                </div>
              </div>
              <button
                class="inline-block py-[6.5px] px-[17px] font-medium transition-all bg-white dark:bg-dark rounded-md hover:text-white"
                :class="{
                  'text-primary-500 hover:bg-primary-500':
                    appointment.type === 'appointment',
                  'text-info-500 hover:bg-info-500':
                    appointment.type === 'meeting',
                  'text-secondary-500 hover:bg-secondary-500':
                    appointment.type === 'surgery',
                }"
                type="button"
                @click="viewDetails(appointment)"
              >
                View Details
              </button>
            </div>
            <div
              class="absolute ltr:-left-[28px] rtl:-right-[28px] top-0 bottom-0 w-[1px] bg-gray-100 dark:bg-[#172036] -z-[1]"
            ></div>
            <img
              src="@/assets/images/icons/vector.png"
              class="absolute top-0 -z-[1] left-0 right-0 text-center mx-auto dark:opacity-[0.2]"
              alt="vector"
            />
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
  </div>

  <!-- Add Schedule Popup -->
  <div
    class="add-new-popup z-[999] fixed transition-all inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px]"
    :class="{
      'opacity-0 invisible': !showPopup,
      'opacity-100 visible active': showPopup,
    }"
    id="add-new-popup"
  >
    <div
      class="popup-dialog flex transition-all max-w-[550px] min-h-full items-center mx-auto"
    >
      <div
        class="trezo-card w-full bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
      >
        <div
          class="trezo-card-header bg-gray-50 dark:bg-[#15203c] mb-[20px] md:mb-[25px] flex items-center justify-between -mx-[20px] md:-mx-[25px] -mt-[20px] md:-mt-[25px] p-[20px] md:p-[25px] rounded-t-md"
        >
          <div class="trezo-card-title">
            <h5 class="!mb-0">Add A Schedule</h5>
          </div>
          <div class="trezo-card-subtitle">
            <button
              type="button"
              class="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500"
              @click="showPopup = false"
            >
              <i class="ri-close-fill"></i>
            </button>
          </div>
        </div>

        <div class="trezo-card-content">
          <form @submit.prevent="submitAppointment">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[25px]"
            >
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Select Date
                </label>
                <input
                  v-model="newAppointment.date"
                  type="date"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Select Time
                </label>
                <input
                  v-model="newAppointment.time"
                  type="time"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Schedule Type
                </label>
                <select
                  v-model="newAppointment.type"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[14px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                  required
                >
                  <option value="">Select</option>
                  <option value="appointment">Appointment with Patient</option>
                  <option value="meeting">Group Meeting</option>
                  <option value="meeting">Team Meeting</option>
                  <option value="meeting">Client Meeting</option>
                  <option value="meeting">Doctor Meeting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Patient Name
                </label>
                <input
                  v-model="newAppointment.patientName"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Jonathon Ronan"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Set Alarm
                </label>
                <input
                  v-model="newAppointment.alarm"
                  type="time"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="09:05 AM"
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Patient Avatar
                </label>
                <div id="fileUploader">
                  <div
                    class="relative flex items-center justify-center overflow-hidden rounded-md py-[48px] px-[20px] border border-gray-200 dark:border-[#172036]"
                  >
                    <div class="flex items-center justify-center">
                      <div
                        class="w-[35px] h-[35px] border border-gray-100 dark:border-[#15203c] flex items-center justify-center rounded-md text-primary-500 text-lg ltr:mr-[12px] rtl:ml-[12px]"
                      >
                        <i class="ri-upload-2-line"></i>
                      </div>
                      <p class="!leading-[1.5]">
                        <strong class="text-black dark:text-white"
                          >Click to upload</strong
                        ><br />
                        your file here
                      </p>
                    </div>
                    <input
                      type="file"
                      id="fileInput"
                      @change="handleFileUpload"
                      accept="image/*"
                      class="absolute top-0 left-0 right-0 bottom-0 rounded-md z-[1] opacity-0 cursor-pointer"
                    />
                  </div>
                  <div
                    v-if="newAppointment.patientImage"
                    class="mt-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Selected: {{ newAppointment.patientImage.name }}
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-[20px] md:mt-[25px] ltr:text-right rtl:text-left">
              <button
                type="button"
                class="rounded-md inline-block transition-all font-medium ltr:mr-[15px] rtl:ml-[15px] px-[26.5px] py-[12px] bg-danger-500 text-white hover:bg-danger-400"
                @click="showPopup = false"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="inline-block bg-primary-500 text-white py-[12px] px-[26.5px] transition-all rounded-md hover:bg-primary-400"
              >
                <span class="inline-block relative ltr:pl-[25px] rtl:pr-[25px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
                  >
                    add
                  </i>
                  Add Schedule
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";

import notDone from "@/assets/images/icons/not-done.svg";
import done from "@/assets/images/icons/done.svg";

import image1 from "@/assets/images/users/user32.jpg";
import image2 from "@/assets/images/users/user33.jpg";
import image3 from "@/assets/images/users/user34.jpg";
import image4 from "@/assets/images/users/user35.jpg";
import image5 from "@/assets/images/users/user36.jpg";
import image6 from "@/assets/images/users/user37.jpg";

interface Appointment {
  id: number;
  date: string;
  time: string;
  title: string;
  patientName: string;
  patientImage: string;
  status: "completed" | "upcoming";
  type: "appointment" | "meeting" | "surgery" | "other";
  alarm?: string;
}

interface CalendarDay {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
}

export default defineComponent({
  name: "Appointments",
  setup() {
    const currentDate = ref(new Date());
    const selectedDate = ref(new Date());
    const showPopup = ref(false);

    const appointments = ref<Appointment[]>([
      {
        id: 1,
        date: formatDate(new Date()),
        time: "10:00 AM",
        title: "Appointment With Cardiac Patient",
        patientName: "Jonathon Ronan",
        patientImage: image1,
        status: "completed",
        type: "appointment",
      },
      {
        id: 2,
        date: formatDate(new Date()),
        time: "12:00 PM",
        title: "Board Meeting With Doctors",
        patientName: "Jessy Pinkman",
        patientImage: image2,
        status: "completed",
        type: "meeting",
      },
      {
        id: 3,
        date: formatDate(new Date()),
        time: "02:00 PM",
        title: "Major Cardiac Surgery of the Patient",
        patientName: "Walter White",
        patientImage: image3,
        status: "upcoming",
        type: "surgery",
        alarm: "01:30 PM",
      },
      {
        id: 4,
        date: formatDate(new Date()),
        time: "10:00 AM",
        title: "Appointment With Cardiac Patient",
        patientName: "Jonathon Ronan",
        patientImage: image1,
        status: "upcoming",
        type: "appointment",
      },
      {
        id: 5,
        date: formatDate(new Date()),
        time: "12:00 PM",
        title: "Board Meeting With Doctors",
        patientName: "Jessy Pinkman",
        patientImage: image2,
        status: "upcoming",
        type: "meeting",
      },
      {
        id: 6,
        date: formatDate(new Date()),
        time: "02:00 PM",
        title: "Major Cardiac Surgery of the Patient",
        patientName: "Walter White",
        patientImage: image3,
        status: "upcoming",
        type: "surgery",
        alarm: "01:30 PM",
      },
      {
        id: 7,
        date: formatDate(
          new Date(new Date().setDate(new Date().getDate() + 1))
        ),
        time: "09:00 AM",
        title: "Follow-up Checkup",
        patientName: "Sarah Johnson",
        patientImage: image4,
        status: "upcoming",
        type: "appointment",
        alarm: "08:30 AM",
      },
    ]);

    // Form data
    const newAppointment = ref({
      date: formatDate(new Date()),
      time: "",
      type: "",
      patientName: "",
      alarm: "",
      patientImage: null as File | null,
      title: "",
    });

    // Helper function to format date as YYYY-MM-DD
    function formatDate(date: Date): string {
      const d = new Date(date);
      let month = "" + (d.getMonth() + 1);
      let day = "" + d.getDate();
      const year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    }

    // Computed properties
    const monthYear = computed(() => {
      return currentDate.value.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
    });

    const selectedDateTitle = computed(() => {
      const today = new Date();
      const selected = new Date(selectedDate.value);

      if (selected.toDateString() === today.toDateString()) {
        return "Today's";
      } else if (
        selected.toDateString() ===
        new Date(today.setDate(today.getDate() + 1)).toDateString()
      ) {
        return "Tomorrow's";
      } else {
        return selected.toLocaleDateString("default", {
          weekday: "long",
          month: "long",
          day: "numeric",
        });
      }
    });

    const filteredAppointments = computed(() => {
      const selectedDateFormatted = formatDate(selectedDate.value);
      return appointments.value.filter(
        (app: { date: string }) => app.date === selectedDateFormatted
      );
    });

    const calendarDays = computed(() => {
      const year = currentDate.value.getFullYear();
      const month = currentDate.value.getMonth();

      // Get first day of month and total days in month
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      // Get days from previous month to display
      const daysFromPrevMonth = firstDay;
      const prevMonthDays = new Date(year, month, 0).getDate();

      // Get days from next month to display
      const totalDays = daysInMonth + daysFromPrevMonth;
      const daysFromNextMonth =
        totalDays <= 35 ? 35 - totalDays : 42 - totalDays;

      const days: CalendarDay[] = [];

      // Previous month days
      for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
        const date = new Date(year, month - 1, prevMonthDays - i);
        days.push({
          date,
          day: date.getDate(),
          isCurrentMonth: false,
          isToday: isSameDay(date, new Date()),
          isSelected: isSameDay(date, selectedDate.value),
        });
      }

      // Current month days
      for (let i = 1; i <= daysInMonth; i++) {
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
      for (let i = 1; i <= daysFromNextMonth; i++) {
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

    // Helper function to check if two dates are the same day
    function isSameDay(date1: Date, date2: Date): boolean {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    }

    // Check if a date has appointments
    function hasAppointments(date: Date): boolean {
      const dateStr = formatDate(date);
      return appointments.value.some(
        (app: { date: string }) => app.date === dateStr
      );
    }

    // Calendar navigation
    const prevMonth = () => {
      currentDate.value = new Date(
        currentDate.value.getFullYear(),
        currentDate.value.getMonth() - 1,
        1
      );
    };

    const nextMonth = () => {
      currentDate.value = new Date(
        currentDate.value.getFullYear(),
        currentDate.value.getMonth() + 1,
        1
      );
    };

    // Select a date
    const selectDate = (day: CalendarDay) => {
      selectedDate.value = day.date;
    };

    // Form handling
    const handleFileUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        newAppointment.value.patientImage = input.files[0];
      }
    };

    const viewDetails = (appointment: Appointment) => {
      // In a real app, this would navigate to appointment details
      console.log("Viewing details for:", appointment);
    };

    const submitAppointment = () => {
      // Generate a new ID (in a real app, this would come from the backend)
      const newId =
        Math.max(...appointments.value.map((a: { id: any }) => a.id), 0) + 1;

      // Create the new appointment
      const appointment: Appointment = {
        id: newId,
        date: newAppointment.value.date,
        time: newAppointment.value.time,
        title:
          newAppointment.value.type === "appointment"
            ? `Appointment with ${newAppointment.value.patientName}`
            : newAppointment.value.title ||
              `Meeting with ${newAppointment.value.patientName}`,
        patientName: newAppointment.value.patientName,
        patientImage: newAppointment.value.patientImage
          ? URL.createObjectURL(newAppointment.value.patientImage)
          : "",
        // ? `"/assets/user-uploaded-${newId}.jpg` // In a real app, you would upload the file
        // : "user-default.jpg",
        status: "upcoming",
        type: newAppointment.value.type as
          | "appointment"
          | "meeting"
          | "surgery"
          | "other",
        alarm: newAppointment.value.alarm,
      };

      // Add to appointments
      appointments.value.push(appointment);

      // Reset form
      newAppointment.value = {
        date: formatDate(selectedDate.value),
        time: "",
        type: "",
        patientName: "",
        alarm: "",
        patientImage: null,
        title: "",
      };

      // Close popup
      showPopup.value = false;
    };

    // Initialize with today's date formatted
    onMounted(() => {
      newAppointment.value.date = formatDate(new Date());
    });

    return {
      done,
      notDone,
      currentDate,
      selectedDate,
      showPopup,
      appointments,
      newAppointment,
      monthYear,
      selectedDateTitle,
      filteredAppointments,
      calendarDays,
      prevMonth,
      nextMonth,
      selectDate,
      handleFileUpload,
      viewDetails,
      submitAppointment,
      hasAppointments,
    };
  },
});
</script>
