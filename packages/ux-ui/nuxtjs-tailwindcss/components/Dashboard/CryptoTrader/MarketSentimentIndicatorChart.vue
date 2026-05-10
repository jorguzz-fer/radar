<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Market Sentiment Indicator</h5>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="-mt-[30px]">
        <apexchart
          v-if="isClient"
          type="radialBar"
          height="310"
          :options="marketSentimentIndicator"
          :series="sentimentIndicator"
        ></apexchart>
      </div>

      <div
        class="flex mx-auto justify-center items-center flex-wrap text-xs max-w-[315px] gap-[13px] -mt-[30px]"
      >
        <div class="flex items-center gap-[5px]">
          <span> 🟢 </span>
          Extreme Greed
        </div>
        <div class="flex items-center gap-[5px]">
          <span> 🟢 </span>
          Greed
        </div>
        <div class="flex items-center gap-[5px]">
          <span> 🟡 </span>
          Neutral
        </div>
        <div class="flex items-center gap-[5px]">
          <span> 🟠 </span>
          Fear
        </div>
        <div class="flex items-center gap-[5px]">
          <span> 🔴 </span>
          Extreme Fear
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "MarketSentimentIndicatorChart",
  setup() {
    const isClient = ref(false);

    const sentimentIndicator = ref([100]);

    const marketSentimentIndicator = ref({
      chart: {
        type: "radialBar",
        height: 310,
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#ffffff",
            strokeWidth: "100%",
          },
          dataLabels: {
            show: false,
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          gradientToColors: ["#FF3D00"],
          stops: [0, 50, 100],
          colorStops: [
            { offset: 0, color: "#00C851", opacity: 1 },
            { offset: 25, color: "#8BC34A", opacity: 1 },
            { offset: 50, color: "#FFC107", opacity: 1 },
            { offset: 75, color: "#FF9800", opacity: 1 },
            { offset: 100, color: "#FF3D00", opacity: 1 },
          ],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Market Sentiment"],
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      sentimentIndicator,
      marketSentimentIndicator,
    };
  },
});
</script>
