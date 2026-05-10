<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Project Roadmap</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="-mt-[26px] -mb-[25px] ltr:-ml-[10px] rtl:-mr-[10px]">
        <apexchart
          v-if="isClient"
          type="bar"
          height="342"
          :options="projectsRoadmap"
          :series="roadmap"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ProjectRoadmapChart",
  setup() {
    const isClient = ref(false);
    const roadmap = ref([
      {
        name: "Projects",
        data: [400, 550, 600, 700, 1000, 1100, 1200],
      },
    ]);
    const projectsRoadmap = ref({
      chart: {
        type: "bar",
        height: 342,
        toolbar: {
          show: false,
        },
      },
      colors: ["#3584FC"],
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Project Planning",
          "Research",
          "Design",
          "Front-end",
          "Development",
          "Review & QA",
          "Launch",
        ],
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: true,
          color: "#ECEEF2",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      roadmap,
      projectsRoadmap,
    };
  },
});
</script>
