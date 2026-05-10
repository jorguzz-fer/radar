<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Event Info</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <ul>
        <li class="mb-[12.5px] last:mb-0">
          <span class="text-black dark:text-white"> 08:00 AM </span>
          - Registration
        </li>
        <li class="mb-[12.5px] last:mb-0">
          <span class="text-black dark:text-white"> 09:00 AM </span>
          - Opening Keynote
        </li>
        <li class="mb-[12.5px] last:mb-0">
          <span class="text-black dark:text-white"> 10:30 AM </span>
          - Panel Discussion: Future Trends
        </li>
        <li class="mb-[12.5px] last:mb-0">
          <span class="text-black dark:text-white"> 12:00 PM </span>
          - Lunch Break
        </li>
        <li class="mb-[12.5px] last:mb-0">
          <span class="text-black dark:text-white"> 02:00 PM </span>
          - Interactive Workshops
        </li>
        <li class="mb-[12.5px] last:mb-0">
          <span class="text-black dark:text-white"> 04:30 PM </span>
          - Networking Reception
        </li>
      </ul>
      <h5 class="mt-[23px] mb-[16px] text-lg">Registration Information</h5>
      <ul>
        <li class="mb-[12.5px] last:mb-0">
          Early Bird Registration Deadline: 15 November 2025
        </li>
        <li class="mb-[12.5px] last:mb-0">
          Standard Registration Deadline: 30 November 2025
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventInfo",
};
</script>
