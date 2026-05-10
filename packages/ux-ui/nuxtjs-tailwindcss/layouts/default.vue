<template>
  <div>
    <LayoutLeftSidebar v-if="shouldShowSidebar && !isNotFound" />
    <LayoutTopHeader v-if="shouldShowHeader && !isNotFound" />

    <div
      :class="[
        'main-content transition-all flex flex-col overflow-hidden min-h-screen',
        {
          active: stateStoreInstance.open,
          'padding-minus': shouldShowPaddingZero || isNotFound,
        },
      ]"
    >
      <NuxtPage />
      <div class="grow"></div>
      <LayoutMainFooter v-if="shouldShowFooter && !isNotFound" />
    </div>
    <LayoutAddNewTaskPopup />
    <LayoutAddNewCardPopup />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  watchEffect,
  computed,
  watch,
} from "vue";
import stateStore from "@/utils/store";
import { useRoute } from "vue-router";

const direction = ref("ltr");

export default defineComponent({
  setup() {
    const stateStoreInstance = stateStore;
    const route = useRoute();

    const hiddenRoutes = [
      "/",
      "/features",
      "/team",
      "/faq",
      "/contact",
      "/authentication/sign-in",
      "/authentication/sign-up",
      "/authentication/forgot-password",
      "/authentication/reset-password",
      "/authentication/confirm-email",
      "/authentication/lock-screen",
      "/authentication/logout",
      "/extra-pages/coming-soon",
    ];

    const shouldShowSidebar = computed(
      () => !hiddenRoutes.includes(route.path)
    );
    const shouldShowPaddingZero = computed(() =>
      hiddenRoutes.includes(route.path)
    );
    const shouldShowHeader = computed(() => !hiddenRoutes.includes(route.path));
    const shouldShowFooter = computed(() => !hiddenRoutes.includes(route.path));

    const isNotFound = computed(() =>
      route.matched.some(
        (record: { path: string }) => record.path === "/:pathMatch(.*)*"
      )
    );

    onMounted(() => {
      watchEffect(() => {
        if (typeof document !== "undefined") {
          if (stateStore.open) {
            document.body.classList.remove("sidebar-show");
            document.body.classList.add("sidebar-hide");
          } else {
            document.body.classList.remove("sidebar-hide");
            document.body.classList.add("sidebar-show");
          }
        }
      });

      if (typeof document !== "undefined") {
        document.body.setAttribute("dir", direction.value);
      }
    });

    watch(
      direction,
      (newDirection: string) => {
        if (typeof document !== "undefined") {
          document.body.setAttribute("dir", newDirection);
        }
      },
      { immediate: true }
    );

    return {
      shouldShowSidebar,
      shouldShowPaddingZero,
      shouldShowHeader,
      shouldShowFooter,
      isNotFound,
      stateStoreInstance,
    };
  },
});
</script>
