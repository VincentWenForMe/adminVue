<template>
  <div class="rightIS">
    <div class="">
      <h2>需求整理：</h2>
      <ul>
        <li>可以对任何文章在规定的格式中进行滚动监听</li>
      </ul>
      <h2>功能点：</h2>
      <ul>
        <li>1、滚动到一定的位置目录栏目自动滚到一个特定的位置</li>
        <li>2、文章也滚动右侧对应的标题状态发生改变</li>
        <li>3、点击右侧的标题进行文章滚动到对应的位置</li>
        <li>4、文章标题来源于文章</li>
      </ul>
    </div>
    <div class="articleContent">
      <h1 class="title">{{rIData.title}}</h1>
      <div class="info">{{rIData.info | arrToStr}}</div>
      <div class="content" v-html="rIData.content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "rightIS",
    data() {
      return {
        titleData: [],
      }
    },
    props: ['rIData'],
    filters: {
      arrToStr: function (data) {
        let backHtml = '';
        for (let item of data) {
          backHtml += ' ' + item.name + '：' + item.value + ' ';
        }
        
        return backHtml;
      }
    },
    methods: {
      getTitle: function () {
        let H1Tag = document.getElementsByTagName('h1');
        for (let tagItem of H1Tag) {
          this.titleData.push(tagItem.innerHTML);
        }
      }
    },
    
    mounted() {
      this.getTitle();
      this.$emit('leftTitle', this.titleData);
    }
  }
</script>

<style>
  .rightIS {
    margin-right: 190px;
    text-align: justify;
    font-size: 16px;
  }
  
  .title {
    padding: 20px 0;
    font-weight: 600;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
    border-bottom: 1px solid #CCCCCC;
  }
  
  .info {
    padding: 20px 0;
    font-size: 14px;
    text-align: center;
  }
</style>
