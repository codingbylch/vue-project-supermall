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
    mounted(){
        this.scroll = new BScroll(this.$refs.wrpper)
    },
    data(){
        return{
            scroll: null
        }
    }
};
</script>

<style>
</style>