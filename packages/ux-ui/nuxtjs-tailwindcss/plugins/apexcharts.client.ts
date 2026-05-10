import { defineNuxtPlugin } from "#app";
import VueApexCharts from "vue3-apexcharts";
import ApexCharts from "apexcharts";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.vueApp.use(VueApexCharts);
    nuxtApp.vueApp.config.globalProperties.$apexcharts = ApexCharts;
  }
});
