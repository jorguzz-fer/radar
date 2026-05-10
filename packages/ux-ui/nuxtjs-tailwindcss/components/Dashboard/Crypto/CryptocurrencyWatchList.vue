<template>
  <div class="trezo-card mb-[25px]">
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Cryptocurrency Watchlist</h5>
      </div>
    </div>

    <div class="trezo-card-content relative" id="cryptocurrencyWatchlistSlides">
      <Swiper
        :spaceBetween="10"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :navigation="{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }"
        :breakpoints="{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1536: {
            slidesPerView: 4,
          },
        }"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide>
          <BitcoinChart />
        </SwiperSlide>
        <SwiperSlide>
          <EthereumChart />
        </SwiperSlide>
        <SwiperSlide>
          <SolanaChart />
        </SwiperSlide>
        <SwiperSlide>
          <BinanceChart />
        </SwiperSlide>
        <SwiperSlide>
          <CardanoChart />
        </SwiperSlide>
      </Swiper>

      <div class="swiper-button-box">
        <div class="swiper-button-prev">
          <i class="ri-arrow-left-s-line"></i>
        </div>
        <div class="swiper-button-next">
          <i class="ri-arrow-right-s-line"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";

import BitcoinChart from "./BitcoinChart.vue";
import EthereumChart from "./EthereumChart.vue";
import SolanaChart from "./SolanaChart.vue";
import BinanceChart from "./BinanceChart.vue";
import CardanoChart from "./CardanoChart.vue";

export default defineComponent({
  name: "CryptocurrencyWatchList",
  components: {
    Swiper,
    SwiperSlide,

    BitcoinChart,
    EthereumChart,
    SolanaChart,
    BinanceChart,
    CardanoChart,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  },
});
</script>
