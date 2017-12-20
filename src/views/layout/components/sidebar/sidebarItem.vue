<template>
  <div class="sidebarItem">
      <div class="">
        <router-link to="/dashboard">dashboard</router-link>
      </div>
    <div class="">
      <router-link to="/documentation">documentation</router-link>
    </div>
    <div class="">
      <router-link to="/charts/keyboard">keyboard</router-link>
    </div>
    <div class="">
      <router-link to="/charts/lines">lines</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sidebarItem'
  }
</script>

<style>

</style>
