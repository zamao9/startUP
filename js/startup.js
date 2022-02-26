document.addEventListener('DOMContentLoaded', () => {


  /* BURGER */

  burgerActive();

  function burgerActive() {

    let nav_toggle = document.getElementById('nav_toggle'),
      header = document.getElementById('header'),
      nav = document.getElementById('nav'),
      links = document.getElementsByClassName('nav_links'),
      hide_back = document.getElementById('hide_back'),
      body = document.getElementsByTagName('body');


    nav_toggle.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('active');
      header.classList.toggle('active');
      nav.classList.toggle('active');
      hide_back.classList.toggle('active');
      body[0].classList.toggle('block');
    })

    for (let i=0; links.length > i; ++i) {
      links[i].addEventListener('click', (event) => {
        for (let i=0; links.length > i; ++i) {
          links[i].classList.remove('active');
        }
        event.currentTarget.classList.add('active');
        header.classList.remove('active');
        nav_toggle.classList.remove('active');
        nav.classList.remove('active');
        hide_back.classList.remove('active');
        body[0].classList.remove('block');
      })
    }
  };




  /* HIDE_BACK */

  hideBackActive();

  function hideBackActive() {

    let nav_toggle = document.getElementById('nav_toggle'),
      header = document.getElementById('header'),
      nav = document.getElementById('nav'),
      hide_back = document.getElementById('hide_back'),
      body = document.getElementsByTagName('body');

    hide_back.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('active');
      header.classList.remove('active');
      nav.classList.remove('active');
      nav_toggle.classList.remove('active');
      body[0].classList.remove('block');
    })


  }




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




});




$(function () {




  /* DATA-SCROLL */
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let $this = $(this),
        blockId = $this.data('scroll'),
        nav = $("#nav"),
        blockOffset = $(blockId).offset().top - document.querySelector('header').offsetHeight;

    $("html, body").animate ({
    scrollTop: blockOffset
  }, 900);

    });




  /* SLIDER */
  $('.slider').slick ({
    dots: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    infinite: true,
    easing: 'ease',
    centerMode: false,
    speed: 1000,
    touchThreshold: 15,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 671,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 671,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });




});
