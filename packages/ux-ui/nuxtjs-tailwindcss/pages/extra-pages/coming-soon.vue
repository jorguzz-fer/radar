<template>
  <div class="bg-white dark:bg-[#0a0e19] py-[30px] h-screen overflow-x-hidden">
    <div class="w-full h-full table">
      <div class="table-cell align-middle">
        <div
          class="mx-auto px-[12.5px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1255px]"
        >
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
            <div
              class="xl:ltr:-mr-[25px] xl:rtl:-ml-[25px] rounded-md order-2 lg:order-1"
            >
              <img
                src="@/assets/images/coming-soon.jpg"
                alt="coming-soon-image"
                class="rounded-md"
              />
            </div>
            <div
              class="xl:ltr:pl-[90px] xl:rtl:pr-[90px] 2xl:ltr:pl-[120px] 2xl:rtl:pr-[120px] order-1 lg:order-2"
            >
              <img
                src="@/assets/images/logo-big.svg"
                alt="logo"
                class="inline-block dark:hidden"
              />
              <img
                src="@/assets/images/white-logo-big.svg"
                alt="logo"
                class="hidden dark:inline-block"
              />
              <div class="my-[17px] md:my-[25px]">
                <h1
                  class="font-semibold text-[22px] md:text-xl lg:text-2xl 2xl:text-4xl mb-[5px] md:mb-[12px]"
                >
                  We're working on launching soon, stay tuned!
                </h1>
                <p class="font-medium leading-[1.5] lg:text-md">
                  We're coming soon..
                </p>
              </div>
              <div class="countdown mb-[10px]" id="comingSoonCountDown">
                <div
                  class="inline-block ltr:mr-[20px] ltr:md:mr-[25px] rtl:ml-[20px] rtl:md:ml-[25px] mb-[15px]"
                >
                  <span
                    id="days"
                    class="block text-black dark:text-white font-bold text-xl lg:text-2xl"
                  >
                    {{ countdown.days }}
                  </span>
                  Days
                </div>
                <div
                  class="inline-block ltr:mr-[20px] ltr:md:mr-[25px] rtl:ml-[20px] rtl:md:ml-[25px] mb-[15px]"
                >
                  <span
                    id="hours"
                    class="block text-black dark:text-white font-bold text-xl lg:text-2xl"
                  >
                    {{ countdown.hours }}
                  </span>
                  Hours
                </div>
                <div
                  class="inline-block ltr:mr-[20px] ltr:md:mr-[25px] rtl:ml-[20px] rtl:md:ml-[25px] mb-[15px]"
                >
                  <span
                    id="minutes"
                    class="block text-black dark:text-white font-bold text-xl lg:text-2xl"
                  >
                    {{ countdown.minutes }}
                  </span>
                  Minutes
                </div>
                <div
                  class="inline-block ltr:mr-[20px] ltr:md:mr-[25px] rtl:ml-[20px] rtl:md:ml-[25px] mb-[15px]"
                >
                  <span
                    id="seconds"
                    class="block text-black dark:text-white font-bold text-xl lg:text-2xl"
                  >
                    {{ countdown.seconds }}
                  </span>
                  Seconds
                </div>
              </div>

              <div class="mb-[15px] relative">
                <label
                  class="mb-[10px] md:mb-[12px] text-black dark:text-white font-medium block"
                >
                  Be the first to know when our site is live
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="example@trezo.com"
                />
              </div>

              <button
                type="submit"
                class="md:text-md block w-full text-center transition-all rounded-md font-medium py-[12px] px-[25px] text-white bg-primary-500 hover:bg-primary-400"
              >
                <span class="flex items-center justify-center gap-[5px]">
                  <i class="material-symbols-outlined"> autorenew </i>
                  Send
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from "vue";

export default defineComponent({
  name: "ComingSoonPage",
  setup() {
    const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    let countdownInterval: ReturnType<typeof setInterval> | undefined;

    const startCountdown = () => {
      const targetDate = new Date("2026-12-31T23:59:59").getTime();

      countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference > 0) {
          countdown.value.days = Math.floor(
            timeDifference / (1000 * 60 * 60 * 24)
          );
          countdown.value.hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          countdown.value.minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          );
          countdown.value.seconds = Math.floor(
            (timeDifference % (1000 * 60)) / 1000
          );
        } else {
          countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
          clearInterval(countdownInterval);
        }
      }, 1000);
    };

    onMounted(() => {
      startCountdown();
    });

    onBeforeUnmount(() => {
      clearInterval(countdownInterval);
    });

    return {
      countdown,
    };
  },
});
</script>
