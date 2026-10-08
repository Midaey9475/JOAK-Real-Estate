// main.js
// ---------------------------------------------------------------
// The small bits of JavaScript for this page:
//   1. open and close the mobile menu (hamburger button)
//   2. open and close the video pop-up
//   3. show a thank you message when the form is sent
// ---------------------------------------------------------------


// ----- 1. Hamburger menu -----
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

// clicking the hamburger opens the menu, clicking again closes it
hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");

    // tell screen readers if the menu is open or closed
    const isOpen = mobileMenu.classList.contains("open");
    hamburger.setAttribute("aria-expanded", isOpen);
});

// close the menu after the visitor clicks any link inside it
mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        hamburger.setAttribute("aria-expanded", false);
    });
});


// ----- 2. Video pop-up -----
const playBtn = document.getElementById("playBtn");
const videoModal = document.getElementById("videoModal");
const closeVideo = document.getElementById("closeVideo");
const tourVideo = document.getElementById("tourVideo");

function openVideo() {
    videoModal.classList.add("open");
    tourVideo.play();
}

function closeVideoPopup() {
    videoModal.classList.remove("open");
    // stop the video and take it back to the start
    tourVideo.pause();
    tourVideo.currentTime = 0;
}

// the play button on the page opens the pop-up
playBtn.addEventListener("click", function (event) {
    event.preventDefault();   // the link should not jump to the top of the page
    openVideo();
});

// the X button closes it
closeVideo.addEventListener("click", closeVideoPopup);

// clicking the dark area around the video closes it too
videoModal.addEventListener("click", function (event) {
    if (event.target === videoModal) {
        closeVideoPopup();
    }
});

// pressing the Escape key closes it
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeVideoPopup();
    }
});


// ----- 3. Thank you message (toast) -----
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");

contactForm.addEventListener("submit", function (event) {
    // stop the page from reloading
    event.preventDefault();

    // empty the form
    contactForm.reset();

    // show the message, then hide it again after 4 seconds
    toast.classList.add("show");
    setTimeout(function () {
        toast.classList.remove("show");
    }, 4000);
});
