<template>
  <div class="tables">
    <h1>table的基本需求</h1>
    <dl>
      <dt>1.初始化表单</dt>
      <dt>2.功能需求</dt>
      <dd>A.筛选功能（主功能区）</dd>
      <dd>B.单条信息的删、改、查看（下钻）</dd>
      <dd>C.单选、多选、批量删除、导出数据（全表、部分到处）、新增信息 （辅助功能区）</dd>
      <dd>D.单条信息的图片上传、附件上传、<b>附件下载</b></dd>
      <dt>3.复杂表头处理</dt>
    </dl>

    <TableItem></TableItem>
  </div>
</template>

<script>
  import TableItem from './tableItem';

  export default {
    name: 'tables',
    components: {
      TableItem
    }
  }
</script>


<style type="text/scss">
  dl, dd {
    padding-left: 20px;
    line-height: 30px;
  }
</style>

