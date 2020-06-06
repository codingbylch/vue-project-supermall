<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" :key="item" class="swiper-item">
      <img :src="item" alt="swiperPhoto" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {

  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>