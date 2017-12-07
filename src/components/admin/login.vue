<template>
  <div class="login">
    <h2>XXXX</h2>
    {{user}}
    <button @click="login()">jkjas</button>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  export default {
    name: 'login',
    computed: {
      ...mapState(['user']),
    }
  }
</script>

<style>

</style>
