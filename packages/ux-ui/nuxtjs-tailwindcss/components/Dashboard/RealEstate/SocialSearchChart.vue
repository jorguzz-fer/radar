<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <h5 class="mb-[5px]">Social Search</h5>
      <span class="block text-sm"> Total traffic in this week </span>
      <div class="-mb-[23px]">
        <apexchart
          v-if="isClient"
          type="radialBar"
          height="260"
          :options="socialSearch"
          :series="search"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SocialSearchChart",
  setup() {
    const isClient = ref(false);
    const search = ref([90, 80, 70, 60]);
    const socialSearch = ref({
      chart: {
        height: 260,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "14px",
            },
            value: {
              fontSize: "14px",
            },
            total: {
              show: true,
              label: "Total",
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              formatter: function (_w: never) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249;
              },
            },
          },
          hollow: {
            margin: 10,
            size: "40%",
            background: "transparent",
          },
        },
      },
      labels: ["LinkedIn", "Twitter", "Facebook", "Instagram"],
      colors: ["#AD63F6", "#3584FC", "#37D80A", "#FD5812"],
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      search,
      socialSearch,
    };
  },
});
</script>
