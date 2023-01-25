<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
</script>

<template>
  <div>
    <Swiper
      centered-slides
      grab-cursor
      center-insufficient-slides
      loop
      :space-between="20"
      :slides-per-view="3"
    >
      <SwiperSlide>
        <CardMyProject />
      </SwiperSlide>
      <SwiperSlide>
        <CardMyProject />
      </SwiperSlide>
      <SwiperSlide>
        <CardMyProject />
      </SwiperSlide>
      <SwiperSlide>
        <CardMyProject />
      </SwiperSlide>
      <SwiperSlide>
        <CardMyProject />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped></style>
