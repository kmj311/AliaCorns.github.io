$(function(){
   
  //  Sticky JS

  // 상단 메뉴 클릭시 부드러운 이동 설정시작
  var menuItem = $('#gnb a, h1 a');
  
  menuItem.click(function(e){
    var el = $(this).attr('href');
    console.log(el);      
    var elWrap = $(el);  //$('대상').메서드();  
    scrollMove(elWrap, 63);  
    e.preventDefault();
  });
  
  // 부드러운 움직임 함수 만들기
  function scrollMove(el, navHeight){
  
    var offset = el.offset().top;
    var totalPos = offset - navHeight;
  
    $('html, body').animate({scrollTop: totalPos}, 800);
  
  }


  // Rollover JS
  var imgItem = $(".cbp-item");
   

   imgItem.hover(
      function(){
         $(this).find('img').attr("src", $(this).find('img').attr("src").replace(/-off(\.gif|\.jpg|\.png)$/, "-on$1"));
      },
      function(){
         $(this).find('img').attr("src", $(this).find('img').attr("src").replace(/-on(\.gif|\.jpg|\.png)$/, "-off$1"));
      }
   );



  //  Covervid Call
  $('.covervid-video').coverVid(1920, 1080);

  // cubeportfolio Call
  $('#grid-container').cubeportfolio({
    filters: '#filters-container',   // 필터 처리 기능
    animationType: 'slideLeft',   //애니메이션 타입 설정
    gapHorizontal: 21,
    gapVertical: 30  
  });


  // ScrollMagic Call
  // 1. 컨트롤러 생성
  var controller = new ScrollMagic.Controller();

  // 2. 애니메이션 설정
  var circle1 = $('.circle1');
  var circle2 = $('.circle2');
  var circle3 = $('.circle3');
  var circle4 = $('.circle4');
  var tl = new TimelineMax();

  tl.from(circle1, 1, {y:40, opacity:0})
    .from(circle2, 1, {y:40, opacity:0})
    .from(circle3, 1, {y:40, opacity:0})
    .from(circle4, 1, {y:40, opacity:0});

  // 3. 장면 생성 및 설정
  var scene = new ScrollMagic.Scene({
    triggerElement: '#skills',
    triggerHook: 0.5
  })
  .setTween(tl)
  // .addIndicators({
  //   name: 'Scene',
  //   colorStart: 'red',
  //   colorEnd: 'red',
  //   colorTrigger: 'blue'
  // })
  .addTo(controller)
  .on('start end', function(){

    // Circle1
    $('.circle1').circleProgress({
      value: 0.87,
      size: 189,
      thickness: 10,
      fill: '#6dca40',
      animation: {
      duration: 1000
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(87 * progress) + '<i>%</i>');
  });

    // Circle2
    $('.circle2').circleProgress({
      value: 0.85,
      size: 189,
      thickness: 10,
      fill: '#fc0',
      animation: {
      duration: 2000
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(85 * progress) + '<i>%</i>');
  });

    // Circle3
    $('.circle3').circleProgress({
      value: 0.75,
      size: 189,
      thickness: 10,
      fill: '#21b3d8',
      animation: {
      duration: 3000
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
  });

    // Circle4
    $('.circle4').circleProgress({
      value: 0.80,
      size: 189,
      thickness: 10,
      fill: '#f5444f',
      animation: {
      duration: 4000
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
  });

});

  // Gallery Menu
  var gMenuItem = $('#works .cbp-filter-item');

  gMenuItem.click(function(){
    gMenuItem.removeClass('gmenu-act');
    $(this).addClass('gmenu-act');
  });

  // Jarallax Call
  $('.jarallax').jarallax({
    speed: 0.2,
  });


  // WOWJS Call
  new WOW().init();

  
});