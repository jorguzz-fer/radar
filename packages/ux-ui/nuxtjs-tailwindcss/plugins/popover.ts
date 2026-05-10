import { defineNuxtPlugin } from "#app";
import popover from "@/utils/popover";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("custom-popover", popover);
});
