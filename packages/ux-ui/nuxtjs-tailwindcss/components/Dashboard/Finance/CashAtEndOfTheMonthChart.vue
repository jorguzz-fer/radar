<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-header mb-[20px] flex items-center justify-between">
      <div class="trezo-card-title">
        <span class="block"> Cash at End of the Month </span>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="-mt-[10px] h-[145px]">
        <apexchart
          v-if="isClient"
          type="donut"
          height="250"
          :options="cashAtEndOfTheMonth"
          :series="cash"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "CashAtEndOfTheMonthChart",
  setup() {
    const isClient = ref(false);
    const cash = ref([42.9, 20.0, 37.1]);
    const cashAtEndOfTheMonth = ref({
      chart: {
        type: "donut",
        height: 250,
      },
      labels: ["Cash Inflows", "Cash Outflows", "Remaining Cash"],
      colors: ["#37D80A", "#FD5812", "#605DFF"],
      stroke: {
        width: 0,
      },
      plotOptions: {
        pie: {
          endAngle: 90,
          startAngle: -90,
          expandOnClick: false,
          donut: {
            size: "65%",
          },
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "12px",
        },
        dropShadow: {
          enabled: false,
        },
        formatter: function (val: number) {
          return val.toFixed(1) + "%";
        },
        offset: 0,
        textAnchor: "middle",
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "%";
          },
        },
      },
      legend: {
        show: true,
        position: "bottom",
        fontSize: "12px",
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: -105,
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
      cash,
      cashAtEndOfTheMonth,
    };
  },
});
</script>
