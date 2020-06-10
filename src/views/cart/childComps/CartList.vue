<template>
  <div class="cart-list">
    <scroll class="content">
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
}
.cart-list {
  overflow: hidden;
  /* height: 100%; */
  height: calc(100% - 93px);
  position: relative;
}
</style>