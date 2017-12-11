<template>
  <div class="login">
    <div class="in-login">
      <h2>XXXX</h2>
      {{user}}
      <button>jkjas</button>
    </div>

  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'login',
    computed: {
      ...mapState(['user']),
    }
  }
</script>

<style>
  .login {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    background: url(../../assets/login.jpg) center no-repeat;
    background-size: cover;
    overflow: hidden;
  }

  .in-login {
    flex: 0 0 300px;
    width: 300px;
    min-height: 400px;
    margin-right: 150px;
    background: rgba(255, 255, 255, 0.77);
  }
</style>
