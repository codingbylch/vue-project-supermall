<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :key="item.iid+index" :product="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";


import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartList"])
  },
  activated() {
      this.$refs.scroll.refresh();
  },
  components: {
    Scroll,
    CartListItem
  }
};
</script>

<style scoped>
.content {
  /* height: calc(100% - 93px); */
  height: 100%;
  padding: 10px 0px 10px 0px;
}
.cart-list {
  overflow: hidden;
  /* height: 100%; */
  height: calc(100% - 133px);
  position: relative;
  background-color:#f6f6f6
}
</style>