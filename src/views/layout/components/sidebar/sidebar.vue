<template>
  <div class="sidebar">
    <div class="logo">
      <i class="el-icon-time"></i>
      <div class="logoTitle">PLATFORM FOR ME</div>
    </div>
    <el-menu mode="vertical" class="menuList">
      <SidebarItem></SidebarItem>
    </el-menu>
  </div>
</template>

<script>
  import SidebarItem from './sidebarItem';

  export default {
    name: 'sidebar',
    components: {
      SidebarItem
    }
  }
</script>

<style>
  .sidebar {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    width: 180px;
    padding: 0 10px;
    height: 100%;
    background-color: #000000;
    color: #ffffff;
  }

  .sidebar a {
    color: #ffffff;
  }

  .logo {
    display: flex;
    align-items: center;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid transparent;
  }

  .logo i {
    font-size: 30px;
  }

  .logoTitle {
    padding-left: 10px;
  }

  .menuList {
    border-right: 0;
    background-color: transparent;
  }

</style>
