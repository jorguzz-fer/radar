<template>
  <div
    class="trezo-card-content bg-white dark:bg-dark p-[20px] md:p-[25px] rounded-b-md border-t border-gray-100 dark:border-[#172036]"
  >
    <div class="relative py-[15px] ltr:md:pl-[175px] rtl:md:pr-[175px]">
      <div
        class="md:absolute md:ltr:-left-[25px] md:rtl:-right-[25px] md:max-w-[200px] -mb-[40px] md:mb-0"
      >
        <apexchart
          v-if="isClient"
          type="donut"
          height="160"
          :options="salesByCategory"
          :series="sales"
        ></apexchart>
      </div>
      <h5 class="!font-medium !text-md !mb-[20px]">
        Sales by Category/Products
        <span class="text-gray-500 dark:text-gray-400 text-base">
          (Top Performing)
        </span>
      </h5>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-[20px]">
        <div class="flex items-center gap-[10px]">
          <div
            class="flex items-center justify-center w-[44px] h-[44px] rounded-md bg-purple-100 text-purple-500 dark:bg-[#15203c]"
          >
            <i class="material-symbols-outlined"> devices </i>
          </div>
          <div>
            <span class="block mb-[2px]"> Electronics </span>
            <h4 class="!mb-0 !font-medium !text-[20px]">$35,000</h4>
          </div>
        </div>
        <div class="flex items-center gap-[10px]">
          <div
            class="flex items-center justify-center w-[44px] h-[44px] rounded-md bg-success-100 text-success-600 dark:bg-[#15203c]"
          >
            <i class="material-symbols-outlined"> apparel </i>
          </div>
          <div>
            <span class="block mb-[2px]"> Clothing </span>
            <h4 class="!mb-0 !font-medium !text-[20px]">$25,000</h4>
          </div>
        </div>
        <div class="flex items-center gap-[10px]">
          <div
            class="flex items-center justify-center w-[44px] h-[44px] rounded-md bg-secondary-100 text-secondary-500 dark:bg-[#15203c]"
          >
            <i class="material-symbols-outlined"> deployed_code </i>
          </div>
          <div>
            <span class="block mb-[2px]"> Home Goods </span>
            <h4 class="!mb-0 !font-medium !text-[20px]">$18,000</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SalesByCategory",
  setup() {
    const isClient = ref(false);

    const sales = ref([35000, 25000, 18000]);

    const salesByCategory = ref({
      chart: {
        type: "donut",
        height: 160,
      },
      labels: ["Electronics", "Clothing", "Home Goods"],
      colors: ["#AD63F6", "#37D80A", "#3584FC"],
      stroke: {
        width: 2,
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
        enabled: false,
        style: {
          fontSize: "12px",
        },
        dropShadow: {
          enabled: false,
        },
        formatter: function (val: number) {
          return "$" + val.toFixed(1);
        },
        offset: 0,
        textAnchor: "middle",
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$" + val;
          },
        },
      },
      legend: {
        show: false,
        position: "bottom",
        fontSize: "12px",
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: -95,
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
      sales,
      salesByCategory,
    };
  },
});
</script>
