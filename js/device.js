$(document).ready(function(){

  $(".btns2 button").click(function(){//각 메뉴를 클릭했을때
    $(this).next().show(); //다음 형제인 .pop을 보이게함
    $("html").css({overflowY:"hidden"});//body스크롤없앰
    return false;
  });


  $(".btns3 button").click(function(){//각 메뉴를 클릭했을때
    $(this).next().show(); //다음 형제인 .pop을 보이게함
    $("html").css({overflowY:"hidden"});//body스크롤없앰
    return false;
  });


  $(".close").click(function(){//close눌렀을때
    $(".pop").hide(); //.pop을 안보이게함
    $("html").css({"overflow-y":"scroll"});//body스크롤생김   
  });

  
  /*검정 배경 클릭시 닫기*/
  $(".pop").click(function(){
    $("html").css({"overflow-y":"scroll"});
    $(".pop").hide();
    return false;
  });




});