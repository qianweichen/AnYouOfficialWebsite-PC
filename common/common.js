/**
 * 数字累加滚动函数
 * @param {'dom选择器'} el 
 * @param {'最终的数字'} number 
 */
function digitalScroll(el, number) {
  var i = 0,    //累加数 
    timer,        //定时器
    addTime = 20, //n毫秒触发一次
    allTime = 2,  //几秒执行完毕
    onceNum = number / allTime / 1000 * addTime;      //一次加多少
  timer = setInterval(() => {
    i += onceNum;
    $(el).text(Math.floor(i));
    if (i >= number) {
      clearInterval(timer);
    }
  }, addTime);
}

/**
 * 验证手机号
 * @param {'手机号'} phone
 */
function checkPhone(phone) {
  if (!(/^1[3456789]\d{9}$/.test(phone))) {
    return false;
  }
  return true;
}

/**
 * 验证邮箱
 * @param {'邮箱'} email 
 */
function checkEmail(email) {
  var reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
  if (!reg.test(email)) {
    return false;
  }
  return true;
}