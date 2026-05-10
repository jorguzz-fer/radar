<template>
  <div
    class="trezo-card bg-purple-100 dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <div class="flex items-center">
        <img
          src="@/assets/images/icons/gross-earnings.svg"
          alt="gross-earnings"
        />
        <div class="ltr:ml-[10px] rtl:mr-[10px]">
          <span class="block uppercase"> Gross Earnings </span>
          <h4 class="!mb-0 !text-[20px] mt-[6px] !font-semibold">
            $78,350.00
            <span
              class="text-success-600 text-base font-medium -top-px relative ltr:ml-[2px] rtl:mr-[2px] ltr:pl-[25px] rtl:pr-[25px]"
            >
              <i
                class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
              >
                trending_up
              </i>
              +2.3%
            </span>
          </h4>
        </div>
      </div>
      <div class="-mt-[15px] -mb-[8px]">
        <apexchart
          v-if="isClient"
          type="line"
          height="245"
          :options="grossEarnings"
          :series="earnings"
        ></apexchart>
      </div>
      <div
        class="flex justify-between pt-[17px] border-t border-purple-200 dark:border-[#172036]"
      >
        <div>
          <span class="block text-xs"> Total Balance </span>
          <h6 class="!mb-0 !font-medium !text-lg mt-[5px]">$3,42,890</h6>
        </div>
        <div>
          <span class="block text-xs"> Withdrawals </span>
          <h6 class="!mb-0 !font-medium !text-lg mt-[5px]">$2,35,425</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "GrossEarningsChart",
  setup() {
    const isClient = ref(false);
    const earnings = ref([
      {
        name: "Earnings",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7],
      },
    ]);
    const grossEarnings = ref({
      chart: {
        height: 245,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: 4,
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "1W",
          "2W",
          "3W",
          "4W",
          "5W",
          "6W",
          "7W",
          "8W",
          "9W",
          "10W",
        ],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
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
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      colors: ["#9135E8"],
      yaxis: {
        show: false,
        labels: {
          formatter: (val: string) => {
            return "$" + val + "K";
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      earnings,
      grossEarnings,
    };
  },
});
</script>
