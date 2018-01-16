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
      {{formData}}
    </dl>
  </div>
</template>

<script>
  export default {
    name: 'submitForm',
    data() {
      return {
        formData: {
          config: {
            filesUpload: true,
            disabled: true  // 设置整表的框
          },
          formDataInit: [
            [
              {
                label: '标签名称',
                name: '输入框name属性',
                must: true,
                dataProvide: true,
                check: 'string',
                disabled: true // 每一个框的设置
              },
              {
                label: '标签名称',
                name: '输入框name属性',
                must: true,
                dataProvide: true,
                check: 'string',
                disabled: true // 每一个框的设置
              },
              {
                label: '标签名称',
                name: '输入框name属性',
                must: true,
                dataProvide: true,
                check: 'string',
                disabled: true // 每一个框的设置
              },
            ],
            [
              {
                label: '标签名称',
                name: '输入框name属性',
                must: true,
                dataProvide: true,
                check: 'string',
                disabled: true // 每一个框的设置
              }
            ]
          ]
        }
      }
    }
  }
</script>

<style type="text/scss">
  dl, dd {
    padding-left: 20px;
    line-height: 30px;
  }
</style>
