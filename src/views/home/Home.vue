<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="pullingUp"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <good-list :goods="showGoods"></good-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodList";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodList,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  created() {
    // 发送网络请求
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    // 监听item中图片加载完成
    this.$bus.$on('itemImageLoad',()=>{
      console.log('正在监听');
      this.$refs.scroll.refresh()
    })
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowTop: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    // 事件监听方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      console.log(this.currentType);
    },
    backClick() {
      // 通过$ref来访问组件内的属性和方法
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      // console.log(position)
      this.isShowTop = position.y < -1000;
    },
    pullingUp() {
      console.log("上拉加载更多");
      this.getHomeGoods(this.currentType);
    },
    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res.data.banner);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
        // this.goods[type].list = this.goods[type].list.concat(res.data.list);
        // console.log(this.goods[type].list)
      });
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  position: sticky;
  top: 0px;
  z-index: 1;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: white;
}
.content {
  height: calc(100% - 93px);
  overflow: hidden;
  position: absolute;
  /* top: 44px;
  bottom: 49px; */
}
</style>