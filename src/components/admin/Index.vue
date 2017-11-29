<template>
  <div class="indexAdmin">
    <side-bar></side-bar>
    <div class="container">
      <el-breadcrumb class="crumbs" separator="/">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
     <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Sidebar from './sidebar.vue';
  import InContainer from './Incontainer.vue';
  export default {
    name: 'indexAdmin',
    components: {
      'side-bar':Sidebar,
      'in-container': InContainer
    }
  }
</script>

<style>
  .indexAdmin {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .container {
    position: relative;
    min-height: 100%;
    min-width: 1200px;
    margin-left: 200px;
  }
  
  .crumbs {
    height: 56px;
    line-height: 56px;
    padding-left: 20px;
  }

  .el-breadcrumb__inner, .el-breadcrumb__inner a {
    font-weight: normal;
  }
  
</style>
