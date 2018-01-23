<template>
  <div class="submitForm">
    <h1>初始化不同的表单</h1>
    <dl>
      <dt>1.初始化表单</dt>
      <dd>A.单独一行与否</dd>
      <dd>B.必填与否</dd>
      <dd>C.是否时间</dd>
      <dd>D.输入框类型（input、select）</dd>
      <dd>E.校验</dd>
      <dd>F.是否有附件上传</dd>
      <dd>G.输入框的属性配置（可输入\不可输入（一般是在查看中使用））</dd>
      <dt>2.一键获取表单提交的内容</dt>
      <dt>3.根据数据初始化表单</dt>
      <!--{{formData}}-->

      <div v-for="itemLine in formData.formDataInit">

        <el-row :gutter="20" v-if="itemLine.length > 1">
          <div v-for="itemInput in itemLine">
            <el-col :span="6">
              <label for="">{{itemInput.label}}</label>
              <el-input placeholder="请输入内容" :name="itemInput.name" v-if="itemInput.type === 'input'"></el-input>
            </el-col>
          </div>
        </el-row>

        <el-row :gutter="20" v-else>
          <el-col :span="24">
            <label for="">{{itemLine[0].label}}</label>
            <el-input placeholder="请输入内容" :name="itemLine[0].name" v-if="itemLine[0].type === 'input'"></el-input>
          </el-col>
        </el-row>
      </div>
    </dl>
  </div>
</template>

<script>
  export default {
    name: 'submitForm',
    data() {
      return {}
    },
    props: ['formData']
  }
</script>

<style type="text/scss">
  dl, dd {
    padding-left: 20px;
    line-height: 30px;
  }
</style>
