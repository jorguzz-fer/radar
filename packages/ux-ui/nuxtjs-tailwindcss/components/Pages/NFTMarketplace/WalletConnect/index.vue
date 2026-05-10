<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-[25px] mb-[25px]"
  >
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] text-center rounded-md"
    >
      <div class="trezo-card-content md:py-[13px]">
        <img
          src="@/assets/images/wallet/metamask.svg"
          class="inline-block"
          alt="metamask"
        />
        <h3 class="!text-lg !mb-[12px] mt-[18px]">Metamask</h3>
        <p
          class="text-gray-400 mx-auto md:max-w-[285px] leading-[1.6] mb-[20px]"
        >
          MetaMask is a software cryptocurrency wallet used to interact with the
          Ethereum blockchain.
        </p>
        <button
          class="text-[15px] md:text-md rounded-[7px] bg-primary-500 text-white font-medium py-[6px] px-[40px] transition-all hover:bg-primary-400 inline-block"
        >
          Connect
        </button>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] text-center rounded-md"
    >
      <div class="trezo-card-content md:py-[13px]">
        <img
          src="@/assets/images/wallet/binance.svg"
          class="inline-block"
          alt="binance"
        />
        <h3 class="!text-lg !mb-[12px] mt-[18px]">Binance</h3>
        <p
          class="text-gray-400 mx-auto md:max-w-[285px] leading-[1.6] mb-[20px]"
        >
          Binance offers a relatively secure, versatile way to invest in and
          trade cryptocurrencies.
        </p>
        <button
          class="text-[15px] md:text-md rounded-[7px] bg-primary-500 text-white font-medium py-[6px] px-[40px] transition-all hover:bg-primary-400 inline-block"
        >
          Connect
        </button>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] text-center rounded-md"
    >
      <div class="trezo-card-content md:py-[13px]">
        <img
          src="@/assets/images/wallet/coinbase.svg"
          class="inline-block"
          alt="coinbase"
        />
        <h3 class="!text-lg !mb-[12px] mt-[18px]">Coinbase</h3>
        <p
          class="text-gray-400 mx-auto md:max-w-[285px] leading-[1.6] mb-[20px]"
        >
          Coinbase Wallet is a software product that gives you access to a wide
          spectrum.
        </p>
        <button
          class="text-[15px] md:text-md rounded-[7px] bg-primary-500 text-white font-medium py-[6px] px-[40px] transition-all hover:bg-primary-400 inline-block"
        >
          Connect
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WalletConnect",
});
</script>
