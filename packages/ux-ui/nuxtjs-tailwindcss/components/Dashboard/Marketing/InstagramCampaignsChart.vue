<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-header mb-[20px] flex items-center justify-between">
      <div class="trezo-card-title flex items-center gap-[10px]">
        <h5 class="!mb-0">Instagram Campaigns</h5>
        <span
          class="px-[8px] py-[3px] inline-block bg-orange-100 dark:bg-[#15203c] text-orange-600 rounded-sm font-medium text-xs"
        >
          Live Now
        </span>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="flex items-center gap-[25px]">
        <div>
          <div class="flex items-center gap-[5px] mb-[5px]">
            <span
              class="block w-[10px] h-[10px] rounded-full bg-purple-500"
            ></span>
            <span class="block text-sm"> Campaign Budget </span>
          </div>
          <h3 class="!mb-0 !leading-none !text-[20px]">$3200</h3>
        </div>
        <div>
          <div class="flex items-center gap-[5px] mb-[5px]">
            <span
              class="block w-[10px] h-[10px] rounded-full bg-orange-400"
            ></span>
            <span class="block text-sm"> Followers Goal </span>
          </div>
          <h3 class="!mb-0 !leading-none !text-[20px]">140,000</h3>
        </div>
      </div>
      <div class="h-[76px] relative">
        <div
          class="absolute left-0 right-0 -bottom-[55px] -ml-[33px] md:-ml-[37px] -mr-[30px] md:-mr-[35px]"
        >
          <apexchart
            v-if="isClient"
            type="area"
            height="149"
            :options="instagramCampaigns"
            :series="campaigns"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "InstagramCampaignsChart",
  setup() {
    const isClient = ref(false);
    const campaigns = ref([
      {
        name: "Campaign Budget",
        data: [50, 40, 30, 50, 40, 30, 50],
      },
      {
        name: "Followers Goal",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ]);
    const instagramCampaigns = ref({
      chart: {
        type: "area",
        height: 149,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#FF6D57", "#AD63F6"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        // tickAmount: 6,
        show: false,
        // max: 150,
        // min: 0,
        labels: {
          formatter: (val: string) => {
            return "$" + val + "k";
          },
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      legend: {
        show: false,
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
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      campaigns,
      instagramCampaigns,
    };
  },
});
</script>
