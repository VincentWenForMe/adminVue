<template>
  <div class="markdown">
    <el-button @click="getUEContent()" type="danger" class="marginBottom">获取内容</el-button>
    <div class="editor-container">
      <UE :defaultMsg="defaultMsg" :config="config" ref="ue"></UE>
    </div>
  </div>
</template>

<script>
  import UE from './UE';

  export default {
    name: 'markdown',
    data() {
      return {
        defaultMsg: '这里是UE测试sgdhfjsdjh',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 750
        }
      }
    },
    methods: {
      getUEContent() {
        let content = this.$refs.ue.getUEContent();
        console.log(this)
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        });
        console.log(content)
      }
    },
    components: {
      UE
    },

  }
</script>

<style>
  .marginBottom {
    margin-bottom: 20px;
  }
</style>
