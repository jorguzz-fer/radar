<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Transaction History</h5>
      </div>
      <div class="trezo-card-subtitle mt-[10px] sm:mt-0">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              Oct 01 - Oct 31, 2025
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"
              ></i>
            </span>
          </button>
          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Sep 01 - Sep 30, 2025
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Aug 01 - Aug 31, 2025
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Jul 01 - Jul 31, 2025
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th
                class="font-medium text-xs ltr:text-left rtl:text-right px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Coin
              </th>
              <th
                class="font-medium text-xs ltr:text-right rtl:text-left px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Date
              </th>
              <th
                class="font-medium text-xs ltr:text-right rtl:text-left px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Amount
              </th>
              <th
                class="font-medium text-xs ltr:text-right rtl:text-left px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Price
              </th>
              <th
                class="font-medium text-xs ltr:text-right rtl:text-left px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Type
              </th>
              <th
                class="font-medium text-xs ltr:text-right rtl:text-left px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Total Value
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="w-[22px]">
                    <img
                      alt="cryptocurrency-image"
                      src="@/assets/images/cryptocurrencies/bitcoin.svg"
                    />
                  </div>
                  <span class="block font-medium ltr:ml-[8px] rtl:mr-[8px]">
                    Bitcoin
                    <span
                      class="text-gray-500 dark:text-gray-400 text-xs font-normal"
                      >(BTC)</span
                    >
                  </span>
                </div>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                2025-09-10
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                0.50 BTC
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                $27,500
              </td>
              <td
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="py-[3px] px-[8px] bg-success-100 dark:bg-[#15203c] text-success-600 inline-block rounded-sm font-medium text-xs"
                >
                  Buy
                </span>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                $13,500
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="w-[22px]">
                    <img
                      alt="cryptocurrency-image"
                      src="@/assets/images/cryptocurrencies/ethereum.svg"
                    />
                  </div>
                  <span class="block font-medium ltr:ml-[8px] rtl:mr-[8px]">
                    Ethereum
                    <span
                      class="text-gray-500 dark:text-gray-400 text-xs font-normal"
                      >(ETH)</span
                    >
                  </span>
                </div>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                2025-09-08
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                5.00 ETH
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                $1,750
              </td>
              <td
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="py-[3px] px-[8px] bg-danger-100 dark:bg-[#15203c] text-danger-500 inline-block rounded-sm font-medium text-xs"
                >
                  Sell
                </span>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                $8,750
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="w-[22px]">
                    <img
                      alt="cryptocurrency-image"
                      src="@/assets/images/cryptocurrencies/binance.svg"
                    />
                  </div>
                  <span class="block font-medium ltr:ml-[8px] rtl:mr-[8px]">
                    Binance
                    <span
                      class="text-gray-500 dark:text-gray-400 text-xs font-normal"
                      >(BNB)</span
                    >
                  </span>
                </div>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                2025-09-05
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                100 SOL
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                $250
              </td>
              <td
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="py-[3px] px-[8px] bg-success-100 dark:bg-[#15203c] text-success-600 inline-block rounded-sm font-medium text-xs"
                >
                  Buy
                </span>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                $3,500
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="w-[22px]">
                    <img
                      alt="cryptocurrency-image"
                      src="@/assets/images/cryptocurrencies/tether.svg"
                    />
                  </div>
                  <span class="block font-medium ltr:ml-[8px] rtl:mr-[8px]">
                    Tether
                    <span
                      class="text-gray-500 dark:text-gray-400 text-xs font-normal"
                      >(USDT)</span
                    >
                  </span>
                </div>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                2025-08-30
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                10 BNB
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                $1.00
              </td>
              <td
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="py-[3px] px-[8px] bg-success-100 dark:bg-[#15203c] text-success-600 inline-block rounded-sm font-medium text-xs"
                >
                  Buy
                </span>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                $2,500
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="w-[22px]">
                    <img
                      alt="cryptocurrency-image"
                      src="@/assets/images/cryptocurrencies/xrp.svg"
                    />
                  </div>
                  <span class="block font-medium ltr:ml-[8px] rtl:mr-[8px]">
                    XRP
                    <span
                      class="text-gray-500 dark:text-gray-400 text-xs font-normal"
                      >(XRP)</span
                    >
                  </span>
                </div>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                2025-08-25
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                1,000 ADA
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                $0.50
              </td>
              <td
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="py-[3px] px-[8px] bg-danger-100 dark:bg-[#15203c] text-danger-500 inline-block rounded-sm font-medium text-xs"
                >
                  Sell
                </span>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                $250
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="w-[22px]">
                    <img
                      alt="cryptocurrency-image"
                      src="@/assets/images/cryptocurrencies/solana.svg"
                    />
                  </div>
                  <span class="block font-medium ltr:ml-[8px] rtl:mr-[8px]">
                    Solana
                    <span
                      class="text-gray-500 dark:text-gray-400 text-xs font-normal"
                      >(SOL)</span
                    >
                  </span>
                </div>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                2025-08-20
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                0.40 BTC
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                $35
              </td>
              <td
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="py-[3px] px-[8px] bg-danger-100 dark:bg-[#15203c] text-danger-500 inline-block rounded-sm font-medium text-xs"
                >
                  Sell
                </span>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                $11,800
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="w-[22px]">
                    <img
                      alt="cryptocurrency-image"
                      src="@/assets/images/cryptocurrencies/usdc.png"
                    />
                  </div>
                  <span class="block font-medium ltr:ml-[8px] rtl:mr-[8px]">
                    USDC
                    <span
                      class="text-gray-500 dark:text-gray-400 text-xs font-normal"
                      >(USDC)</span
                    >
                  </span>
                </div>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                2025-08-15
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                3.00 USDC
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                $0.9999
              </td>
              <td
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="py-[3px] px-[8px] bg-success-100 dark:bg-[#15203c] text-success-600 inline-block rounded-sm font-medium text-xs"
                >
                  Buy
                </span>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                $5,400
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination items="7" total="36" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "TransactionHistory",
  components: {
    Pagination,
  },
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    return {
      isActive,
      toggleActive,
    };
  },
});
</script>
