<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md mb-[25px]"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Client Ratings</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md bg-[#f5f7f8] dark:bg-[#0a0e19] py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-100 dark:hover:bg-dark': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              {{ selectedFilter }}
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"
              ></i>
            </span>
          </button>

          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li v-for="filter in filters" :key="filter">
              <button
                type="button"
                @click="selectFilter(filter)"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                :class="{ 'font-semibold': selectedFilter === filter }"
              >
                {{ filter }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="trezo-card-content" id="clientRatingsSlides">
      <Swiper
        :spaceBetween="20"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :pagination="{
          el: '.swiper-pagination2',
          clickable: true,
        }"
        :breakpoints="{
          640: {
            slidesPerView: 2,
          },
          768: {
            spaceBetween: 25,
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 25,
            slidesPerView: 3,
          },
          1440: {
            spaceBetween: 25,
            slidesPerView: 3,
          },
        }"
        :modules="modules"
        class="mySwiper2"
      >
        <SwiperSlide
          v-for="rating in filteredRatings"
          :key="rating.id"
          class="p-[20px] md:p-[25px] rounded-md"
          :class="getCardBgClass(rating)"
        >
          <div class="flex items-center gap-[12px] mb-[20px] md:mb-[25px]">
            <img
              :src="rating.userImage"
              alt="user-image"
              class="rounded-full w-[38px]"
            />
            <div>
              <h6 class="!font-semibold !text-base !mb-[3px]">
                {{ rating.name }}
              </h6>
              <span class="block text-xs">{{ rating.location }}</span>
            </div>
          </div>
          <p class="text-black dark:text-white !text-md !leading-[1.5]">
            "{{ rating.comment }}"
          </p>
          <div class="flex items-center justify-between">
            <div
              class="text-base flex items-center leading-none gap-[1px] text-orange-500"
            >
              <i
                v-for="star in 5"
                :key="star"
                :class="getStarClass(star, rating.rating)"
              ></i>
              <span
                class="relative text-gray-500 dark:text-gray-400 top-[1.7px] text-xs ltr:ml-[2px] rtl:mr-[2px]"
              >
                {{ rating.rating.toFixed(1) }}
              </span>
            </div>
            <div class="text-[30px] text-white leading-none">
              <i class="ri-double-quotes-r"></i>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="swiper-pagination2"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import image1 from "@/assets/images/users/user72.jpg";
import image2 from "@/assets/images/users/user73.jpg";
import image3 from "@/assets/images/users/user74.jpg";
import image4 from "@/assets/images/users/user75.jpg";
import image5 from "@/assets/images/users/user76.jpg";
import image6 from "@/assets/images/users/user77.jpg";

interface ClientRating {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
  userImage: string;
  date: Date;
}

export default defineComponent({
  name: "ClientRatings",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const filters = ["Top Rated", "Latest", "Oldest"];
    const selectedFilter = ref("Latest");

    const ratings = ref<ClientRating[]>([
      {
        id: 1,
        name: "David Carlen",
        location: "New Castle, United Kingdom",
        comment:
          "Working with William was an absolute pleasure. His market knowledge and attention to detail helped us sell our home quickly and at a great price.",
        rating: 5.0,
        userImage: image1,
        date: new Date(2023, 5, 15),
      },
      {
        id: 2,
        name: "Zinia Anderson",
        location: "New Brunchwick, Canada",
        comment:
          "William's professionalism and responsiveness set him apart from other agents. He listened, and delivered outstanding results.",
        rating: 4.5,
        userImage: image2,
        date: new Date(2023, 5, 10),
      },
      {
        id: 3,
        name: "Walter White",
        location: "New York, USA",
        comment:
          "Thanks to William, I felt confident every step of the way during my first home purchase. His friendly demeanor and expert advice helped us.",
        rating: 4.0,
        userImage: image3,
        date: new Date(2023, 4, 28),
      },
      {
        id: 4,
        name: "Sarah Johnson",
        location: "Los Angeles, USA",
        comment:
          "Working with William was an absolute pleasure. His market knowledge and attention to detail helped us sell our home quickly and at a great price.",
        rating: 5.0,
        userImage: image4,
        date: new Date(2023, 4, 20),
      },
      {
        id: 5,
        name: "Michael Brown",
        location: "Chicago, USA",
        comment:
          "William's professionalism and responsiveness set him apart from other agents. He listened, and delivered outstanding results",
        rating: 4.5,
        userImage: image5,
        date: new Date(2023, 3, 15),
      },
      {
        id: 6,
        name: "Emily Davis",
        location: "Toronto, Canada",
        comment:
          "Thanks to William, I felt confident every step of the way during my first home purchase. His friendly demeanor and expert advice helped us.",
        rating: 4.0,
        userImage: image6,
        date: new Date(2023, 3, 5),
      },
    ]);

    // Filter ratings based on selected option
    const filteredRatings = computed(() => {
      const sortedRatings = [...ratings.value];

      switch (selectedFilter.value) {
        case "Top Rated":
          return sortedRatings.sort((a, b) => b.rating - a.rating);
        case "Latest":
          return sortedRatings.sort(
            (a, b) => b.date.getTime() - a.date.getTime()
          );
        case "Oldest":
          return sortedRatings.sort(
            (a, b) => a.date.getTime() - b.date.getTime()
          );
        default:
          return sortedRatings;
      }
    });

    // Select filter option
    const selectFilter = (filter: string) => {
      selectedFilter.value = filter;
      isActive.value = false;
    };

    // Get star icon class based on rating
    const getStarClass = (star: number, rating: number) => {
      if (star <= Math.floor(rating)) {
        return "ri-star-fill";
      }
      if (star - 0.5 <= rating && rating < star) {
        return "ri-star-half-line";
      }
      return "ri-star-line";
    };

    // Get card background class based on rating
    const getCardBgClass = (rating: ClientRating) => {
      if (rating.rating >= 4.8) return "bg-primary-50 dark:bg-[#0a0e19]";
      if (rating.rating >= 4.5) return "bg-orange-50 dark:bg-[#0a0e19]";
      return "bg-success-50 dark:bg-[#0a0e19]";
    };

    return {
      modules: [Autoplay, Pagination],
      isActive,
      toggleActive,
      filters,
      selectedFilter,
      selectFilter,
      filteredRatings,
      getStarClass,
      getCardBgClass,
    };
  },
});
</script>
