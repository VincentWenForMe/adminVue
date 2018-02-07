<template>
  <div class="leftIS">
    <dl>
      <dt>需求整理</dt>
      <dd>1.自定义配置这个模块是否拥有</dd>
      <dd>2.标题的数据</dd>
      <dd>3.模块滚到一定的位置滑到底部位置</dd>
    </dl>
    <ul>
      <li v-for="(liItem, index) of LIData">{{index+1}}、{{liItem}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "leftIS",
    data() {
      return {
        LISData: {
          isHave: true,
          data: [],
        }
      }
    },
    props: ['LIData']
  }
</script>

<style>
  .leftIS {
    position: fixed;
    right: 20px;
    width: 150px;
    min-height: 150px;
  }
  li {
    line-height: 30px;
    font-size: 16px;
  }
</style>
