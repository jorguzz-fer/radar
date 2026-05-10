<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] py-[20px] md:py-[80px] px-[20px] md:px-[25px] rounded-md"
  >
    <div class="trezo-card-content text-center">
      <img
        src="@/assets/images/starter.png"
        class="inline-block"
        alt="starter-image"
      />
      <h4
        class="md:max-w-[550px] mx-auto leading-[1.5] mt-[25px] md:mt-[38px] mb-[20px] md:mb-[30px] text-[19px] md:text-[21px]"
      >
        Create something beautiful, like a masterpiece or a really good
        sandwich.
      </h4>
      <NuxtLink
        to="/dashboard"
        class="inline-block rounded-md transition-all font-medium md:text-md py-[12px] px-[25px] text-white bg-primary-500 hover:bg-primary-400"
      >
        Getting Started
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Starter",
};
</script>
