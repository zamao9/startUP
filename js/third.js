const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}



$(function () {

  /* TOGGLE */
    let nav_toggle = $("#nav_toggle"),
        header = $("#header"),
        nav = $("#nav");

 $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

   if (nav_toggle.toggleClass("active")) {
    nav.toggleClass("active");
    header.toggleClass("active");
    $("body").toggleClass("lock");
   } else {
    nav_toggle.removeClass("active");
   }


  });



  /* DATA-SCROLL */
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let $this = $(this),
        blockId = $this.data('scroll'),
        nav_links = $("#nav_links"),
        blockOffset = $(blockId).offset().top - document.querySelector('header').offsetHeight;

    if (nav.toggleClass("active")) {
      nav_toggle.removeClass("active");
      nav.removeClass("active");
      header.removeClass("active");
      $("body").removeClass("lock");
    } else {
      nav_toggle.addClass("active", false);
    };

    $("#nav a").removeClass("active");
    $this.addClass("active");


  $("html, body").animate ({
    scrollTop: blockOffset
  }, 900);
  });


  /* SLIDER */
  $("[slider]").slick ({
    arrows: true,
    dots: true,
    speed: 500,
    easing: 'ease',
    draggable: false,
    waitForAnimate: false,
  });


  /* FILTER */
    const text = document.querySelectorAll('.works_links');
    const works_img = document.querySelectorAll('.works_img');

    function filter (category, items) {
      items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category);
        const isShowAll = category.toLowerCase() === 'all'
        if (isItemFiltered && !isShowAll) {
          item.classList.add("hide");
        } else {
          item.classList.remove("hide");
        };

      });

    };

    text.forEach((works_links) => {
      works_links.addEventListener('click', () => {
        const currentCategory = works_links.dataset.filter;
        filter(currentCategory, works_img);
      });
    });










})
