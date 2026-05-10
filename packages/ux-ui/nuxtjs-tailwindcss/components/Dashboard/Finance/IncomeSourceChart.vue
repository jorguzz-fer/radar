<template>
  <div
    class="trezo-card p-[20px] md:p-[25px] rounded-md"
    style="background: linear-gradient(120deg, #343a46 0%, #23272e 99.29%)"
  >
    <div class="trezo-card-header mb-[20px] flex items-center justify-between">
      <div class="trezo-card-title">
        <h5 class="!mb-0 !text-white">Income Source</h5>
      </div>
      <div class="trezo-card-subtitle">
        <span class="block text-white"> Last 30 days </span>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="-mt-[10px]">
        <apexchart
          v-if="isClient"
          type="polarArea"
          width="335"
          :options="incomeSource"
          :series="income"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "IncomeSourceChart",
  setup() {
    const isClient = ref(false);
    const income = ref([42, 47, 52, 58]);
    const incomeSource = ref({
      chart: {
        width: "100%", // Use responsive width
        type: "polarArea",
      },
      labels: ["$95k", "$60k", "$45k", "$22k"], // Ensure the length matches income array
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 0,
      },
      tooltip: {
        enabled: true,
        custom: function ({
          seriesIndex,
          w,
        }: {
          seriesIndex: number;
          w: { globals: { labels: string[] } };
        }) {
          // Debugging log
          console.log("seriesIndex:", seriesIndex);
          console.log("income:", income.value);
          console.log("labels:", w.globals.labels);

          if (seriesIndex >= income.value.length || seriesIndex < 0) {
            return `<div style="padding: 10px; color: #f00;">Invalid Data</div>`;
          }

          const category = w.globals.labels[seriesIndex];
          const value = income.value[seriesIndex];
          const total = income.value.reduce((a, b) => a + b, 0);
          const percentage = ((value / total) * 100).toFixed(2);

          return `
            <div style="padding: 10px; font-size: 13px; color: #333333; background: #ffffff; border-radius: 5px; box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);">
              <strong>${category}</strong><br/>
              Value: $${value}K<br/>
              Contribution: ${percentage}%
            </div>`;
        },
      },
      legend: {
        show: true,
        position: "left",
        fontSize: "12px",
        horizontalAlign: "bottom",
        offsetX: -24,
        offsetY: 15,
        customLegendItems: [
          "Product Sales",
          "Investments",
          "Salary",
          "Consulting",
        ],
        itemMargin: {
          horizontal: 0,
          vertical: 5,
        },
        labels: {
          colors: "#ECEEF2",
        },
        markers: {
          size: 6,
          offsetX: -2,
          offsetY: 0.5,
          shape: "square",
        },
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: "light",
          shadeIntensity: 0.6,
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          fontSize: "11px",
        },
        dropShadow: {
          enabled: false,
        },
        formatter: function (
          _val: unknown,
          opts: {
            w: { globals: { labels: { [x: string]: unknown } } };
            seriesIndex: string | number;
          }
        ) {
          return opts.w.globals.labels[opts.seriesIndex];
        },
        background: {
          padding: 5,
          opacity: 1,
          foreColor: "#ffffff",
          borderWidth: 0,
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      income,
      incomeSource,
    };
  },
});
</script>
