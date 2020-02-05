$(document).ready(function() {
  // Nav links animation
  $(".animate-link").hover(
    function() {
      $(this)
        .find(".Navunderline")
        .show()
        .animate(
          {
            width: "100%"
          },
          200
        );
    },
    function() {
      $(this)
        .find(".Navunderline")
        .removeAttr("style")
        .hide();
    }
  );

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

  var headerOffset = $(".nav").height();
  $(".gallery-banner").css({
    "padding-top": headerOffset + 100 + "px"
  });
  $(".package-nav").css({
    "padding-top": headerOffset + 100 + "px"
  });

  if ($(window).width() > 768) {
    $(".gallery-item").hover(
      function() {
        $(this)
          .find("img")
          .css({
            filter: "grayscale(0%)"
          })
          .parent()
          .find(".gallery-overlay")
          .css({
            display: "flex"
          });
      },
      function() {
        $(this)
          .find("img")
          .css({
            filter: "grayscale(100%)"
          })
          .parent()
          .find(".gallery-overlay")
          .css({
            display: "none"
          });
      }
    );
  }
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
    $(".nav-links li a").css({
      color: "#767676"
    });
    $(".logo-container img").attr("src", "./images/logo.png");
  } else {
    $(".nav").css({
      background: "none"
    });
    $(".nav-links li a").css({
      color: "white"
    });

    $(".logo-container img").css({
      width: "180px",
      height: "80px"
    });
    $(".logo-container img").attr("src", "./images/logo-white.png");
  }
}

function toggleNavBlack(scroll) {
  if (scroll > 1) {
    $(".nav").css({
      background: "white"
    });
    $(".logo-container img").css({
      width: "90px",
      height: "40px"
    });
    $(".nav-links li a").css({
      color: "#767676"
    });
  } else {
    $(".nav").css({
      background: "none"
    });
    $(".nav-links li a").css({
      color: "#767676"
    });

    $(".logo-container img").css({
      width: "180px",
      height: "80px"
    });
  }
}
