<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="cart-nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 列表 -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from './childComps/CartList';

import {mapGetters} from 'vuex';

export default {
  components: {
    NavBar,
    CartList
  },
  computed: {
    // cartLength() {
    //   // return this.$store.state.cartList.length;
    //   return this.$store.getters.cartLength;
    // }
    ...mapGetters({
      length: 'cartLength'
    })
  }
};
</script>

<style>
.cart-nav-bar {
  background-color: var(--color-tint);
  color: #ffffff;
}
.cart{
  height: 100vh; 
}
</style>