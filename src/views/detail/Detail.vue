<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="navbar"></detail-nav-bar>
    <scroll class="content" ref="detailScroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <div>
        <ul>
          <li v-for="item in $store.state.cartList" :key="item.iid">{{item}}</li>
        </ul>
      </div>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"></detail-goods-info>
      <detail-param-info ref="params"></detail-param-info>
      <detail-comment-info ref="comment"></detail-comment-info>
      <good-list :goods="recommends" ref="recommend"></good-list>
    </scroll>
    <detail-bottom-bar class="bottom-bar" @openShoppingCart="openShoppingCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowTop"></back-top>
    <!-- <toast :message="toastMessage" :show="toastShow"></toast> -->
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
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
// import Toast from "components/common/toast/Toast";
import GoodList from "components/content/goods/GoodList";
import BackTop from "components/content/backTop/BackTop";

import { debounce } from "@/common/utils.js";

import { getDetail, GoodsInfo, getRecommend } from "network/detail.js";

import { mapActions } from "vuex";

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
      recommends: [],
      newRefresh: null,
      themeTopYs: [],
      currentIndex: null,
      isShowTop: null,
      toastMessage: "",
      toastShow: false
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    // Toast,
    GoodList,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    BackTop
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
    // 3.请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list;
      console.log("recommends: " + this.recommends);
    });

    // 4.监听详情的图片加载完成

    // 联动效果
    this.$nextTick(() => {
      // 根据最新的数据,对应的DOM已经被渲染出来,
      //但图片依然没加载完(offsetTop不包含图片)
      // offsetTop值不对,都是图片的问题
      // 1.第一次获取, 值不对, offsetTop不包含图片
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      //   console.log(this.themeTopYs);
    });
  },
  updated() {},
  methods: {
    ...mapActions(["addCart"]),
    detailImageLoad() {
      //   console.log(this.$refs.detailScroll.refresh);
      if (this.newRefresh === null) {
        this.newRefresh = debounce(this.$refs.detailScroll.refresh, 400);
        this.newRefresh();
        // 在这里联动效果, 或直接在图片加载后用防抖处理.
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        console.log(this.themeTopYs);
      }
    },
    titleClick(index) {
      console.log("index:" + index);
      this.$refs.detailScroll.scrollTo(0, -this.themeTopYs[index] + 44, 0);
    },
    contentScroll(position) {
      // console.log(position);
      this.isShowTop = position.y < -1000;
      // 1.获取y值
      const positionY = -position.y + 44; //注意这里的44px, 顶部导航栏
      // 2.positionY和主题中的值进行对比
      for (let i in this.themeTopYs) {
        i = parseInt(i);
        if (
          positionY > this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1] &&
          this.currentIndex != i
        ) {
          this.currentIndex = i;
        } else if (
          positionY > this.themeTopYs[i] &&
          i == this.themeTopYs.length - 1 &&
          this.currentIndex != i
        ) {
          this.currentIndex = i;
        }
      }
      this.$refs.navbar.currentIndex = this.currentIndex;
    },
    backClick() {
      // 通过$ref来访问组件内的属性和方法
      this.$refs.detailScroll.scrollTo(0, 0, 500);
    },
    openShoppingCart() {
      // 1.获取购物车需要展示的信息
      // console.log('添加到购物车')
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.price;
      product.iid = this.iid;
      // console.log(product);

      // 2.将商品添加到购物车里
      // this.$store.commit("addCart", product);
      // this.$store.dispatch("addCart", product).then(res => console.log(res));
      this.addCart(product).then(res => {
        // this.toastMessage = res;
        // this.toastShow = true;
        // setTimeout(() => {
        //   this.toastShow = false;
        //   this.toastMessage = "";
        // }, 1500);
        this.$toast.showMessage(res, 1000);
        // console.log(this.$toast);
      });
    }
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  height: 100vh;
  z-index: 8;
  background-color: #ffffff;
}
.content {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>