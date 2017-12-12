<template>
  <el-row class="tac sidebar">
    <h1 class="logo">logo</h1>
    <el-col :span="24">
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <div v-for="(item, index) in navListData">
          klkkllk
        </div>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: 'sidebar',
    computed: {
      ...mapState(['navListData'])
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    z-index: 0;
    border-right: solid 1px #e6e6e6;
  }

  .logo {
    font-size: 18px;
    text-align: center;
    line-height: 56px;
  }

  .el-menu {
    border: 0;
  }
</style>
