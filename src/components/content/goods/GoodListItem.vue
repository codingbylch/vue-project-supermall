<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="showImage" @load="imageLoad"/>
    <div>
      <p class="item-title">{{goodsItem.title}}</p>
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
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
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
    /* height: 40px; */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;

}
</style>