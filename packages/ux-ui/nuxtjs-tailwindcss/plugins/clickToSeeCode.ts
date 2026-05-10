import { defineNuxtPlugin } from "#app";
import type { Directive } from "vue";

const clickToSeeCodeDirective: Directive = {
  mounted(el: HTMLElement) {
    const buttons = el.querySelectorAll<HTMLElement>(".clickToSeeCodeBtn");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetId = button.getAttribute("data-target");
        if (targetId) {
          const targetDiv = document.getElementById(targetId);
          if (targetDiv) {
            // Toggle the active class
            targetDiv.classList.toggle("active");

            // Change the button text based on the div's state
            button.textContent = targetDiv.classList.contains("active")
              ? "Click to Hide Code:"
              : "Click to See Code:";
          }
        }
      });
    });
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("click-to-see-code", clickToSeeCodeDirective);
});
