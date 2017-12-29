<template>
  <el-breadcrumb separator="/" class="breadcrumbs">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: this.$route.path }" v-if="">{{this.$route.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: 'breadcrumbs',
    data() {
      return {}
    },
    created() {
    }
  }
</script>

<style>
  .breadcrumbs {
    min-height: 50px;
    line-height: 50px;
    padding-left: 10px;
    border-bottom: 1px solid #e6e6e6;
  }

  .breadcrumbs span {
    font-weight: normal;
  }

</style>
