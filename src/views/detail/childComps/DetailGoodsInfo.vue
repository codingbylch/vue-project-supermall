<template>
  <div class="detail-goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>

    <div v-for="item in detailInfo.detailImage" :key="item.key">
      <div class="info-key">{{item.key}}</div>
      <div class="info-list">
        <img v-for="(item,index) in item.list" :key="index" :src="item" 
        @load="imageLoad"
        alt="detailInfoImage">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'detailGoodsInfo',
    data(){
        return{
            
        }
    },
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imageLoad(){
        console.log("iamgeload");
        this.$emit('detailImageLoad')
      }
    }
}
</script>

<style>
.detail-goods-info{
  color: cornflowerblue;
}
</style>