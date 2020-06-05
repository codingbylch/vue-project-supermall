<template>
  <div class="wrpper" ref="wrpper">
    <div class="content">
      <!-- better-scroll模板的定义 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrpper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    //2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        // console.log(position);
        this.$emit("scroll", position);
      });
    }

    // 3.监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        console.log('监听上拉')
        this.$emit("pullingUp");
      });
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>

<style>
</style>