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
    this.scroll = new BScroll(this.$refs.wrpper, {
      click: true
    });
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