<template>
  <div
    class="trezo-card mb-[25px] p-[20px] md:p-[25px] relative z-[1] rounded-md"
    style="background: linear-gradient(92deg, #23272e 7.31%, #3f5272 97.89%)"
  >
    <div
      class="trezo-card-content md:py-[33px] md:px-[15px] lg:flex justify-between items-center"
    >
      <div>
        <h3 class="!text-white !text-xl md:!text-2xl !mb-[5px]">
          Manage Your NFT From One Place
        </h3>
        <p class="text-gray-300">
          The world’s first and largest digital marketplace for discover,
          collect, sell and create your own NFTs.
        </p>
      </div>
      <div>
        <NuxtLink
          to="/nft-marketplace/create-nft"
          class="text-[15px] md:text-md mt-[15px] lg:mt-0 rounded-[4px] bg-primary-500 text-white font-medium py-[7px] px-[30px] transition-all hover:bg-primary-400 inline-block"
        >
          Create NFT
        </NuxtLink>
      </div>
    </div>
    <img
      src="@/assets/images/nfts/shape.png"
      class="absolute top-0 ltr:right-0 rtl:left-0 -z-[1]"
      alt="shape"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ManageYourNFT",
});
</script>
