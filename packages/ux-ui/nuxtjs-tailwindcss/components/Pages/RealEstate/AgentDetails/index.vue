<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
      >
        <div class="trezo-card-content">
          <h3 class="!text-md md:!text-lg !mb-[12px]">About Harold Cook</h3>
          <p>
            With over a decade of experience in the real estate market, Harold
            Cook has built a reputation for his in-depth knowledge of
            residential and commercial properties. His commitment to client
            satisfaction, combined with an extensive network, ensures a smooth
            and efficient process, whether buying or selling.
          </p>
          <p>
            Harold’s approach focuses on understanding each client’s unique
            needs and goals, providing tailored advice and insights. His market
            expertise and negotiation skills consistently deliver the best
            outcomes, helping clients make informed real estate decisions.
          </p>
          <h3
            class="!text-md md:!text-lg mt-[20px] md:mt-[25px] lg:mt-[30px] !mb-[15px]"
          >
            Property Status
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-[25px] mb-[25px]">
            <PropertiesForSaleChart />

            <PropertiesForRentChart />
          </div>
          <h3
            class="!text-md md:!text-lg mt-[20px] md:mt-[25px] lg:mt-[30px] !mb-[12px]"
          >
            Specialization
          </h3>
          <ul>
            <li
              class="relative ltr:pl-[17px] rtl:pr-[17px] mb-[10px] last:mb-0"
            >
              <span
                class="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-primary-500 mt-px"
              ></span>
              Expert in City A and surrounding neighborhoods
            </li>
            <li
              class="relative ltr:pl-[17px] rtl:pr-[17px] mb-[10px] last:mb-0"
            >
              <span
                class="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-primary-500 mt-px"
              ></span>
              Proficient in handling first-time homebuyers, seasoned investors,
              and luxury clients
            </li>
            <li
              class="relative ltr:pl-[17px] rtl:pr-[17px] mb-[10px] last:mb-0"
            >
              <span
                class="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-primary-500 mt-px"
              ></span>
              Strong understanding of local market trends and pricing strategies
            </li>
            <li
              class="relative ltr:pl-[17px] rtl:pr-[17px] mb-[10px] last:mb-0"
            >
              <span
                class="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-primary-500 mt-px"
              ></span>
              Provides comprehensive property assessments and personalized
              marketing plans
            </li>
          </ul>
          <h3
            class="!text-md md:!text-lg mt-[20px] md:mt-[25px] lg:mt-[30px] !mb-[12px]"
          >
            Recent Achievements
          </h3>
          <ul>
            <li
              class="relative ltr:pl-[17px] rtl:pr-[17px] mb-[10px] last:mb-0"
            >
              <span
                class="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-primary-500 mt-px"
              ></span>
              Closed over $10 million in sales in 2023
            </li>
            <li
              class="relative ltr:pl-[17px] rtl:pr-[17px] mb-[10px] last:mb-0"
            >
              <span
                class="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-primary-500 mt-px"
              ></span>
              Top Agent Award at Prime Realty for 3 consecutive years
            </li>
            <li
              class="relative ltr:pl-[17px] rtl:pr-[17px] mb-[10px] last:mb-0"
            >
              <span
                class="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-primary-500 mt-px"
              ></span>
              Successfully negotiated deals for 20+ residential and commercial
              properties in the past year
            </li>
            <li
              class="relative ltr:pl-[17px] rtl:pr-[17px] mb-[10px] last:mb-0"
            >
              <span
                class="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-primary-500 mt-px"
              ></span>
              5-star client satisfaction rating
            </li>
          </ul>
          <h3
            class="!text-md md:!text-lg mt-[20px] md:mt-[25px] lg:mt-[30px] !mb-[15px]"
          >
            Client Testimonials
          </h3>
          <div
            class="border-b border-primary-50 dark:border-[#172036] mb-[15px] pb-[15px] last:border-b-0 last:pb-0 last:mb-0"
          >
            <div class="flex items-center justify-between mb-[12px]">
              <div class="flex items-center gap-[12px]">
                <img
                  src="@/assets/images/users/user65.jpg"
                  class="w-[45px] rounded-full"
                  alt="user-image"
                />
                <div>
                  <span
                    class="block sm:text-[15px] text-black dark:text-white font-semibold"
                  >
                    Irene George
                  </span>
                  <span class="block"> 15m ago </span>
                </div>
              </div>
              <div class="flex items-center gap-[3px]">
                <i class="ri-star-fill text-orange-500"></i>
                <i class="ri-star-fill text-orange-500"></i>
                <i class="ri-star-fill text-orange-500"></i>
                <i class="ri-star-fill text-orange-500"></i>
                <i class="ri-star-fill text-orange-500"></i>
              </div>
            </div>
            <p class="md:max-w-[550px]">
              "Great service! Found exactly what I needed for my property, and
              the process was smooth and hassle-free."
            </p>
          </div>
          <div
            class="border-b border-primary-50 dark:border-[#172036] mb-[15px] pb-[15px] last:border-b-0 last:pb-0 last:mb-0"
          >
            <div class="flex items-center justify-between mb-[12px]">
              <div class="flex items-center gap-[12px]">
                <img
                  src="@/assets/images/users/user64.jpg"
                  class="w-[45px] rounded-full"
                  alt="user-image"
                />
                <div>
                  <span
                    class="block sm:text-[15px] text-black dark:text-white font-semibold"
                  >
                    Jose Grafton
                  </span>
                  <span class="block"> 22m ago </span>
                </div>
              </div>
              <div class="flex items-center gap-[3px]">
                <i class="ri-star-fill text-orange-500"></i>
                <i class="ri-star-fill text-orange-500"></i>
                <i class="ri-star-fill text-orange-500"></i>
                <i class="ri-star-fill text-orange-500"></i>
                <i class="ri-star-half-fill text-orange-500"></i>
              </div>
            </div>
            <p class="md:max-w-[550px]">
              "Impressed with the timely responses and professional approach.
              Highly recommend for anyone seeking real estate solutions!"
            </p>
          </div>
          <div
            class="border-b border-primary-50 dark:border-[#172036] mb-[15px] pb-[15px] last:border-b-0 last:pb-0 last:mb-0"
          >
            <div class="flex items-center justify-between mb-[12px]">
              <div class="flex items-center gap-[12px]">
                <img
                  src="@/assets/images/users/user63.jpg"
                  class="w-[45px] rounded-full"
                  alt="user-image"
                />
                <div>
                  <span
                    class="block sm:text-[15px] text-black dark:text-white font-semibold"
                  >
                    Paula McClelland
                  </span>
                  <span class="block"> 30m ago </span>
                </div>
              </div>
              <div class="flex items-center gap-[3px]">
                <i class="ri-star-fill text-orange-500"></i>
                <i class="ri-star-fill text-orange-500"></i>
                <i class="ri-star-fill text-orange-500"></i>
                <i class="ri-star-fill text-orange-500"></i>
                <i class="ri-star-line text-orange-500"></i>
              </div>
            </div>
            <p class="md:max-w-[550px]">
              "The entire process was seamless, and I couldn't be happier with
              the results. Excellent customer service throughout!"
            </p>
          </div>
          <div
            class="border-b border-primary-50 dark:border-[#172036] mb-[15px] pb-[15px] last:border-b-0 last:pb-0 last:mb-0"
          >
            <div class="flex items-center justify-between mb-[12px]">
              <div class="flex items-center gap-[12px]">
                <img
                  src="@/assets/images/users/user62.jpg"
                  class="w-[45px] rounded-full"
                  alt="user-image"
                />
                <div>
                  <span
                    class="block sm:text-[15px] text-black dark:text-white font-semibold"
                  >
                    Virgil Martin
                  </span>
                  <span class="block"> 49m ago </span>
                </div>
              </div>
              <div class="flex items-center gap-[3px]">
                <i class="ri-star-fill text-orange-500"></i>
                <i class="ri-star-fill text-orange-500"></i>
                <i class="ri-star-fill text-orange-500"></i>
                <i class="ri-star-fill text-orange-500"></i>
                <i class="ri-star-fill text-orange-500"></i>
              </div>
            </div>
            <p class="md:max-w-[550px]">
              "Highly satisfied with the attention to detail and prompt support.
              They made everything easy and stress-free!"
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-1">
      <Profile />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Profile from "./Profile.vue";
import PropertiesForSaleChart from "./PropertiesForSaleChart.vue";
import PropertiesForRentChart from "./PropertiesForRentChart.vue";

export default defineComponent({
  name: "AgentDetails",
  components: {
    Profile,
    PropertiesForSaleChart,
    PropertiesForRentChart,
  },
});
</script>
