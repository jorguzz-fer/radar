<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Price Movement</h5>
      </div>
      <div class="trezo-card-subtitle">
        <button
          v-for="period in periods"
          :key="period"
          type="button"
          @click="changePeriod(period)"
          :class="[
            'inline-block transition-all w-[40px] h-[30px] rounded-[4px] border mx-[3px]',
            activePeriod === period
              ? 'border-primary-500 dark:border-[#172036] bg-primary-500 text-white'
              : 'border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500',
          ]"
        >
          {{ period }}
        </button>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="-mt-[18px] -mb-[15px]">
        <apexchart
          v-if="isClient"
          type="candlestick"
          height="350"
          :options="chartOptions.candlestick"
          :series="priceSeries"
        ></apexchart>
        <div class="-mt-[12px]">
          <apexchart
            v-if="isClient"
            type="bar"
            height="160"
            :options="chartOptions.volume"
            :series="volumeSeries"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

type TimePeriod = "1h" | "1d" | "1w" | "1m";

interface ChartData {
  priceSeries: any[];
  volumeSeries: any[];
}

export default defineComponent({
  name: "PriceMovementChart",
  setup() {
    const isClient = ref(false);
    const periods: TimePeriod[] = ["1h", "1d", "1w", "1m"];
    const activePeriod = ref<TimePeriod>("1d");

    // Generate all data upfront
    const chartData = ref<Record<TimePeriod, ChartData>>({
      "1h": generateChartData("1h"),
      "1d": generateChartData("1d"),
      "1w": generateChartData("1w"),
      "1m": generateChartData("1m"),
    });

    const priceSeries = ref(chartData.value[activePeriod.value].priceSeries);
    const volumeSeries = ref(chartData.value[activePeriod.value].volumeSeries);

    const chartOptions = ref({
      candlestick: {
        chart: {
          id: "candlestickChart",
          type: "candlestick",
          height: 350,
          toolbar: { show: false },
          zoom: { enabled: false },
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: "#37D80A",
              downward: "#FF4023",
            },
            wick: {
              useFillColor: true,
            },
          },
        },
        fill: {
          opacity: 1,
        },
        xaxis: {
          type: "datetime",
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
            formatter: (value: string) => {
              return formatDateLabel(value, activePeriod.value);
            },
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
          labels: {
            show: true,
            style: {
              colors: "#3A4252",
              fontSize: "12px",
            },
            formatter: (value: number) => `$${value.toFixed(2)}`,
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
        grid: {
          show: true,
          borderColor: "#F6F7F9",
        },
        tooltip: {
          enabled: true,
          x: {
            formatter: (value: number) => {
              return new Date(value).toLocaleString();
            },
          },
        },
      },
      volume: {
        chart: {
          type: "bar",
          height: 160,
          toolbar: { show: false },
          brush: {
            enabled: true,
            target: "candlestickChart",
          },
          selection: {
            enabled: true,
            xaxis: {
              min: new Date().getTime() - 30 * 24 * 60 * 60 * 1000,
              max: new Date().getTime(),
            },
            fill: {
              color: "#ccc",
              opacity: 0.4,
            },
            stroke: {
              color: "#0D47A1",
            },
          },
        },
        fill: {
          opacity: 1,
        },
        colors: ["#605DFF"],
        xaxis: {
          type: "datetime",
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
            formatter: (value: string) => {
              return formatDateLabel(value, activePeriod.value);
            },
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
          labels: {
            show: true,
            style: {
              colors: "#3A4252",
              fontSize: "12px",
            },
            formatter: (value: number) => value.toFixed(0),
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
        grid: {
          show: true,
          borderColor: "#F6F7F9",
        },
      },
    });

    function changePeriod(period: TimePeriod) {
      activePeriod.value = period;
      priceSeries.value = chartData.value[period].priceSeries;
      volumeSeries.value = chartData.value[period].volumeSeries;
    }

    onMounted(() => {
      isClient.value = true;
    });

    // Helper function to format date labels based on period
    function formatDateLabel(timestamp: string, period: TimePeriod): string {
      const date = new Date(Number(timestamp));
      switch (period) {
        case "1h":
          return date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
        case "1d":
          return date.toLocaleTimeString([], { hour: "2-digit" });
        case "1w":
          return date.toLocaleDateString([], { weekday: "short" });
        case "1m":
          return date.toLocaleDateString([], {
            day: "numeric",
            month: "short",
          });
        default:
          return date.toLocaleDateString();
      }
    }

    // Generate realistic chart data
    function generateChartData(period: TimePeriod): ChartData {
      const now = new Date();
      let count = 24;
      let intervalMinutes = 5;
      let basePrice = 100 + Math.random() * 50;

      switch (period) {
        case "1h":
          count = 12; // 5-minute intervals for 1 hour
          intervalMinutes = 5;
          break;
        case "1d":
          count = 24; // 1-hour intervals for 1 day
          intervalMinutes = 60;
          break;
        case "1w":
          count = 7; // 1-day intervals for 1 week
          intervalMinutes = 1440;
          break;
        case "1m":
          count = 30; // 1-day intervals for 1 month
          intervalMinutes = 1440;
          break;
      }

      const priceData = [];
      const volumeData = [];
      let currentPrice = basePrice;

      for (let i = 0; i < count; i++) {
        const date = new Date(
          now.getTime() - (count - i - 1) * intervalMinutes * 60000
        );

        // Simulate price movement
        const priceChange = (Math.random() - 0.5) * (period === "1h" ? 0.5 : 2);
        const newPrice = currentPrice * (1 + priceChange / 100);
        const open = currentPrice;
        const close = newPrice;
        const high = Math.max(open, close) * (1 + Math.random() * 0.01);
        const low = Math.min(open, close) * (1 - Math.random() * 0.01);

        // Simulate volume (higher when price moves more)
        const volume = Math.abs(priceChange) * 1000 + Math.random() * 500;

        priceData.push({
          x: date,
          y: [open, high, low, close],
        });

        volumeData.push({
          x: date,
          y: volume,
        });

        currentPrice = close;
      }

      return {
        priceSeries: [
          {
            name: `Price (${period})`,
            data: priceData,
          },
        ],
        volumeSeries: [
          {
            name: `Volume (${period})`,
            data: volumeData,
          },
        ],
      };
    }

    return {
      isClient,
      periods,
      priceSeries,
      volumeSeries,
      chartOptions,
      activePeriod,
      changePeriod,
    };
  },
});
</script>
