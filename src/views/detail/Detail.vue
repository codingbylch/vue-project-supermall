<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";

import { getDetail } from "network/detail.js";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: []
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  created() {
    // 1.保存传入的id
    this.iid = this.$route.params.id;
    // 2.根据id 请求数据
    getDetail(this.iid).then(res => {
      console.log(res);
      // 1.获取顶部图片的轮播数据
      this.topImages = res.result.itemInfo.topImages;
    });
  }
};
</script>

<style>
</style>