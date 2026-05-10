<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Basic Treemap Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="treemap"
        height="350"
        :options="treemapChart"
        :series="treemap"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "BasicTreemapChart",
  setup() {
    const isClient = ref(false);
    const treemap = ref([
      {
        data: [
          {
            x: "London",
            y: 218,
          },
          {
            x: "New York",
            y: 149,
          },
          {
            x: "Tokyo",
            y: 184,
          },
          {
            x: "Beijing",
            y: 55,
          },
          {
            x: "Paris",
            y: 84,
          },
          {
            x: "Chicago",
            y: 31,
          },
          {
            x: "Osaka",
            y: 70,
          },
          {
            x: "İstanbul",
            y: 30,
          },
          {
            x: "Bangkok",
            y: 44,
          },
          {
            x: "Madrid",
            y: 68,
          },
          {
            x: "Barcelona",
            y: 28,
          },
          {
            x: "Toronto",
            y: 19,
          },
          {
            x: "Shanghai",
            y: 29,
          },
        ],
      },
    ]);
    const treemapChart = ref({
      chart: {
        height: 350,
        type: "treemap",
        toolbar: {
          show: true,
        },
      },
      title: {
        text: "Basic Treemap",
        align: "left",
        offsetX: -9,
        style: {
          fontWeight: "500",
          fontSize: "14px",
          color: "#64748B",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      treemap,
      treemapChart,
    };
  },
});
</script>
