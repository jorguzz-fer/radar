<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-header flex items-center justify-between">
      <div class="trezo-card-title flex items-center gap-[15px]">
        <div>
          <span class="block mb-[3px]"> Trading Volume </span>
          <h5 class="!mb-0 !text-[20px]">$117,950</h5>
        </div>
        <span
          class="inline-block text-xs font-medium px-[8px] text-success-600 border border-success-600 bg-success-100 text-sm rounded-[100px] dark:bg-[#15203c] dark:border-[#15203c]"
        >
          +7.6%
        </span>
      </div>
      <div class="trezo-card-subtitle">Last 7 days</div>
    </div>

    <div class="trezo-card-content">
      <div class="-mb-[25px] -mt-[3px]">
        <apexchart
          v-if="isClient"
          type="bar"
          height="200"
          :options="tradingVolume"
          :series="volume"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TradingVolumeChart",
  setup() {
    const isClient = ref(false);

    const volume = ref([
      {
        name: "Volume",
        data: [130, 200, 160, 80, 70, 120, 140],
      },
    ]);

    const tradingVolume = ref({
      chart: {
        type: "bar",
        height: 200,
        toolbar: {
          show: false,
        },
      },
      colors: ["#757DFF"],
      plotOptions: {
        bar: {
          columnWidth: "15px",
          colors: {
            backgroundBarColors: ["#DDE4FF"],
            backgroundBarOpacity: 0.2,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#F6F7F9",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: true,
          color: "#64748B",
        },
        axisBorder: {
          show: true,
          color: "#64748B",
        },
        labels: {
          show: true,
          style: {
            colors: "#3A4252",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 4,
        max: 200,
        min: 0,
        labels: {
          formatter: (val: string) => {
            return "$" + val;
          },
          style: {
            colors: "#3A4252",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#64748B",
        },
        axisTicks: {
          show: false,
          color: "#64748B",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$" + val + "k";
          },
        },
      },
      legend: {
        show: true,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 6,
          offsetX: -2,
          offsetY: -0.5,
          shape: "square",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      volume,
      tradingVolume,
    };
  },
});
</script>
