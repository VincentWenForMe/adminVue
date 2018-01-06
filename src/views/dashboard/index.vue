<template>
  <div class="dashboard">
    <el-row>
      <el-col :span="4" v-for="(o, index) in 18" :key="index" class="bottomMagin">
        <el-card :body-style="{ padding: '10px' }" class="allMargin">
          <img src="../../assets/img/2.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡{{o}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate | dateFormatter}}</time>
              <!--<el-rate v-model="rate" class="button"></el-rate>-->
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'dashboard',
    data() {
      return {
        rate: 1,
        currentDate: new Date()
      };
    },
    filters: {
      dateFormatter: function (value) {

        let y = value.getFullYear(),
          m = value.getMonth() + 1,
          d = value.getDay(),
          mm = '',
          dd = ''
        ;

        m > 9 ? mm = m : mm = '0' + m;
        d > 9 ? dd = d : dd = '0' + d;

        return y + '-' + mm + '-' + dd;

      }
    }
  }
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 18px;
  }

  .button {
    float: right;
    padding: 0;
    font-size: 12px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .allMargin {
    margin: 5px;
  }

  .bottomMagin {
    margin-bottom: 20px;
  }

</style>
