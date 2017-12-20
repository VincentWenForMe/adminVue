<template>
  <div class="layout">
    <Sidebar></Sidebar>
    <div class="mainContainer">
      <Breadcrumbs></Breadcrumbs>
      <NavBar></NavBar>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/sidebar/sidebar';
  import AppMain from './components/appMain';
  import Breadcrumbs from './components/breadcrumbs';
  import NavBar from './components/navBar';

  export default {
    name: 'layout',
    components: {
      Sidebar, AppMain, Breadcrumbs, NavBar
    }
  }
</script>

<style>
  .layout {
    width: 100%;
    height: 100%;
  }

  .mainContainer {
    margin-left: 200px;
    height: 100%;
  }
</style>
