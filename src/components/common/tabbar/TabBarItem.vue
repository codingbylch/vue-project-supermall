<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!-- <img src="../../assets/img/tabbar/home.svg" alt />
    <div>首页</div>-->
  </div>
</template>

<script>
export default {
    data(){
        return{
            // isActive: true, 
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1 //判断活跃
        },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
        }
    },
    props:{
        path: String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)
        }
    }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  /* border: 1px solid black; */
  height: 49px;
  /* line-height: 49px; */
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle; /*去掉图片与文字之间的空间*/
}
/* .active {
  color: red;
} */
</style>