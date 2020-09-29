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
    //关于我们滚动数字
    var aboutNumberAnimationFlag = true;   //只执行一次
    var aboutNumberAnimationPosition = $('#about-number').offset().top - windowHeight;   //位置
    //愿景使命
    var hopeAnimationFlag = true;   //只执行一次
    var hopeAnimationPosition = $('#hope').offset().top - windowHeight;   //位置

    //第一屏距离合适直接触发--------------------------------------------
    //关于我们
    if (0 > aboutAnimationPosition && aboutAnimationFlag) {
      $('#about>div').addClass('animate__animated animate__fadeInUp');
      aboutAnimationFlag = false;
    }
    //关于我们滚动数字
    if (0 > aboutNumberAnimationPosition && aboutNumberAnimationFlag) {
      digitalScroll('#about-num1', 14);
      digitalScroll('#about-num2', 30);
      digitalScroll('#about-num3', 71);
      digitalScroll('#about-num4', 100);
      digitalScroll('#about-num5', 300);
      aboutNumberAnimationFlag = false;
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
        //关于我们滚动数字
        if (scrollTop > aboutNumberAnimationPosition && aboutNumberAnimationFlag) {
          digitalScroll('#about-num1', 30);
          digitalScroll('#about-num2', 60);
          digitalScroll('#about-num3', 1200);
          digitalScroll('#about-num4', 800);
          digitalScroll('#about-num5', 946);
          aboutNumberAnimationFlag = false;
        }
        //愿景使命
        if (scrollTop > hopeAnimationPosition && hopeAnimationFlag) {
          $('#hope>div').addClass('animate__animated animate__fadeInUp');
          hopeAnimationFlag = false;
        }
      }
      //存储上一次的位置
      previousScroll = scrollTop;
    });
  })();

  //视频播放弹窗
  $("#play-video").click(function () {
    var img = $(this).attr('vpath');//获取视频预览图
    var video = $(this).attr('ipath');//获取视频路径
    img = "";
    video = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
    $('.videos').html("<video id=\"video\" poster='" + img + "' style='width: 640px' src='" + video + "' preload=\"auto\" controls=\"controls\" autoplay=\"autoplay\"></video><img id=\"vclose\" src=\"../../../static/image/close.png\" width=\"25\" height=\"25\">").show();
    $("#vclose").click(function () {
      $("#video").trigger('pause');
      $('.videos').hide().html();
    });
  });

});