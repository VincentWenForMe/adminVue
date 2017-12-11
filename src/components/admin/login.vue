<template>
  <div class="login">
    <div class="in-login">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="登录" name="login">登录</el-tab-pane>
        <el-tab-pane label="注册" name="register">注册</el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'login',
    data() {
      return {
        activeName: 'login'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    computed: {
      ...mapState(['user']),
    }
  }
</script>

<style type="text/scss">
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
    flex: 0 0 260px;
    width: 260px;
    padding: 20px;
    min-height: 360px;
    margin-right: 150px;
    background: rgba(255, 255, 255, 0.77);
  }

  .in-login h2 {
    padding: 20px 0;
    text-align: center;
  }

  .el-tabs__nav-scroll {
    width: 120px;
    margin: 0 auto;
  }

</style>
