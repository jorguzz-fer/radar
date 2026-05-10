<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Gallery Style - 1</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[25px]">
        <div class="rounded-md">
          <img
            src="@/assets/images/gallery/gallery1.jpg"
            alt="gallery-image"
            class="rounded-md"
          />
        </div>
        <div class="rounded-md">
          <img
            src="@/assets/images/gallery/gallery2.jpg"
            alt="gallery-image"
            class="rounded-md"
          />
        </div>
        <div class="rounded-md">
          <img
            src="@/assets/images/gallery/gallery3.jpg"
            alt="gallery-image"
            class="rounded-md"
          />
        </div>
        <div class="rounded-md">
          <img
            src="@/assets/images/gallery/gallery4.jpg"
            alt="gallery-image"
            class="rounded-md"
          />
        </div>
        <div class="rounded-md">
          <img
            src="@/assets/images/gallery/gallery5.jpg"
            alt="gallery-image"
            class="rounded-md"
          />
        </div>
        <div class="rounded-md">
          <img
            src="@/assets/images/gallery/gallery6.jpg"
            alt="gallery-image"
            class="rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryStyleTwo",
};
</script>
