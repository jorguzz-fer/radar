<template>
  <div
    class="lg:flex justify-between mb-[20px] md:mb-[30px] lg:mb-[50px] lg:px-[7px]"
  >
    <div>
      <h3 class="!text-white !text-xl md:!text-2xl !mb-[5px]">
        Manage Your NFT From One Place
      </h3>
      <p class="text-gray-300">
        The world’s first and largest digital marketplace for discover, collect,
        sell and create your own NFTs.
      </p>
    </div>
    <div>
      <NuxtLink
        to="/nft-marketplace/create-nft"
        class="text-[15px] md:text-md mt-[15px] lg:mt-[3px] rounded-[4px] bg-primary-500 text-white font-medium py-[7px] px-[30px] transition-all hover:bg-primary-400 inline-block"
      >
        Create NFT
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ManageYourNFT",
});
</script>
