<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    // message: {
    //   type: String,
    //   default: ""
    // },
    // show:{
    //     type: Boolean,
    //     default:false
    // }
  },
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    showMessage(message, duration = 1500) {
      this.message = message;
      this.isShow = true;
      console.log(this.message);
      console.log(this.isShow);
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
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
  z-index: 100;
}
</style>