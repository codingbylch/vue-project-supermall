<template>
  <div class="check-button">
    <img src="~assets/img/cart/tick.svg" :class="{isActive:isChecked}" />
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return false;
      }
    }
  }
};
</script>

<style>
.check-button {
  border-radius: 50%;
  background-color: lightgray;
}
.isActive {
  border-radius: 50%;
  background-color: deeppink;
}
</style>