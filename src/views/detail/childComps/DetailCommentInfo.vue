<template>
  <div class="detail-comment-info">
    <p>评论信息的展示</p>
  </div>
</template>

<script>
export default {
    name:'DetailCommentInfo',
    props:{
        commentInfo:{
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
.detail-comment-info{
    color: deeppink;
    font-size: 30px;
}
</style>