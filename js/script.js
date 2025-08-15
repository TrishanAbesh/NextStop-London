
function acceptCookies() {
    document.cookie = "cookieAccepted=true; max-age=31536000; path=/";
    document.getElementById("cookieBanner").style.display = "none";
}

function declineCookies() {
    document.cookie = "cookieAccepted=false; max-age=31536000; path=/";
    document.getElementById("cookieBanner").style.display = "none";
}

function essentialCookies() {
    document.cookie = "cookieAccepted=essential; max-age=31536000; path=/";
    document.getElementById("cookieBanner").style.display = "none";
}

// Run after page load
document.addEventListener("DOMContentLoaded", function () {
    // Show banner if no cookie set
    if (!document.cookie.includes("cookieAccepted=")) {
        document.getElementById("cookieBanner").style.display = "flex";
    }
});


    // Simple slideshow for homepage images
    const slides = document.querySelectorAll('.slideshow-container .slide');
    if (slides.length > 0) {
        let current = 0;
        setInterval(() => {
            slides[current].style.display = "none";
            current = (current + 1) % slides.length;
            slides[current].style.display = "block";
        }, 3000); // Change slide every 3 seconds
    }


//codes to handle the for popup message after form submission
  function showConfirmation() {
    alert("✅ We got your message and will contact you shortly. Thank you!");
    return true; // Allows the form to submit if needed
  }

  // js/script.js

let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  
  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // show the current slide
  slides[slideIndex - 1].style.display = "block";
  
  // change every 4 seconds
  setTimeout(showSlides, 2000);
}

// start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", showSlides);

// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector("nav ul");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});


