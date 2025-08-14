
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


