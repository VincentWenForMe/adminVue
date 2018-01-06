<template>
  <div class="navBar">
    <el-color-picker class="" v-model="color" size="small" show-alpha></el-color-picker>
  </div>
</template>

<script>
  export default {
    name: 'navBar',
    data() {
      return {
        color: '#ff0000'
      }
    }
  }
</script>

<style>
  .navBar {
    display: flex;
    position: absolute;
    top: 0;
    right: 20px;
    height: 50px;
    line-height: 50px;
    align-items: center;
    z-index: 1;
  }
</style>
