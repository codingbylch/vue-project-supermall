<template>
  <div class="goods-list-item">
    <img :src="goodsItem.show.img" alt />
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.goods-list-item{
    width: 48%;
    margin-bottom: 2px;
}
.goods-list-item img{
    width: 100%;
    border-radius: 3%;
}
.goods-list-item p{
    height: 40px;
    overflow: hidden;
}
</style>