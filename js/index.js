const navDock = document.getElementById('navDock');
const chantBanner = document.getElementById('chantBanner');
window.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("heroVideo");
  if (video) {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Video playing
        })
        .catch((error) => {
          // Autoplay failed — user gesture needed
          console.warn("Autoplay blocked, waiting for interaction...");
          document.body.addEventListener("click", () => video.play(), { once: true });
        });
    }
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navDock.classList.add('visible');
    chantBanner.classList.add('hidden');
  } else {
    navDock.classList.remove('visible');
    chantBanner.classList.remove('hidden');
  }
});


  const tabs = document.querySelectorAll('.tab-btn');
  const carousels = {
    moments: document.getElementById('moments-carousel'),
    memes: document.getElementById('memes-carousel')
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      Object.values(carousels).forEach(c => c.classList.add('hidden'));
      carousels[tab.dataset.tab].classList.remove('hidden');
    });
  });


  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  const positions = {
    "moments-carousel": 0,
    "memes-carousel": 0
  };

  function scrollCarousel(id, direction) {
    const wrapper = document.getElementById(id);
    const track = wrapper.querySelector('.carousel-track');
    const images = track.querySelectorAll('img');

    const imageWidth = images[0].offsetWidth + 32; // image + gap
    const visibleCount = Math.floor(wrapper.offsetWidth / imageWidth);

    positions[id] += direction;

    if (positions[id] < 0) positions[id] = 0;
    if (positions[id] > images.length - visibleCount) {
      positions[id] = images.length - visibleCount;
    }

    track.style.transform = `translateX(-${positions[id] * imageWidth}px)`;
  }

  function showTab(tabName) {
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.classList.remove("active");
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");

    document.getElementById("moments-carousel").classList.add("hidden");
    document.getElementById("memes-carousel").classList.add("hidden");
    document.getElementById(`${tabName}-carousel`).classList.remove("hidden");
  }
  

    const images = [
    "pics/wall.jpg",
    "pics/wall (1).png",
    "pics/wall (2).png",
    "pics/wall (3).png",
    "pics/wall (4).png",
    "pics/wall (5).png",
    "pics/wall (6).png"
  ];

  let currentIndex = 0;
  const slideImg = document.querySelector(".slide-img");

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slideImg.style.opacity = 0;

    setTimeout(() => {
      slideImg.src = images[currentIndex];
      slideImg.style.opacity = 1;
    }, 400); // match this with transition time
  }, 3000); // every 3 seconds

  
