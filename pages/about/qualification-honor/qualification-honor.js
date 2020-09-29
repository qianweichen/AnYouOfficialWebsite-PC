$(function () {

  // 载入头部尾部
  $('#header').load('/template/header/header.html');
  $('#footer').load('/template/footer/footer.html');

  //监听滚动条位置,执行动画
  (function () {
    var previousScroll = 0; //上一次的位置
    var windowHeight = $(window).height();  //可视窗口高度
    //关于我们
    var aboutAnimationFlag = true;   //只执行一次
    var aboutAnimationPosition = $('#about').offset().top - windowHeight;   //位置
    //愿景使命
    var hopeAnimationFlag = true;   //只执行一次
    var hopeAnimationPosition = $('#mid').offset().top - windowHeight;   //位置
    //第一屏距离合适直接触发--------------------------------------------
    //关于我们
    if (0 > aboutAnimationPosition && aboutAnimationFlag) {
      $('#about>div').addClass('animate__animated animate__fadeInUp');
      aboutAnimationFlag = false;
    }
    // 滚动时触发------------------------------------------------------
    $(window).scroll(function () {
      var scrollTop = $(this).scrollTop();
      if (scrollTop > previousScroll) { //向下滑
        //关于我们
        if (scrollTop > aboutAnimationPosition && aboutAnimationFlag) {
          $('#about>div').addClass('animate__animated animate__fadeInUp');
          aboutAnimationFlag = false;
        }
        //愿景使命
        if (scrollTop > hopeAnimationPosition && hopeAnimationFlag) {
          $('#mid>div').addClass('animate__animated animate__fadeInUp');
          hopeAnimationFlag = false;
        }
      }
      //存储上一次的位置
      previousScroll = scrollTop;
    });
  })();

  //中部轮播
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2.3,
    spaceBetween: -130,
    centeredSlides: true,
    loop: true,
    speed:800,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

});