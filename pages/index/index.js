$(function () {
  // 载入头部尾部
  $('#header').load('/template/header/header.html');
  $('#footer').load('/template/footer/footer.html');

  // 顶部swiper（banner）
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    on: {
      slideChangeTransitionEnd: function () {
        var index = this.activeIndex;
        $('.swiper-slide').each(function () {
          if (index == $(this).index()) {
            $(this).find('.content').addClass('animate__fadeInDown');
          } else {
            $(this).find('.content').removeClass('animate__fadeInDown');
          }
        });
      }
    }
  });

  //综合金融swiper
  var servicesList = [{ name: '二手房按揭', img: '../../static/image/serve1.png' }, { name: '抵押消费贷款', img: '../../static/image/serve2.png' }, { name: '个人经营性贷款', img: '../../static/image/serve3.png' }, { name: '个人住房理财咨询服务', img: '../../static/image/serve4.png' }, { name: '短期资金拆借服务', img: '../../static/image/serve5.png' }];
  //循环一层
  for (var i = 0; i < Math.ceil(servicesList.length / 3); i++) {
    $("#services-swiper-wrapper").append('<div class="swiper-slide flex"></div>');
  }
  //循环二层
  var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm'); //i g m是指分别用于指定区分大小写的匹配、全局匹配和多行匹配。
  var html = $("#template-services").html();
  for (var i = 0; i < servicesList.length; i++) {
    var source = html.replace(reg, function (node, key) {
      return {
        'name': servicesList[i].name,
        'img': servicesList[i].img
      }[key];
    });
    $("#services-swiper-wrapper .swiper-slide").eq(Math.ceil((i + 1) / 3) - 1).append(source);
  }
  // swiper配置
  var servicesSwiper = new Swiper('.services-swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    direction: 'vertical',
    speed: 1000,
    allowTouchMove: false
  });
  $('#services-prev').click(function () {
    if (servicesSwiper.activeIndex == 0) {
      servicesSwiper.slideTo(servicesSwiper.slides.length - 1);
    } else {
      servicesSwiper.slidePrev();
    }
  });
  $('#services-next').click(function () {
    if (servicesSwiper.activeIndex == Math.floor(servicesSwiper.slides.length / 2)) {
      servicesSwiper.slideTo(0);
    } else {
      servicesSwiper.slideNext();
    }
  });

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
    //综合金融
    var servicesAnimationFlag = true;   //只执行一次
    var servicesAnimationPosition = $('#services').offset().top - windowHeight;   //位置
    // // 全域服务
    // var layoutNumberAnimationFlag = true;   //只执行一次
    // var layoutNumberAnimationPosition = $('#layout-number1').offset().top - windowHeight;   //位置

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
          digitalScroll('#about-num1', 14);
          digitalScroll('#about-num2', 30);
          digitalScroll('#about-num3', 71);
          digitalScroll('#about-num4', 100);
          digitalScroll('#about-num5', 300);
          aboutNumberAnimationFlag = false;
        }
        //综合金融
        if (scrollTop > servicesAnimationPosition && servicesAnimationFlag) {
          $('#services').addClass('animate__animated animate__fadeInUp');
          servicesAnimationFlag = false;
        }
        // // 全域服务
        // if (scrollTop > layoutNumberAnimationPosition && layoutNumberAnimationFlag) {
        //   digitalScroll('#layout-number1', 27);
        //   digitalScroll('#layout-number2', 20);
        //   layoutNumberAnimationFlag = false;
        // }
      }
      //存储上一次的位置
      previousScroll = scrollTop;
    });
  })();

  //初始化地图
  chinaMapConfig.names.henan.color = "fd291a";
  $('#ChinaMap').SVGMap({
    mapWidth: 850,
    mapHeight: 620
  });

  //中部banner动画
  $('#mid-banner-left').hover(function () {
    $('#mid-banner-mask').stop().fadeOut();
    $('#mid-banner-mask-left').stop().fadeIn();
    $('#mid-banner-right').addClass('hide');
    $(this).addClass('hover');
  }, function () {
    $('#mid-banner-mask').stop().fadeIn();
    $('#mid-banner-mask-left').stop().fadeOut();
    $('#mid-banner-right').removeClass('hide');
    $(this).removeClass('hover');
  });

  $('#mid-banner-right').hover(function () {
    $('#mid-banner-mask').stop().fadeOut();
    $('#mid-banner-mask-right').stop().fadeIn();
    $('#mid-banner-left').addClass('hide');
    $(this).addClass('hover');
  }, function () {
    $('#mid-banner-mask').stop().fadeIn();
    $('#mid-banner-mask-right').stop().fadeOut();
    $('#mid-banner-left').removeClass('hide');
    $(this).removeClass('hover');
  });

  // 品牌服务承诺
  $("#commitment>.item").hover(function () {
    var img = $(this).find('.img'),
      src = img.attr('src');
    img.attr('src', src.substr(0, src.length - 5) + '.png');
  }, function () {
    var img = $(this).find('.img'),
      src = img.attr('src');
    img.attr('src', src.substr(0, src.length - 4) + 'A.png');
  });
});