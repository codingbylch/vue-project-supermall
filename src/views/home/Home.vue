<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends='recommends'></recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home.js";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from './childComps/RecommendView';

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  created() {
    // 发送网络请求
    getHomeMultidata().then(res => {
      // console.log(res.data.banner);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
}
</style>