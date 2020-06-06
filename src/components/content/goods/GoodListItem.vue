<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="goodsItem.show.img" @load="imageLoad"/>
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
  },
  methods:{
    imageLoad(){
      // console.log('imageLoad');
      this.$bus.$emit('itemImageLoad')
    },
    itemClick(){
      // id方式
      this.$router.push('/detail/'+ this.goodsItem.iid)
      // query方式
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