$(document).ready(function () {
  let menuBtn = document.querySelector(".menu-mobile i");
  menuBtn.addEventListener("click", () => {
    let itemsMenu = document.querySelector(".items-menu-mobile");
    if (itemsMenu.classList.contains("show")) {
      itemsMenu.classList.remove("show");
      itemsMenu.classList.add("hide");
    } else {
      itemsMenu.classList.remove("hide");
      itemsMenu.classList.add("show");
    }
  });

  $(".box-depoimentos").slick({
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
});
