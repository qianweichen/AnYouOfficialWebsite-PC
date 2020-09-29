$(function () {

  // 载入头部尾部
  $('#header').load('/template/header/header.html');
  $('#footer').load('/template/footer/footer.html');

  //监听滚动条位置,执行动画
  var windowHeight = $(window).height();  //可视窗口高度
  $('#list .item').each(function () {
    if (0 >= ($(this).offset().top - windowHeight)) {
      $(this).addClass('animate__animated animate__fadeInUp');
    }
  });
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $('#list .item').each(function () {
      if (scrollTop > ($(this).offset().top - windowHeight)) {
        $(this).addClass('animate__animated animate__fadeInUp');
      }
    });
  });

});