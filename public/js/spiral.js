// Generated by CoffeeScript 1.8.0
(function() {
  var height, images, preload;

  preload = function(arrayOfImages) {
    return $(arrayOfImages).each(function() {
      return $('<img />').attr('src', this).appendTo('body').css('display', 'none');
    });
  };

  images = ["/css/Spiral/1.png", "/css/Spiral/2.png", "/css/Spiral/3.png", "/css/Spiral/4.png", "/css/Spiral/5.png", "/css/Spiral/6.png", "/css/Spiral/7.png", "/css/Spiral/8.png", "/css/Spiral/9.png", "/css/Spiral/10.png", "/css/Spiral/11.png", "/css/Spiral/12.png", "/css/Spiral/13.png", "/css/Spiral/14.png", "/css/Spiral/15.png", "/css/Spiral/16.png", "/css/Spiral/17.png", "/css/Spiral/18.png", "/css/Spiral/19.png", "/css/Spiral/20.png", "/css/Spiral/21.png", "/css/Spiral/22.png", "/css/Spiral/23.png", "/css/Spiral/24.png", "/css/Spiral/25.png", "/css/Spiral/26.png", "/css/Spiral/27.png", "/css/Spiral/28.png", "/css/Spiral/29.png"];

  preload(images);

  height = $(window).height();

  $(".spacer").css("height", "" + (height + 150));

  $(window).scroll(function() {
    var top;
    top = $(window).scrollTop();
    console.log("Scroll: " + top);
    if (top < 5) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/1.png)");
    } else if ((5 <= top && top < 10)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/2.png)");
    } else if ((10 <= top && top < 15)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/3.png)");
    } else if ((15 <= top && top < 20)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/4.png)");
    } else if ((20 <= top && top < 25)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/5.png)");
    } else if ((25 <= top && top < 30)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/6.png)");
    } else if ((30 <= top && top < 35)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/7.png)");
    } else if ((35 <= top && top < 40)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/8.png)");
    } else if ((40 <= top && top < 45)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/9.png)");
    } else if ((45 <= top && top < 50)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/10.png)");
    } else if ((50 <= top && top < 55)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/11.png)");
    } else if ((55 <= top && top < 60)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/12.png)");
    } else if ((60 <= top && top < 65)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/13.png)");
    } else if ((65 <= top && top < 70)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/14.png)");
    } else if ((70 <= top && top < 75)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/15.png)");
    } else if ((75 <= top && top < 80)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/16.png)");
    } else if ((80 <= top && top < 85)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/17.png)");
    } else if ((85 <= top && top < 90)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/18.png)");
    } else if ((90 <= top && top < 95)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/19.png)");
    } else if ((95 <= top && top < 100)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/20.png)");
    } else if ((100 <= top && top < 105)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/21.png)");
    } else if ((105 <= top && top < 110)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/22.png)");
    } else if ((110 <= top && top < 115)) {
      $("body").css("background-size", "50%");
      return $("body").css("background-image", "url(./css/Spiral/23.png)");
    } else if ((115 <= top && top < 120)) {
      $("body").css("background-size", "51%");
      return $("body").css("background-image", "url(./css/Spiral/24.png)");
    } else if ((120 <= top && top < 125)) {
      $("body").css("background-size", "57%");
      return $("body").css("background-image", "url(./css/Spiral/25.png)");
    } else if ((125 <= top && top < 130)) {
      $("body").css("background-size", "61%");
      return $("body").css("background-image", "url(./css/Spiral/26.png)");
    } else if ((130 <= top && top < 135)) {
      $("body").css("background-size", "63%");
      return $("body").css("background-image", "url(./css/Spiral/27.png)");
    } else if ((135 <= top && top < 145)) {
      $("body").css("background-size", "71%");
      return $("body").css("background-image", "url(./css/Spiral/28.png)");
    } else if (145 <= top) {
      $("body").css("background-size", "80%");
      return $("body").css("background-image", "url(./css/Spiral/29.png)");
    }
  });

}).call(this);
