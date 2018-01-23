<template>
  <div class="tableItem">

    <el-table ref="singleTable" :data="tableData" stripe border height="400"   @current-change="handleCurrentChange">
      <el-table-column type="index" width="40"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="address" label="地址" width="180"></el-table-column>
      <el-table-column prop="city" label="城市" width="180"></el-table-column>
      <el-table-column prop="provice" label="简称" width="180"></el-table-column>
      <el-table-column prop="provice" label="简称" width="180"></el-table-column>
      <el-table-column prop="provice" label="简称" width="180"></el-table-column>
      <el-table-column prop="provice" label="简称" width="180"></el-table-column>
      <el-table-column prop="provice" label="简称" width="180"></el-table-column>
      <el-table-column prop="operate" label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="text" @click="handle(scope.row)" size="small">查看</el-button>
          <el-button type="text" @click="handle(scope.column)" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
   <!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page.sync="currentPage1" :page-size="7" layout="total, prev, pager, next"
      :total="tableData.length"></el-pagination>-->
  </div>
</template>

<script>
  export default {
    name: 'tableItem',
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          city: '上海',
          provice: '糊'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handle(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      }
    }
  }
</script>

<style>

</style>
