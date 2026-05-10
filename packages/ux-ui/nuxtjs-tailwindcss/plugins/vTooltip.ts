import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const vTooltip = {
    mounted(el: HTMLElement, binding: { value: string }) {
      const tooltipText = document.createElement("span");
      tooltipText.classList.add("tooltip-text");
      tooltipText.textContent = binding.value;
      tooltipText.style.whiteSpace = "nowrap";
      el.appendChild(tooltipText);

      el.addEventListener("mouseenter", () => {
        tooltipText.style.visibility = "visible";
        tooltipText.style.opacity = "1";
      });

      el.addEventListener("mouseleave", () => {
        tooltipText.style.visibility = "hidden";
        tooltipText.style.opacity = "0";
      });
    },
  };

  nuxtApp.vueApp.directive("tooltip", vTooltip);
});
