<template>
  <div class="sidebarItem">
    <div v-for="navItem in initNavData" v-if="navItem.children">
      <div v-for="subNavItem in navItem.children">
        <router-link :to="subNavItem.path">{{subNavItem.meta.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'sidebarItem',
    computed: {
      ...mapGetters(['initNavData'])
    }
  }
</script>

<style>

</style>
