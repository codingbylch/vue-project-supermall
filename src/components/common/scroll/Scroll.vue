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
      probeType: this.probeType
    });

    //2.监听滚动的位置
    this.scroll.on("scroll", position => {
      // console.log(position);
      this.$emit("scroll", position);
    });
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>

<style>
</style>