$(function () {
  let total = $(".panel li").length;
  console.log(total);
  let i = 0;
  function slide() {
    if (i == total - 1) {
      $(".panel")
        .stop()
        .animate({ "margin-left": "-2000px" }, function () {
          $(".panel").css({ "margin-left": "0" });
        });
      i = 0;
    } else {
      $(".panel")
        .stop()
        .animate({ "margin-left": -i * 500 });
    }
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
  }

  timer = setInterval(function () {
    i++;
    slide();

    $(".next").on("click", function () {
      clearInterval(timer);
      if (i == total - 1) {
        i = 0;
      } else {
        i++;
      }
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
      slide();
    });

    $(".navi li").on("click", function () {
      i = $(this).index();
      slide();
    });
  }, 1000);
});
