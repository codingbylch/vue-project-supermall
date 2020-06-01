<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommend{
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px 0;
    border-bottom: 8px solid #eeeeee
}
.recommend-item{
    flex:1
}
.recommend-item img{
    width: 80%;
}
</style>