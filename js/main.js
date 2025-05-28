document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".js-promo");
  images.forEach((img, i) => {
    setTimeout(() => {
      img.classList.add("active");
    }, 400 * i);
  });
});


// slider.js
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".promo-gallery");
  let scrollAmount = 0;

  function autoScroll() {
    scrollAmount += 1;
    gallery.scrollLeft = scrollAmount;

    if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
      scrollAmount = 0;
    }
    requestAnimationFrame(autoScroll);
  }

  autoScroll();
});



document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".promo-gallery");

  let direction = 2; 
  let speed = 3;   

  function autoScroll() {
    gallery.scrollLeft += direction * speed;
 
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;

    
    if (gallery.scrollLeft >= maxScroll || gallery.scrollLeft <= 0) {
      direction *= -2;
    }

    requestAnimationFrame(autoScroll);
  }

  autoScroll();
});


 function showSection() {
    const section = document.getElementById('wadi-section');
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });
  }


 
  const swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 2,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 }
    }
  });

