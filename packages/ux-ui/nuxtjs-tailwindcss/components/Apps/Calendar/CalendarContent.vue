<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="calendar-wrap trezo-card-content relative">
      <div id="calendar"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

onMounted(() => {
  const calendarEl = document.getElementById("calendar");
  if (calendarEl) {
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      headerToolbar: {
        left: "title",
        right: "today prev,next",
      },
      initialView: "dayGridMonth",
      navLinks: true,
      editable: true,
      dayMaxEvents: true,
      events: [
        {
          title: "Annual Conference 2025",
          date: "2025-01-15",
        },
        {
          title: "Product Lunch Webinar 2025 & Meet With Trezo Nuxt",
          start: "2025-01-30",
          end: "2025-01-31",
        },
        {
          title: "Tech Summit 2025",
          date: "2025-02-14",
        },
        {
          title: "Web Development Seminar",
          date: "2025-02-17",
        },
        {
          title: "Meeting with UI/UX Designers",
          date: "2025-03-22",
        },
        {
          title: "Meeting with Developers",
          date: "2025-03-30",
        },
        {
          title: "Annual Conference 2025",
          date: "2025-04-10",
        },
        {
          title: "Product Lunch Webinar 2025 & Meet With Trezo Angular",
          start: "2025-05-14",
          end: "2025-05-16",
        },
        {
          title: "Tech Summit 2025",
          date: "2025-06-24",
        },
        {
          title: "Meeting with UI/UX Designers",
          date: "2025-07-26",
        },
        {
          title: "Web Development Seminar",
          date: "2025-08-28",
        },
        {
          title: "Annual Conference 2025",
          date: "2025-09-21",
        },
        {
          title: "Product Lunch Webinar 2025 & Meet With Trezo Angular",
          start: "2026-08-05",
          end: "2026-10-08",
        },
        {
          title: "Tech Summit 2025",
          date: "2025-11-14",
        },
        {
          title: "Web Development Seminar",
          date: "2025-12-17",
        },
        {
          title: "Meeting with UI/UX Designers",
          date: "2025-01-26",
        },
        {
          title: "Meeting with Developers",
          date: "2026-01-10",
        },
        {
          title: "Annual Conference 2025",
          date: "2026-02-05",
        },
        {
          title: "Product Lunch Webinar 2025 & Meet With Trezo Angular",
          start: "2025-09-09",
          end: "2025-09-11",
        },
        {
          title: "Tech Summit 2025",
          date: "2025-09-20",
        },
        {
          title: "Meeting with UI/UX Designers",
          date: "2026-09-26",
        },
        {
          title: "Web Development Seminar",
          date: "2026-08-29",
        },
        {
          title: "Web Development Seminar",
          date: "2026-07-20",
        },
        {
          title: "Web Development Seminar",
          date: "2026-06-20",
        },
        {
          title: "Web Development Seminar",
          date: "2026-05-20",
        },
      ],
    });
    calendar.render();
  }
});
</script>
