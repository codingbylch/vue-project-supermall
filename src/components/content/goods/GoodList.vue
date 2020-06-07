<template>
  <div class="goods">
    <good-list-item v-for="item in goods" :key="item.item_id" :goods-item="item"></good-list-item>
    <!-- {{goods}} -->
  </div>
</template>

<script>
import GoodListItem from "components/content/goods/GoodListItem";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodListItem
  }
};
</script>

<style>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>