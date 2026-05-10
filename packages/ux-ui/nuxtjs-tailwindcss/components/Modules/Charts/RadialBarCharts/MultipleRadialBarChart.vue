<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Multiple RadialBar Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="radialBar"
        height="350"
        :options="multipleRadialBar"
        :series="multiple"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "MultipleRadialBarChart",
  setup() {
    const isClient = ref(false);
    const multiple = ref([44, 55, 67, 83]);
    const multipleRadialBar = ref({
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function () {
                return "249";
              },
            },
          },
        },
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"],
      colors: ["#3584FC", "#FF4023", "#ffc107", "#605DFF"],
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      multiple,
      multipleRadialBar,
    };
  },
});
</script>
