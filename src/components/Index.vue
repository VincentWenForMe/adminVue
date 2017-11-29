<template>
  <div class="index">
   <router-link to="/">index</router-link>
   <!--<router-link to="/Login">Login</router-link>-->
   <router-link to="/admin">indexAdmin</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

