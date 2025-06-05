document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // FAQ Toggle
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const answer = item.querySelector("p");
      const isVisible = answer.style.display === "block";

      // Hide all answers
      document
        .querySelectorAll(".faq-item p")
        .forEach((p) => (p.style.display = "none"));

      // Show only the clicked answer
      answer.style.display = isVisible ? "none" : "block";
    });
  });
});

// Carousel Functionality
const videos = document.querySelectorAll(".carousel video");
let currentIndex = 0;
let interval;

function showVideo(index) {
  videos.forEach((video, i) => {
    video.classList.toggle("active", i === index);
    if (i === index) {
      video.play(); // Play the active video
    } else {
      video.pause(); // Pause others
      video.currentTime = 0; // Reset time
    }
  });
}

function nextVideo() {
  currentIndex = (currentIndex + 1) % videos.length;
  showVideo(currentIndex);
}

function startCarousel() {
  interval = setInterval(nextVideo, 5000); // Change every 5 seconds
}

showVideo(currentIndex);
startCarousel(); // Start automatic video switching

function openPopup(type) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");

  if (type === "floorplan") {
    popupImg.src = "/GrimmegjerdeHemsida/img/villa lillabo planlösning.png";
    popupImg.alt = "Planlösning Villa Lillabo";
  } else if (type === "facade") {
    popupImg.src = "/GrimmegjerdeHemsida/img/villa lillabo fasadlösning.png";
    popupImg.alt = "Fasadlösning Villa Lillabo";
  }

  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// <-- Villa Storabo

function openPopupStorabo(type) {
  const popup = document.getElementById("popup-storabo");
  const popupImg = document.getElementById("popup-img-storabo");

  if (type === "floorplan") {
    popupImg.src = "/GrimmegjerdeHemsida/img/Villa Storabo fasad.jpeg.png";
    popupImg.alt = "Planlösning Villa Storabo";
  } else if (type === "facade") {
    popupImg.src = "/GrimmegjerdeHemsida/img/villa storabo planlösning.png";
    popupImg.alt = "Fasadlösning Villa Storabo";
  }

  popup.style.display = "flex";
}

function closePopupStorabo() {
  document.getElementById("popup-storabo").style.display = "none";
}

let imagesViboSpecific = [];
let currentIndexViboSpecific = 0;

// <-- Villa Vibo

function openPopupViboSpecific(type) {
  const popup = document.getElementById("popup-vibo-specific");
  const popupImg = document.getElementById("popup-img-vibo-specific");

  if (type === "floorplan") {
    imagesViboSpecific = [
      {
        src: "/GrimmegjerdeHemsida/img/villa vibo planlösning.png",
        alt: "Planlösning 1 Villa Vibo",
      },
      {
        src: "/GrimmegjerdeHemsida/img/villa vibo planlösning2.png",
        alt: "Planlösning 2 Villa Vibo",
      },
    ];
  } else if (type === "facade") {
    imagesViboSpecific = [
      {
        src: "/GrimmegjerdeHemsida/img/villa vibo fasad.png",
        alt: "Fasadritning 1 Villa Vibo",
      },
      {
        src: "/GrimmegjerdeHemsida/img/villa vibo fasad2.png",
        alt: "Fasadritning 2 Villa Vibo",
      },
    ];
  }

  currentIndexViboSpecific = 0;
  updatePopupImageViboSpecific();
  popup.style.display = "flex";
}

function updatePopupImageViboSpecific() {
  const popupImg = document.getElementById("popup-img-vibo-specific");
  popupImg.src = imagesViboSpecific[currentIndexViboSpecific].src;
  popupImg.alt = imagesViboSpecific[currentIndexViboSpecific].alt;
}

function nextImageViboSpecific() {
  currentIndexViboSpecific =
    (currentIndexViboSpecific + 1) % imagesViboSpecific.length;
  updatePopupImageViboSpecific();
}

function prevImageViboSpecific() {
  currentIndexViboSpecific =
    (currentIndexViboSpecific - 1 + imagesViboSpecific.length) %
    imagesViboSpecific.length;
  updatePopupImageViboSpecific();
}

function closePopupViboSpecific() {
  document.getElementById("popup-vibo-specific").style.display = "none";
}

// <-- Carousel Step-by-Step
const track = document.querySelector(".process-track");
const steps = document.querySelectorAll(".process-step");
const prevButton = document.querySelector(".process-prev");
const nextButton = document.querySelector(".process-next");

let currentStep = 0;

function updateCarousel() {
  const stepWidth = track.offsetWidth; // use the track's visible width
  track.style.transform = `translateX(-${currentStep * stepWidth}px)`;
}

// Move next
nextButton.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateCarousel();
  }
});

// Move previous
prevButton.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    updateCarousel();
  }
});

// Make sure it's updated on resize
window.addEventListener("resize", updateCarousel);

// Initial call to set correct position
updateCarousel();

document.querySelectorAll(".faq-item h3").forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentElement;
    parent.classList.toggle("active");
  });
});
