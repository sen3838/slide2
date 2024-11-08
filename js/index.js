$(function () {
  let total = $(".panel li").length;
  console.log(total);
  let i = 0;
  slide();
  function slide() {
    timer = setInterval(function () {
      if (i == total - 1) {
        $(".panel")
          .stop()
          .animate({ "margin-left": "-2000px" }, function () {
            $(".panel").css({ "margin-left": 0 });
          });
        i = 0;
      } else {
        $(".panel")
          .stop()
          .animate({ "margin-left": -i * 500 });
      }
      $(".navi li").removeClass("on");
      $(".navi li").eq(i).addClass("on");
    }, 2000);
  }

  $(".next").on("click", function () {
    clearInterval(timer);
    i++;
    if (i == total - 1) {
      $(".panel")
        .stop()
        .animate({ "margin-left": "-2000px" }, function () {
          $(".panel").css({ "margin-left": 0 });
        });
      i = 0;
    } else {
      $(".panel")
        .stop()
        .animate({ "margin-left": -i * 500 });
    }
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
    slide();
  });

  $(".prev").on("click", function () {
    clearInterval(timer);
    i--;
    if (i < 0) {
      $(".panel").css({ "margin-left": "-2000px" });
      $(".panel").stop().animate({ "margin-left": "-1500px" });
      i = 3;
    } else {
      $(".panel")
        .stop()
        .animate({ "margin-left": -i * 500 });
    }
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
    slide();
  });

  $(".navi li").on("click", function () {
    i = $(this).index();
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
    slide();
  });
});
