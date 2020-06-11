<template>
  <div class="toast" v-show="show"> 
    <div >{{message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ""
    },
    show:{
        type: Boolean,
        default:false
    }
  }
};
</script>

<style>
.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  color: white;
  background-color: rgba(0, 0, 0, 0.65);
}
</style>