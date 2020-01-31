$(document).ready(function() {
  console.log("ready");

  $(".animate-link").hover(
    function() {
      $(this)
        .find(".underline")
        .animate(
          {
            width: "100%"
          },
          500
        );
    },
    function() {
      $(this)
        .find(".underline")
        .animate(
          {
            width: "40%"
          },
          500
        );
    }
  );
  
  toggleNav($(window).scrollTop());
});

$(window).scroll(function(event) {
  var scroll = $(window).scrollTop();
  toggleNav(scroll);
});

function toggleNav(scroll) {
  if (scroll > 1) {
    $(".nav").css({
      background: "white"
    });
    $(".logo-container img").css({
      width: "90px",
      height: "40px"
    });
    $(".nav-links li").css({
      color: "black"
    });
    $(".logo-container img").attr("src", "./images/logo.png");
  } else {
    $(".nav").css({
      background: "none"
    });
    $(".nav-links li").css({
      color: "white"
    });

    $(".logo-container img").css({
      width: "180px",
      height: "80px"
    });
    $(".logo-container img").attr("src", "./images/logo-white.png");
  }
}
