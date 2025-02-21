<template>
  <header class="navbar navbar-expand-md d-print-none sticky-top">
    <div class="container-xl align-items-center">

      <!-- 로고 -->
      <div class="col navbar-brand navbar-brand-autodark pe-0 pe-md-3">
        <img src="../../public/antstock_logo.png" class="me-1" style="height: 2rem;">
        개미장단
      </div>

      <ul class="col navbar-nav d-flex justify-content-center fs-3">
        <li class="nav-item active">
          <a class="nav-link" href="javascript:void(0)">
            <span class="nav-link-title">속보</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">
            <span class="nav-link-title">주식</span>
          </a>
        </li>
      </ul>

      <!-- 세 번째 요소 (Swiper) -->
      <div class="col justify-content-end w-25">
        <swiper
          :slidesPerView="1"
          :spaceBetween="30"
          :centeredSlides="true"
          :direction="'vertical'"
          :loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :modules="[Autoplay]"
          style="height: 48px;"
        >
          <swiper-slide
            class="fw-bold fs-4 text-github text-truncate text-start d-inline-block py-2"
            v-for="(news, index) in breakingNews" :key="index">
            <component
              :is="iconComponents[index+1]"
              :stroke="'0.5'"
              class="me-2 text-bitbucket"
              :size="20"
            /> {{ news.title }}
          </swiper-slide>
        </swiper>
      </div>

    </div>

  </header>  
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useBreakingNewsStore } from "@/stores/breakingNews";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules"; /* Swiper 모듈 추가 */
import "swiper/css"; /* Swiper CSS 추가 */
import "swiper/css/autoplay"; /* 자동 재생 스타일 추가 */
import type { Icon } from '@tabler/icons-vue';
import { IconSquareRoundedNumber1Filled, IconSquareRoundedNumber2Filled, IconSquareRoundedNumber3Filled, IconSquareRoundedNumber4Filled, IconSquareRoundedNumber5Filled } from '@tabler/icons-vue';

interface news {
  title: string;
  originLink: string;
}

// Pinia 스토어 사용
const breakingNewsStore = useBreakingNewsStore()

// computed를 사용하여 Pinia 상태를 반응형으로 유지
const breakingNews = computed(() => breakingNewsStore.breakingNews)

// 컴포넌트가 마운트될 때 뉴스 데이터 가져오기
onMounted(() => {
  breakingNewsStore.fetchBreakingNews()
})

const iconComponents: Record<number, Icon> = {
  1: IconSquareRoundedNumber1Filled,
  2: IconSquareRoundedNumber2Filled,
  3: IconSquareRoundedNumber3Filled,
  4: IconSquareRoundedNumber4Filled,
  5: IconSquareRoundedNumber5Filled,
};

</script>

<style>
.swiper-slide {
  text-align: center;
  font-size: 15px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: left;
  align-items: center;
}
</style>