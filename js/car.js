const isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (
      isMobile.Android()||
      isMobile.BlackBerry()||
      isMobile.iOS()||
      isMobile.Opera()||
      isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
};



$(function() {

  /* TOGGLE */
  let nav_toggle = $("#nav_toggle"),
      nav = $("#nav");

  $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    nav_toggle.toggleClass("active");
    nav.toggleClass("active");
    $("body").toggleClass("lock");

    if ( window.innerWidth >= 768 ) {
      $("body").removeClass("lock");
    };



  });




  /* GOODS_NAV_TOGGLE */
  let and = $("#and"),
      goods_nav_menu = $("#goods_nav_menu");

  $("#and").on("click", function(event) {
    event.preventDefault();

    and.toggleClass("active");
    goods_nav_menu.toggleClass("active");
  });




  /* COLLAPSE */
  $("[data-collapse]").on("click", function(event) {
    event.preventDefault();


    var $this = $(this),
        blockId = $this.data('collapse');

    if (window.innerWidth < 1024) {
    $(blockId).slideToggle();
    }

  });





});

