<template>
  <div class="indexScroll">
    <LeftIS :LIData="LIData"></LeftIS>
    <RightIS :rIData="rIData" @leftTitle="leftTitles"></RightIS>
  </div>
</template>

<script>
  import LeftIS from './leftIS';
  import RightIS from './rightIS';
  
  export default {
    name: "indexScroll",
    data() {
      return {
        LIData: [],
        rIData: {
          title: '标题',
          content: `
            <h1 style="width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; background: #9d1dce; color: #ffffff; font-size: 50px;">标题1</h1>
            <h1 style="width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; background: #c2ccd1; color: #ffffff; font-size: 50px;">标题2</h1>
            <h1 style="width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; background: #cea667; color: #ffffff; font-size: 50px;">标题3</h1>
            <h1 style="width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; background: #896cce; color: #ffffff; font-size: 50px;">标题4</h1>
            <h1 style="width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; background: #ce3f1d; color: #ffffff; font-size: 50px;">标题5</h1>
            <h1 style="width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; background: #74ce54; color: #ffffff; font-size: 50px;">标题6</h1>
            <h1 style="width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; background: #5193ce; color: #ffffff; font-size: 50px;">标题7</h1>
            <h1 style="width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; background: #000000; color: #ffffff; font-size: 50px;">标题8</h1>
          `,
          info: [
            {name: '作者', value: '张三'},
            {name: '创建时间', value: '2018-02-07'},
            {name: '来源', value: '江浙日报'},
            {name: '阅读次数', value: 152},
          ],
          supFun: {}
        }
      }
    },
    components: {
      LeftIS, RightIS
    },
    methods: {
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let tags = document.getElementsByTagName('h1');
        
        for (let itemTag of tags) {
          this.LIData.push(itemTag.innerHTML);
        }
        
        console.log(scrollTop, tags.length, typeof tags);
      },
      leftTitles: function (titleData) {
        this.LIData = titleData;
      }
    },
    mounted() {
      // window.addEventListener('scroll', this.handleScroll);
      // this.leftTitles();
    }
  }
</script>

<style>

</style>
