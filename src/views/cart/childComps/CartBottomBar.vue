<template>
  <div class="bottom-bar">
    <div class="check-all-button" @click="selectAllClick">
      <check-button :is-checked="isSelectAll" class="bottom-check-button"></check-button>
      <span class="text-selectall">全选</span>
    </div>
    <div>合计：{{totalPrice}}</div>
    <div class="cash-settlement">结算:{{checkLength}}</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";

export default {
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((pre, item) => {
            return item.price * item.count + pre;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      //   return this.cartList.every(item => item.checked);
      return !(!this.cartList.length) && !this.cartList.find(item => !item.checked);
    }
  },
  methods: {
    selectAllClick() {
      if (this.isSelectAll) {
        for (let item of this.cartList) {
          item.checked = false;
        }
      } else {
        for (let item of this.cartList) {
          item.checked = true;
        }
      }
    }
  }
};
</script>

<style>
.bottom-bar {
  height: 40px;
  /* background-color: hotpink; */
  display: flex;
  align-items: center;
  position: relative;
}
.check-all-button {
  display: flex;
  padding: 5px;
  height: 40px;
  align-items: center;
}
.bottom-check-button {
  width: 16px;
  height: 16px;
}
.text-selectall {
  padding: 0px 5px;
  font-size: 12px;
}
.cash-settlement {
  position: absolute;
  right: 10px;
  height: 30px;
  width: 80px;
  line-height: 30px;
  text-align: center;
  background-color: hotpink;
}
</style>