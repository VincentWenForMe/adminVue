/**
 *
 * @author: wen
 * @description: solutions
 * @createTime: 2018-1-6
 * @todo
 *
 * */


// 时间的formatter 方法

const timeRelative = {
  dateFormatter: function (value) {

    // yyyy-mm-dd

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
};
