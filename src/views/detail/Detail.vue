<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";

import Scroll from "components/common/scroll/Scroll";

import { getDetail, GoodsInfo } from "network/detail.js";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {}
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll
  },
  created() {
    // 1.保存传入的id
    this.iid = this.$route.params.id;
    // 2.根据id 请求数据
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result;
      // 1.获取顶部图片的轮播数据
      this.topImages = data.itemInfo.topImages;
      // 2.获取商品信息
      this.goods = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.service
      );
      console.log(this.goods);
    });
  }
};
</script>

<style scoped>
.detail{
    position: relative;
    height: 100vh;
}
.content{
    height: calc(100% - 93px);
}
</style>