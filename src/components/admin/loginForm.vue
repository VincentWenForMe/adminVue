<template>
  <div class="loginForm">
    <el-form ref="form" :model="form" size="small">
      <h2>{{user.name}}</h2>
      <el-form-item>
        <el-input v-model="form.name" placeholder="输入用户名："></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" placeholder="请输入密码："></el-input>
      </el-form-item>
      <el-form-item size="">
        <el-button @click="login()" class="confirm">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    name: 'loginForm',
    data() {
      return {
        form: {
          name: '',
          password: ''
        },
      }
    },
    computed: {
      ...mapState(['user']),
    },
    methods: {
      login() {
        if (this.form.name === this.user.name && this.form.password === this.user.password) {
          this.$store.state.user.userState = true;
          this.$router.push('/admin');
        } else {
          this.open();
        }
      },
      open() {
        this.$alert('用户名或者密码错误', '', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    },

  }
</script>

<style>
  .el-button.confirm {
    width: 100%;
  }
</style>
