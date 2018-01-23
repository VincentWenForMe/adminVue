<template>
  <div class="forms">
    form
    <SubmitForm :formData="formData"></SubmitForm>
  </div>
</template>

<script>
  import SubmitForm from './submitForm'

  export default {
    name: 'forms',
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
                label: '姓名',
                name: '输入框name属性',
                must: true,
                dataProvide: true,
                check: 'string',
                disabled: true,// 每一个框的设置
                type: 'input'
              },
              {
                label: '电话',
                name: '输入框name属性',
                must: true,
                dataProvide: true,
                check: 'string',
                disabled: true,// 每一个框的设置
                type: 'input'
              },
              {
                label: '标题',
                name: '输入框name属性',
                must: true,
                dataProvide: true,
                disabled: true,// 每一个框的设置
                type: 'input'
              },
              {
                label: '其他',
                name: '输入框name属性',
                must: true,
                dataProvide: true,
                disabled: true,// 每一个框的设置
                type: 'input'
              },
            ],
            [
              {
                label: '标签名称',
                name: '输入框name属性',
                must: true,
                dataProvide: true,
                disabled: true,// 每一个框的设置
                type: 'input'
              }
            ]
          ]
        }
      }
    },
    components: {
      SubmitForm
    }
  }
</script>

<style>

</style>
