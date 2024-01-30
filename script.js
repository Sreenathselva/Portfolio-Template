window.addEventListener('load', function() {
  var loader = document.getElementById("preloader");
  loader.style.display = "none";
});


$(document).ready(function(){
    $(".pOwl").owlCarousel({
        items: 3, // Number of slides to show at once
        loop: true, // Enable infinite loop
        autoplay: true, // Enable autoplay
        autoplayTimeout: 5000, // Autoplay delay in milliseconds
        smartSpeed:800,
        margin:0,
        dots:true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1080: {
            items: 2
          }
        }
    });
  });

  // form
  document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('#contactMe input');

    inputs.forEach(function (input) {
        input.addEventListener('input', function () {
            input.classList.toggle('hasText', input.value.trim() !== '');
        });
    });
});


// MyStrength
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
  });
});

///////////////////////////////// clients////////////////////////////////////////
$(document).ready(function(){
  $(".clOwlBoxes").owlCarousel({
      items: 5, // Number of slides to show at once
      loop: true, // Enable infinite loop
      autoplay: true, // Enable autoplay
      autoplayTimeout: 3000, // Autoplay delay in milliseconds
      smartSpeed:800,
      margin:0,
      dots:false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1080: {
          items: 5
        }
      }
  });
});

$(document).ready(function(){
  $(".portOwlBoxes").owlCarousel({
      items: 4, // Number of slides to show at once
      loop: true, // Enable infinite loop
      autoplay: true, // Enable autoplay
      autoplayTimeout: 3000, // Autoplay delay in milliseconds
      smartSpeed:800,
      margin:0,
      dots:false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1080: {
          items: 4
        }
      }
  });
});




// functions for links

$(document).ready(function () {
  $(".abtLink").click(function () {
      $("#AboutMe").css({ top: "0", opacity: "1" });
  });

  $(".Down").click(function () {
      $("#AboutMe").css({ top: "-100vh", opacity: "0" });
  });
});


// PAGES

$(document).ready(function () {
  $(".gallery-slide").owlCarousel({
    items: 3,
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    dots: true,
    nav:true,
    responsiveClass: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        center: false,
        nav:true,
      },
      600: {
        items: 1,
        center: false,
        nav:true,
      },
      1000: {
        items: 3,
        nav:true,
      },
    },
  });

  $('.gallery-slide').on('translate.owl.carousel', function (event) {
    var centerIndex = event.item.index;
    console.log('Center Index:', centerIndex);
    $('.gal-box.gal-active').removeClass('gal-active');
    var $centerItem = $('.gal-box').eq(centerIndex);
    $centerItem.addClass('gal-active');
  });
});
      
// pages videos

// function setupModalListeners(modal, opModal, clModal, modalBg) {
//   const toggle = [opModal, clModal, modalBg];

//   for (let i = 0; i < toggle.length; i++) {
//     toggle[i].addEventListener('click', function () {
//       modal.classList.toggle('is-show');
//     }, false);
//   }
// }

// const modal = document.getElementById('modal');
// const opModal = document.getElementById('opModal');
// const clModal = document.getElementById('clModal');
// const modalBg = document.getElementById('modalBg');

// setupModalListeners(modal, opModal, clModal, modalBg);

// const modal2 = document.getElementById('modal2');
// const opModal2 = document.getElementById('opModal2');
// const clModal2 = document.getElementById('clModal2');
// const modalBg2 = document.getElementById('modalBg2');

// setupModalListeners(modal2, opModal2, clModal2, modalBg2);

// const modal3 = document.getElementById('modal3');
// const opModal3 = document.getElementById('opModal3');
// const clModal3 = document.getElementById('clModal3');
// const modalBg3 = document.getElementById('modalBg3');

// setupModalListeners(modal3, opModal3, clModal3, modalBg3);

// var uvideo = document.getElementById('uvideo');

// // Add a click event listener to the play button
// opModal3.addEventListener('click', function() {
//   uvideo.src += "&autoplay=1"; // Append autoplay parameter to the video URL
// });

// // Add a click event listener to the pause button
// clModal3.addEventListener('click', function() {
//   // Reload the video to pause it (stop autoplay)
//   uvideo.src = uvideo.src.replace("&autoplay=1", "");
// });

