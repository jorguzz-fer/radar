<template>
  <div
    class="pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[150px] border-t border-gray-100 dark:border-[#172036]"
  >
    <div class="container 2xl:max-w-[1320px] mx-auto px-[12px]">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px]">
        <div class="ltr:xl:-mr-[35px] rtl:xl:-ml-[35px]">
          <NuxtLink
            to="/"
            class="inline-block max-w-[132px] mb-[20px] md:mb-[23px]"
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
          </NuxtLink>
          <p class="leading-[1.6]">
            With customizable dashboards tailored to your needs, collaborate
            effortlessly with your team and stay ahead with real-time updates.
          </p>
          <div class="mt-[20px] md:mt-[35px]">
            <a
              href="#"
              target="_blank"
              class="inline-block leading-none text-[20px] text-primary-600 transition-all hover:text-primary-500 ltr:mr-[5px] rtl:ml-[5px] ltr:last:mr-0 rtl:last:ml-0"
            >
              <i class="ri-facebook-fill"></i>
            </a>
            <a
              href="#"
              target="_blank"
              class="inline-block leading-none text-[20px] text-primary-600 transition-all hover:text-primary-500 ltr:mr-[5px] rtl:ml-[5px] ltr:last:mr-0 rtl:last:ml-0"
            >
              <i class="ri-twitter-x-fill"></i>
            </a>
            <a
              href="#"
              target="_blank"
              class="inline-block leading-none text-[20px] text-primary-600 transition-all hover:text-primary-500 ltr:mr-[5px] rtl:ml-[5px] ltr:last:mr-0 rtl:last:ml-0"
            >
              <i class="ri-linkedin-fill"></i>
            </a>
            <a
              href="#"
              target="_blank"
              class="inline-block leading-none text-[20px] text-primary-600 transition-all hover:text-primary-500 ltr:mr-[5px] rtl:ml-[5px] ltr:last:mr-0 rtl:last:ml-0"
            >
              <i class="ri-dribbble-fill"></i>
            </a>
          </div>
        </div>
        <div class="ltr:xl:pl-[142px] rtl:xl:pr-[142px]">
          <h3
            class="!leading-[1.2] !text-[16px] md:!text-lg !mb-[18px] !font-semibold"
          >
            Our Products
          </h3>
          <ul>
            <li class="mb-[10px] last:mb-0">
              <NuxtLink
                to="/dashboard"
                class="lg:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                Trezo Dashboard
              </NuxtLink>
            </li>
            <li class="mb-[10px] last:mb-0">
              <a
                href="javascript:void(0);"
                class="lg:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                Tagus Admin
              </a>
            </li>
            <li class="mb-[10px] last:mb-0">
              <a
                href="javascript:void(0);"
                class="lg:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                eCademy LMS
              </a>
            </li>
            <li class="mb-[10px] last:mb-0">
              <a
                href="javascript:void(0);"
                class="lg:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                Admash Template
              </a>
            </li>
          </ul>
        </div>
        <div class="ltr:xl:pl-[130px] rtl:xl:pr-[130px]">
          <h3
            class="!leading-[1.2] !text-[16px] md:!text-lg !mb-[18px] !font-semibold"
          >
            Quick Links
          </h3>
          <ul>
            <li class="mb-[10px] last:mb-0">
              <NuxtLink
                to="/"
                class="lg:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                Home
              </NuxtLink>
            </li>
            <li class="mb-[10px] last:mb-0">
              <NuxtLink
                to="/features"
                class="lg:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                Features
              </NuxtLink>
            </li>
            <li class="mb-[10px] last:mb-0">
              <NuxtLink
                to="/team"
                class="lg:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                Our Team
              </NuxtLink>
            </li>
            <li class="mb-[10px] last:mb-0">
              <NuxtLink
                to="/contact"
                class="lg:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                Contact
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="ltr:xl:pl-[80px] rtl:xl:pr-[80px]">
          <h3
            class="!leading-[1.2] !text-[16px] md:!text-lg !mb-[18px] !font-semibold"
          >
            Privacy Policy
          </h3>
          <ul>
            <li class="mb-[10px] last:mb-0">
              <NuxtLink
                to="/settings/terms-conditions"
                class="lg:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                Terms & Conditions
              </NuxtLink>
            </li>
            <li class="mb-[10px] last:mb-0">
              <a
                href="javascript:void(0);"
                class="lg:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                Cookie Policy
              </a>
            </li>
            <li class="mb-[10px] last:mb-0">
              <a
                href="javascript:void(0);"
                class="lg:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                Notice at Collection
              </a>
            </li>
            <li class="mb-[10px] last:mb-0">
              <NuxtLink
                to="/settings/privacy-policy"
                class="lg:text-[16px] inline-block text-gray-500 dark:text-gray-400 transition-all hover:text-primary-600"
              >
                Privacy Policy
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <CopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CopyRight from "./CopyRight.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  components: {
    CopyRight,
  },
});
</script>
