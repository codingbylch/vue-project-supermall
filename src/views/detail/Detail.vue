<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-param-info></detail-param-info>
      <detail-comment-info></detail-comment-info>
      <good-list :goods="recommends"></good-list>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";

import Scroll from "components/common/scroll/Scroll";
import GoodList from 'components/content/goods/GoodList';

import { getDetail, GoodsInfo, getRecommend } from "network/detail.js";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      detailInfo: {},
      paramsInfo: {},
      commentsInfo: {},
      recommends: []
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    GoodList,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
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
      //   console.log(this.goods);

      // 3.创建店铺信息的对象
      // 4.获取详细介绍
      this.detailInfo = data.detailInfo;
      // 5，获取商品参数信息
      // 6. 获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentsInfo = data.rate.list[0];
      }
    });

    getRecommend().then(res => {
      this.recommends = res.data.list;
      console.log(this.recommends)
    });
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  height: 100vh;
}
.content {
  height: calc(100% - 93px);
}
</style>