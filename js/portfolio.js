$(document).ready(function () {

  /*____________________________________________________스크롤 */

  //스크롤바가 이동될때마다 스크롤위치값 나타내기
  $(window).scroll(function () {
    $("#txt1").text($(this).scrollTop());
  });



/*__________________________________________________nav메뉴 */

  //일정 스크롤 이상에서 메뉴바 나타나기

  $(window).scroll(function () {

    if ($(this).scrollTop() >= 800) {
      $("header").css({"margin-top":"0px","transition":"0.8s"});
    } else {
      $("header").css({"margin-top":"-80px","transition":"0.4s"});
    }
  });
  


  /*____________________________________________________TOP버튼*/

  $(".top_btn").hide(); //탑버튼 숨기기

  //스크롤이 980이상일때 TOP버튼 보이게 하고 스크롤을 올리면 다시 숨김
  $(window).scroll(function () {

    if ($(this).scrollTop() >= 900) {
      $(".top_btn").fadeIn();
    } else {
      $(".top_btn").fadeOut();
    }
  });

  //TOP버튼 클릭시 맨위로
  $(".top_btn").click(function () {
    $("html,body").animate({
      scrollTop: "0"
    }, 700);
  });

/*_________________________________________________현재 날짜*/
     
    //Date() 클래스의 인스턴스생성
    var objDate = new Date();

    // 년 구하기
    var year = objDate.getFullYear();

    // 월 구하기
    var month = objDate.getMonth(); //0(1월)부터 11(12월)까지의 정수값

    // 일 구하기
    var date = objDate.getDate();  //날짜(일)를 나타내는 1에서 31까지의 정수

    // 요일 구하기
    var day = objDate.getDay(); //0(일)부터 6(토)까지의 정수값 
    var aryDay = ["일", "월", "화", "수", "목", "금", "토"];  
    //배열을 이용해서 1개 이상의 데이터를 저장

    // 년,월,일,요일 출력
    var fulldate=year +"년 " + (month+1) + "월 " + date + "일 " + aryDay[day] + "요일" ;

    //현재날짜
    $(".cont_date").text(fulldate);

  /*___________________________________________________퀵버튼*/

  $(".quick_btn").hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 900) {
      $(".quick_btn").fadeIn();
    } else {
      $(".quick_btn").fadeOut();
    }
  });

  //퀵메뉴 클릭시 각 콘텐츠의 위치로 이동

  $(".quick_btn .btn1").click(function () {
    $("body,html").animate({
      scrollTop: "940px"
    }, 700);
  });
  $(".quick_btn .btn2").click(function () {
    $("body,html").animate({
      scrollTop: "1960px"
    }, 700);
  });
  $(".quick_btn .btn3").click(function () {
    $("body,html").animate({
      scrollTop: "2940px"
    }, 700);
  });
  $(".quick_btn .btn4").click(function () {
    $("body,html").animate({
      scrollTop: "3950px"
    }, 700);
  });
  $(".quick_btn .btn5").click(function () {
    $("body,html").animate({
      scrollTop: "4950px"
    }, 700);
  });
  $(".quick_btn .btn6").click(function () {
    $("body,html").animate({
      scrollTop: "5950px"
    }, 700);
  });


  /*________________________________________________스크롤이벤트*/

  $(window).scroll(function () {

    /*____________________________1 page___________________________*/
    if ($(this).scrollTop() >= 700 && $(this).scrollTop() < 1700) {
      $(".page1 h2").css({
        "left": "20%",
        "top": "8%",
        "transform": "translate(-50%, -50%)",
        "opacity": "1",
        "transition": "all 0.7s"
      });
      $(".quick_btn .btn1").find(">a>.dot").addClass("dothover");
      $(".quick_btn ul .btn1").find(">a>.text_over").css({
        "display": "inline-block"
      });
      $(".profile_left").css({"left":"0px","opacity":"1","transition":"1.5s"})
      $(".profile_").css({"left":"0px","opacity":"1","transition":"1.5s"})
      $(".bar_in1").css({"width":"90%","transition":"2s"});
      $(".bar_in2").css({"width":"85%","transition":"2s"});
      $(".bar_in3").css({"width":"90%","transition":"2s"});
      $(".bar_in4").css({"width":"90%","transition":"2s"});
      $(".bar_in5").css({"width":"75%","transition":"2s"});
      $(".a_bar_in1").css({"width":"85%","transition":"2s"});
      $(".a_bar_in2").css({"width":"80%","transition":"2s"});
      $(".a_bar_in3").css({"width":"85%","transition":"2s"});
      $(".a_bar_in4").css({"width":"80%","transition":"2s"});
    } else {
      $(".page1 h2").css({
        "left": "30%",
        "opacity": "0",
        "transition": "all 0.7s"
      });
      $(".quick_btn .btn1").find(">a>.dot").removeClass("dothover");
      $(".quick_btn ul .btn1").find(">a>.text_over").css({
        "display": "none"
      });
      $(".profile_left").css({"left":"-50px","opacity":"0","transition":"1.5s"})
      $(".bar_in1").css({"width":"0%","transition":"2s"});
      $(".bar_in2").css({"width":"0%","transition":"2s"});
      $(".bar_in3").css({"width":"0%","transition":"2s"});
      $(".bar_in4").css({"width":"0%","transition":"2s"});
      $(".bar_in5").css({"width":"0%","transition":"2s"});
      $(".a_bar_in1").css({"width":"0%","transition":"2s"});
      $(".a_bar_in2").css({"width":"0%","transition":"2s"});
      $(".a_bar_in3").css({"width":"0%","transition":"2s"});
      $(".a_bar_in4").css({"width":"0%","transition":"2s"});

    }

    /*____________________________2 page___________________________*/
    if ($(this).scrollTop() >= 1700 && $(this).scrollTop() < 2700) {
      $(".page2 h2").css({
        "left": "20%",
        "top": "8%",
        "transform": "translate(-50%, -50%)",
        "opacity": "1",
        "transition": "all 0.7s"
      });
      $(".quick_btn .btn2").find(">a>.dot").addClass("dothover");
      $(".quick_btn ul .btn2").find(">a>.text_over").css({
        "display": "inline-block"
      });
      $("#tabmenu").css({"top":"140px","opacity":"1","transition":"1.5s"});
    } else {
      $(".page2 h2").css({
        "left": "30%",
        "opacity": "0",
        "transition": "all 0.7s"
      });
      $(".quick_btn .btn2").find(">a>.dot").removeClass("dothover");
      $(".quick_btn ul .btn2").find(">a>.text_over").css({
        "display": "none"
      });
      $("#tabmenu").css({"top":"80px","opacity":"0","transition":"1.5s"});
    }

    /*____________________________3 page___________________________*/
    if ($(this).scrollTop() >= 2700 && $(this).scrollTop() < 3800) {
      $(".page3 h2").css({
        "left": "20%",
        "top": "8%",
        "transform": "translate(-50%, -50%)",
        "opacity": "1",
        "transition": "all 0.7s"
      });
      $(".quick_btn .btn3").find(">a>.dot").addClass("dothover");
      $(".quick_btn ul .btn3").find(">a>.text_over").css({
        "display": "inline-block"
      });
      $(".w_tab").css({"top":"200px","transition":"1.5s","opacity"
      :"1"});
    } else {
      $(".page3 h2").css({
        "left": "30%",
        "opacity": "0",
        "transition": "all 0.7s"
      });
      $(".quick_btn .btn3").find(">a>.dot").removeClass("dothover");
      $(".quick_btn ul .btn3").find(">a>.text_over").css({
        "display": "none"
      });
      $(".w_tab").css({"top":"300px","transition":"1.5s","opacity"
    :"0"});
    }

    /*____________________________4 page___________________________*/
    if ($(this).scrollTop() >= 3800 && $(this).scrollTop() < 4700) {
      $(".page4 h2").css({
        "left": "20%",
        "top": "8%",
        "transform": "translate(-50%, -50%)",
        "opacity": "1",
        "transition": "all 0.7s"
      });
      $(".quick_btn .btn4").find(">a>.dot").addClass("dothover");
      $(".quick_btn ul .btn4").find(">a>.text_over").css({
        "display": "inline-block"
      });
      $(".res_right").css({"top":"300px","opacity":"1","transition":"1.5s"});
    } else {
      $(".page4 h2").css({
        "left": "30%",
        "opacity": "0",
        "transition": "all 0.7s"
      });
      $(".quick_btn .btn4").find(">a>.dot").removeClass("dothover");
      $(".quick_btn ul .btn4").find(">a>.text_over").css({
        "display": "none"
      });
      $(".res_right").css({"top":"600px","opacity":"0","transition":"1.5s"});
    }

    /*____________________________5 page___________________________*/
    if ($(this).scrollTop() >= 4700 && $(this).scrollTop() < 5700) {
      $(".page5 h2").css({
        "left": "20%",
        "top": "8%",
        "transform": "translate(-50%, -50%)",
        "opacity": "1",
        "transition": "all 0.7s"
      });
      $(".quick_btn .btn5").find(">a>.dot").addClass("dothover");
      $(".quick_btn ul .btn5").find(">a>.text_over").css({
        "display": "inline-block"
      })
      $(".page5 img").css({"top":"150px","opacity":"1","transition":"1.5s"});
      $(".mobile_left").css({"top":"350px","opacity":"1","transition":"1.5s"});
    } else {
      $(".page5 h2").css({
        "left": "30%",
        "opacity": "0",
        "transition": "all 0.7s"
      });
      $(".quick_btn .btn5").find(">a>.dot").removeClass("dothover");
      $(".quick_btn ul .btn5").find(">a>.text_over").css({
        "display": "none"
      });
      $(".page5 img").css({"top":"300px","opacity":"0","transition":"1.5s"});
      $(".mobile_left").css({"top":"500px","opacity":"0","transition":"1.5s"});
    }

    /*____________________________6 page___________________________*/
    if ($(this).scrollTop() >= 5700) {
      $(".page6 h2").css({
        "left": "20%",
        "top": "8%",
        "transform": "translate(-50%, -50%)",
        "opacity": "1",
        "transition": "all 0.7s"
      });
      $(".quick_btn .btn6").find(">a>.dot").addClass("dothover");
      $(".quick_btn ul .btn6").find(">a>.text_over").css({
        "display": "inline-block"
      });
    } else {
      $(".page6 h2").css({
        "left": "30%",
        "opacity": "0",
        "transition": "all 0.7s"
      });
      $(".quick_btn .btn6").find(">a>.dot").removeClass("dothover");
      $(".quick_btn ul .btn6").find(">a>.text_over").css({
        "display": "none"
      });
    }

  });


  /*________________________________________________________TAB메뉴*/

  $(".panel>li:not(:first)").hide();
  //첫번째를 제외한 나머지 내용 숨기기

  $(".tab>li").click(function () {
    $(".tab>li").removeClass("selected"); //기존선택된 selected 클래스삭제
    $(this).addClass("selected"); //새로선택된 selxected 클래스 생성
    $(".panel>li").hide(); //기존의 보여진 내용 숨기기
    $($(this).find("a").attr("href")).show(); //새로선택된 내용 href 연결된내용 보여주기

  });



  /*________________________________________________________모달창*/

  //리스트 이미지 클릭시 1
  $("#tab1 .graphic_list>li").click(function () {

    g_pop = $(this).index();

    $("#tab1 .g_page span:nth-child(1)").text(g_pop + 1); //오른쪽 상단 페이지 넘버
    $("html").css({
      overflowY: "hidden"
    }); //기존html 스크롤 숨기기
    $("#tab1 .pop>li").eq(g_pop).show(); //g_pop index에 해당하는 팝업보이기
    $("#tab1 #popup").stop().fadeIn(); //검정배경
  });

  //리스트 이미지 클릭시 2 
  $("#tab2 .graphic_list>li").click(function () {

    g_pop = $(this).index();

    $("#tab2 .g_page span:nth-child(1)").text(g_pop + 1); //오른쪽 상단 페이지 넘버
    $("html").css({
      overflowY: "hidden"
    }); //기존html 스크롤 숨기기
    $("#tab2 .pop>li").eq(g_pop).show(); //g_pop index에 해당하는 팝업보이기
    $("#tab2 #popup").stop().fadeIn(); //검정배경
  });


  //오른쪽 상단 버튼-다음보기
  /* tab1 */
  $("#tab1 .right_btn").click(function () {
    if (g_pop < 14) {
      $("#tab1 .pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop++;
      $("#tab1 .g_page span:nth-child(1)").text(g_pop + 1);
      $("#tab1 .pop>li").eq(g_pop).stop().fadeIn();
    }
  });
  /* tab2 */
  $("#tab2 .right_btn").click(function () {
    if (g_pop < 14) {
      $("#tab2 .pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop++;
      $("#tab2 .g_page span:nth-child(1)").text(g_pop + 1);
      $("#tab2 .pop>li").eq(g_pop).stop().fadeIn();
    }
  });


  //오른쪽 상단 버튼-이전보기
  /* tab1 */
  $("#tab1 .left_btn").click(function () {
    if (g_pop > 0) {
      $("#tab1 .pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop--;
      $("#tab1 .g_page span:nth-child(1)").text(g_pop + 1);
      $("#tab1 .pop>li").eq(g_pop).stop().fadeIn();
    }
  });
  /* tab2 */
  $("#tab2 .left_btn").click(function () {
    if (g_pop > 0) {
      $("#tab2 .pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop--;
      $("#tab2 .g_page span:nth-child(1)").text(g_pop + 1);
      $("#tab2 .pop>li").eq(g_pop).stop().fadeIn();
    }
  });

  //오른쪽 상단 버튼-닫기
  /* tab1 */
  $("#tab1 .btn_close, .pop").click(function () {

    $("html").css({
      overflowY: "scroll"
    });
    $("#tab1 #popup").stop().fadeOut();
    $("#tab1 .pop>li").stop().hide();
  });

  /* tab2 */
  $("#tab2 .btn_close").click(function () {

    $("html").css({
      overflowY: "scroll"
    });
    $("#tab2 #popup").stop().fadeOut();
    $("#tab2 .pop>li").stop().hide();
  });

  /*________________________________________________________PUBLISHING*/
  //화살표 깜빡깜빡________________________
  function guide1() {
    $(".w_slide_btn>i").toggleClass("active");
  }
  auto1 = setInterval(guide1, 500); //계속 깜빡




  //태블릿 화면(오버시 화면 올라가게)____________________
  $(".w_tab_slide ul li:nth-child(1)").mouseenter(function () {
    $(this).css({"background-position":"0 100%","transition":"6s"});
  });
  $(".w_tab_slide ul li:nth-child(1)").mouseleave(function () {
    $(this).css({"background-position":"0 0","transition":"1.5s"});
  });

  $(".w_tab_slide ul li:nth-child(2)").mouseenter(function () {
    $(this).css({"background-position":"0 100%","transition":"6s"});
  });
  $(".w_tab_slide ul li:nth-child(2)").mouseleave(function () {
    $(this).css({"background-position":"0 0","transition":"1.5s"});
  });
  $(".w_tab_slide ul li:nth-child(3)").mouseenter(function () {
    $(this).css({"background-position":"none"});
  });
  $(".w_tab_slide ul li:nth-child(3)").mouseleave(function () {
    $(this).css({"background-position":"none"});
  });

  //웹디자인 슬라이드___________________________
  $(".w_list li").click(function () {

    clearInterval(auto1); //화살표 깜빡거림 멈추게


    $(".w_list li").removeClass("btn_active"); //기존 숫자
    $(this).addClass("btn_active"); //클릭한 숫자

    val = $(this).index();
    $(".w_bg ul").animate({
      "left": -700 * val + "px"
    }); //왼쪽 배경이미지 슬라이드
    $(".w_txt_slide ul").animate({
      "left": -340 * val + "px"
    }); //왼쪽 설명텍스트 슬라이드
    $(".w_tab_slide ul").animate({
      "left": -794 * val + "px"
    }); //오른쪽 태블릿이미지 슬라이드
  });


  //detail 버튼 클릭시 모달창 띄우기______________________________
  $(".w_txt_slide>ul>li>.p_design").click(function () {


    w_pop = $(this).parent().index(); //detail버튼의 부모의 index
    $(".w_page span:nth-child(1)").text(w_pop + 1); //오른쪽 상단 페이지넘버
    $("html").css({
      overflowY: "hidden"
    }); //기존 html 스크롤 숨기기
    $(".w_pop>li").eq(w_pop).show(); //w_pop index에 해당하는 팝업보이기
    $("#w_popup").stop(true, true).fadeIn(); //검정배경

  });


  /*오른쪽 상단 버튼-다음보기*/
  $(".w_btn .right_btn").click(function () {

    $("#w_popup").scrollTop(0); /*스크롤 상단으로 올리기*/

    if (w_pop < 2) {
      $(".w_pop>li").eq(w_pop).stop(true, true).fadeOut();
      w_pop++;

      $(".w_page span:nth-child(1)").text(w_pop + 1); /*페이지 번호*/
      $(".w_pop>li").eq(w_pop).stop(true, true).fadeIn();
    }

  });



  /*오른쪽 상단 버튼-이전보기*/
  $(".w_btn .left_btn").click(function () {

    $("#w_popup").scrollTop(0); /*스크롤 상단으로 올리기*/

    if (w_pop > 0) {
      $(".w_pop>li").eq(w_pop).stop(true, true).fadeOut();
      w_pop--;

      $(".w_page span:nth-child(1)").text(w_pop + 1); /*페이지번호*/
      $(".w_pop>li").eq(w_pop).stop(true, true).fadeIn();
    }

  });


  /*오른쪽 상단 버튼-닫기*/
  $(".w_btn_close, .w_back").click(function () {
    $("html").css({
      overflowY: "scroll"
    });
    $("#w_popup").stop(true, true).fadeOut();
    $(".w_pop>li").stop(true, true).hide();
  });




  /*_____________________________________________________responsive*/

  //pc 화면(오버시 화면 올라가게)____________________
  $(".page4 .r_pc_slide_in").mouseenter(function(){
    $(this).css({"background-position":"0 100%","transition":"3s"});
  });
  $(".page4 .r_pc_slide_in").mouseleave(function(){
    $(this).css({"background-position":"0 0","transition":"1s"});
  });
  
  //tablet 화면(오버시 화면 올라가게)____________________
  $(".page4 .r_tablet_slide_in").mouseenter(function(){
    $(this).css({"background-position":"0 100%","transition":"3s"});
  });
  $(".page4 .r_tablet_slide_in").mouseleave(function(){
    $(this).css({"background-position":"0 0","transition":"1s"});
  });
  
  //phone 화면(오버시 화면 올라가게)____________________
  $(".page4 .r_phone_slide_in").mouseenter(function(){
    $(this).css({"background-position":"0 100%","transition":"3s"});
  });
  $(".page4 .r_phone_slide_in").mouseleave(function(){
    $(this).css({"background-position":"0 0","transition":"1s"});
  });
  







  /*________________________________________________________MOBILE*/


  $(".page5 .mobile_btn .btn").click(function(){//각 메뉴를 클릭했을때
    $(this).next().show(); //다음 형제인 .pop을 보이게함
    $("html").css({overflowY:"hidden"});//body스크롤없앰
    return false;
  });


  $(".page5 .mobile_btn .close").click(function(){//close눌렀을때
    $(".page5 .mo_pop").hide(); //.pop을 안보이게함
    $("html").css({"overflow-y":"scroll"});//body스크롤생김   
  });

  
  /*검정 배경 클릭시 닫기*/
  $(".page5 .mobile_btn .mo_pop").click(function(){
    $("html").css({"overflow-y":"scroll"});
    $(".page5 .mo_pop").hide();
    return false;
  });



















});