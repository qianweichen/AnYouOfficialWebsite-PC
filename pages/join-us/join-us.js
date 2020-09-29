
$(function () {

  // 载入头部尾部
  $('#header').load('/template/header/header.html');
  $('#footer').load('/template/footer/footer.html');

  //tab切换
  $("#recruitment-type>div").click(function () {
    $(this).addClass('active').siblings().each(function () {
      $(this).removeClass('active');
    });
  });
  $("#job-type>div").click(function () {
    $(this).addClass('active').siblings().each(function () {
      $(this).removeClass('active');
    });
  });

  //职位表格
  var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm'); //i g m是指分别用于指定区分大小写的匹配、全局匹配和多行匹配。
  var html = $("#template-tr").html();
  for (var i = 0; i < 6; i++) {
    var source = html.replace(reg, function (node, key) {
      return {
        'title': 'web前端',
        'date': '2020-09-02'
      }[key];
    });
    $("#table-tr-group").append(source);
  }
  // 职位表格-绑定事件
  $("#table .arrow").click(function () {
    var hideFlag = !$(this).parents('.tr').hasClass('active');
    $('#table .tr').each(function () {
      $(this).removeClass('active');
    });
    $('#table .detail').each(function () {
      $(this).slideUp();
    });
    if (hideFlag) {
      $(this).parents('.tr').addClass('active');
      $(this).parents('.tr').children('.detail').slideDown();
    }
  });
  $("#table .detail .btn").click(function () {
    $('#application-group').show();
  });

  // 问题解答
  $("#question-type>div").click(function () {
    $(this).addClass('active').siblings().each(function () {
      $(this).removeClass('active');
    });;
  });
  var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm'); //i g m是指分别用于指定区分大小写的匹配、全局匹配和多行匹配。
  var html = $("#template-question").html();
  for (var i = 0; i < 4; i++) {
    var source = html.replace(reg, function (node, key) {
      return {
        'title': '非2020届的毕业生可以申请此次校招吗？',
        'answer': '本次校招面向毕业时间在2019年8月1日-2020年7月31日的2020届毕业生；同时，也欢迎非20届的同学关注微信公众号查看最新社招和实习生职位。'
      }[key];
    });
    $("#question-list").append(source);
  }

  //职位申请
  jeDate('#date', {
    theme:{bgcolor:"#D91600",pnColor:"#FF6653"},
    format: 'YYYY-MM-DD'
  });
  $('#application-file').change(function(){
    $("#upload-btn").text($(this).prop('files')[0].name);
  });
  $("#application-submit").click(function(){
    var formArr = $("#application-form").serializeArray(),
        files = $('#application-file').prop('files');
    console.log(formArr);
    console.log(files);
    for(var i=0;i<formArr.length;i++){
      if(!formArr[i].value){
        alert('请输入完整');
        break;
      }
      if(formArr[i].name=="phone"&&!checkPhone(formArr[i].value)){
        alert('请输入正确的手机号');
        break;
      }
      if(formArr[i].name=="email"&&!checkEmail(formArr[i].value)){
        alert('请输入正确的邮箱');
        break;
      }
    }
    if(i>=formArr.length){
      if(files.length==0){
        alert('请上传简历');
        return;
      }
      console.log('submit');
    }
  });
  $("#application-close").click(function(){
    $('#application-group').hide();
  });

});