import type { DirectiveBinding } from "vue";

interface HTMLElementWithCleanup extends HTMLElement {
  _cleanup?: () => void;
}

const customPopoverDirective: {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => void;
  unmounted: (el: HTMLElement) => void;
} = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    // Create the popover text element
    const popoverText = document.createElement("span");
    popoverText.classList.add("popover-text");
    popoverText.textContent = binding.value || el.getAttribute("data-text");

    el.appendChild(popoverText);

    // Toggle popover visibility on click
    const togglePopover = (e: MouseEvent) => {
      e.stopPropagation();
    };

    const closePopovers = () => {
      const popovers = document.querySelectorAll(".popover-text");
      popovers.forEach((popover) => {
        popover.classList.remove("visible");
      });
    };

    el.addEventListener("click", togglePopover);

    document.addEventListener("click", closePopovers);

    // Cleanup listeners on unmount
    (el as HTMLElementWithCleanup)._cleanup = () => {
      document.removeEventListener("click", closePopovers);
    };
  },
  unmounted(el: HTMLElementWithCleanup) {
    if (el._cleanup) {
      el._cleanup();
    }
  },
};

export default customPopoverDirective;
