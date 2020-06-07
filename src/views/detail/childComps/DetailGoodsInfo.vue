<template>
  <div class="detail-goods-info">
    <p>商品具体信息</p>
    {{detailInfo}}
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
    }
}
</script>

<style>
.detail-goods-info{
  color: cornflowerblue;
}
</style>