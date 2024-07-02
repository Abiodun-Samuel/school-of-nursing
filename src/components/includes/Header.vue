<template>
  <!-- preloader -->
  <!-- <div class="preloader-container" id="preloader">
    <div class="preloader-dot"></div>
    <div class="preloader-dot"></div>
    <div class="preloader-dot"></div>
    <div class="preloader-dot"></div>
    <div class="preloader-dot"></div>
  </div> -->
  <!-- preloader -->

  <!-- Start Navbar Area Start -->
  <div class="navbar-area style-2" id="navbar">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <router-link class="navbar-brand" to="/">
          <img
            class="logo-light rounded shadow"
            width="70"
            src="/assets/images/logo-sm-2.png"
            alt="logo"
          />
          <img
            class="logo-dark rounded shadow"
            width="70"
            src="/assets/images/logo-sm-2.png"
            alt="logo"
          />
        </router-link>

        <button
          class="navbar-toggler"
          data-bs-toggle="offcanvas"
          role="button"
          aria-controls="navbarOffcanvas"
        >
          <Icon icon="gg:menu-grid-o" />
        </button>
        <div class="collapse navbar-collapse justify-content-between">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link"> Home </router-link>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                Pages
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">About Us</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/" class="nav-link">News</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Blogs</router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                Academics
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Academics</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/" class="nav-link"
                    >Undergraduate</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Graduate</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/" class="nav-link"
                    >Online Education</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Faculty</router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                Admissions
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Admissions</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/" class="nav-link"
                    >How to Apply</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/" class="nav-link"
                    >Tuition & Fees</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/" class="nav-link"
                    >Financial Aid</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/" class="nav-link"
                    >Date & Deadlines</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/" class="nav-link"
                    >Schedule a Tour</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                Courses
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <router-link to="/" class="nav-link"
                    >Courses Sidebar</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/" class="nav-link"
                    >Course Details</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link"> Contact </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <!-- End Navbar Area Start -->

  <!-- Start Responsive Navbar Area -->
  <div
    class="responsive-navbar offcanvas offcanvas-end"
    data-bs-backdrop="static"
    tabindex="-1"
    id="navbarOffcanvas"
  >
    <div class="offcanvas-header">
      <router-link to="/" class="logo d-inline-block">
        <img class="logo-light" src="/assets/images/logo-sm-2.png" alt="logo" />
      </router-link>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="accordion" id="navbarAccordion">
        <div class="accordion-item">
          <router-link class="accordion-link without-icon" to="/">
            Home
          </router-link>
        </div>
        <div class="accordion-item">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Pages
          </button>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#navbarAccordion"
          >
            <div class="accordion-body">
              <div class="accordion" id="navbarAccordion8">
                <div class="accordion-item">
                  <router-link to="/" class="accordion-link">
                    About Us
                  </router-link>
                </div>
                <div class="accordion-item">
                  <router-link to="/" class="accordion-link">
                    News
                  </router-link>
                </div>
                <div class="accordion-item">
                  <router-link to="/" class="accordion-link">
                    Blogs
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Academics
          </button>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#navbarAccordion"
          >
            <div class="accordion-body">
              <div class="accordion" id="navbarAccordion30">
                <div class="accordion-item">
                  <router-link to="/" class="accordion-link">
                    Academics
                  </router-link>
                </div>
                <div class="accordion-item">
                  <router-link to="/" class="accordion-link">
                    Undergraduate
                  </router-link>
                </div>
                <div class="accordion-item">
                  <router-link to="/" class="accordion-link">
                    Graduate
                  </router-link>
                </div>
                <div class="accordion-item">
                  <router-link to="/" class="accordion-link">
                    Faculty
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Admissions
          </button>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#navbarAccordion"
          >
            <div class="accordion-body">
              <div class="accordion" id="navbarAccordion31">
                <div class="accordion-item">
                  <router-link to="/" class="accordion-link">
                    Admissions
                  </router-link>
                </div>
                <div class="accordion-item">
                  <router-link to="/" class="accordion-link">
                    How to Apply
                  </router-link>
                </div>
                <div class="accordion-item">
                  <router-link to="/" class="accordion-link">
                    Tuition &amp; Fees
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Courses
          </button>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            data-bs-parent="#navbarAccordion"
          >
            <div class="accordion-body">
              <div class="accordion" id="navbarAccordion32">
                <div class="accordion-item">
                  <router-link to="/" class="accordion-link">
                    Course Details
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <router-link class="accordion-link without-icon" to="contact-us.html">
            Contact Us
          </router-link>
        </div>
      </div>
      <div class="offcanvas-contact-info">
        <h4>Contact Info</h4>
        <ul class="contact-info list-style">
          <li>
            <i class="bx bxs-envelope"></i>
            <router-link to="contact%40Clgunme.html"
              ><span
                class="__cf_email__"
                data-cfemail="98fbf7f6ecf9fbecd8dbf4ffedf6f5fdb6fdfced"
                >[email&#160;protected]</span
              ></router-link
            >
          </li>
        </ul>
        <!-- <ul class="social-profile list-style">
          <li>
            <router-link to="https://www.fb.com/" target="_blank"
              ><i class="bx bxl-facebook"></i
            ></router-link>
          </li>
          <li>
            <router-link to="https://www.instagram.com/" target="_blank"
              ><i class="bx bxl-instagram"></i
            ></router-link>
          </li>
          <li>
            <router-link to="https://www.linkedin.com/" target="_blank"
              ><i class="bx bxl-linkedin"></i
            ></router-link>
          </li>
        </ul> -->
      </div>
      <div class="offcanvas-other-options">
        <div class="option-item">
          <router-link to="contact-us.html" class="default-btn"
            >Contact Us</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <!-- End Responsive Navbar Area -->
</template>

<script setup>
import $ from "jquery";
import AOS from "aos";
import Icon from "../common/Icon.vue";

// Header Sticky
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 35) {
    $(".navbar-area").addClass("sticky");
  } else {
    $(".navbar-area").removeClass("sticky");
  }
});

// // Banner slides
// $(".slider-courser").owlCarousel({
//   nav: true,
//   loop: true,
//   dots: false,
//   margin: 0,
//   autoplay: true,
//   autoplayHoverPause: true,
//   autoplayTimeout: 3000,
//   smartSpeed: 1000,
//   navText: [
//     "<i class='bx bx-left-arrow-alt'></i>",
//     "<i class='bx bx-right-arrow-alt'></i>",
//   ],
//   responsive: {
//     0: {
//       items: 1,
//     },
//     576: {
//       items: 1,
//     },
//     768: {
//       items: 1,
//     },
//     992: {
//       items: 1,
//     },
//     1200: {
//       items: 1,
//     },
//   },
// });

// // Courses slides
// $(".courses-courser").owlCarousel({
//   nav: false,
//   loop: true,
//   dots: true,
//   margin: 0,
//   autoplay: false,
//   autoplayHoverPause: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     576: {
//       items: 2,
//     },
//     768: {
//       items: 2,
//     },
//     992: {
//       items: 3,
//     },
//     1200: {
//       items: 3,
//     },
//   },
// });

// // Campus slides
// $(".campus-slider").owlCarousel({
//   nav: false,
//   loop: true,
//   dots: false,
//   center: true,
//   margin: 20,
//   autoHeight: true,
//   autoplay: true,
//   autoplayHoverPause: true,
//   smartSpeed: 1000,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     576: {
//       items: 1,
//     },
//     768: {
//       items: 1,
//     },
//     992: {
//       items: 2,
//     },
//     1200: {
//       items: 2,
//     },
//   },
// });

// // Event Slides
// $(".slider-event").owlCarousel({
//   loop: true,
//   nav: true,
//   dots: false,
//   autoplayHoverPause: true,
//   autoplay: true,
//   margin: 30,
//   items: 3,
//   navText: [
//     "<i class='bx bx-chevron-left'></i>",
//     "<i class='bx bx-chevron-right'></i>",
//   ],
//   responsive: {
//     0: {
//       items: 1,
//     },
//     576: {
//       items: 1,
//     },
//     768: {
//       items: 2,
//     },
//     992: {
//       items: 2,
//     },
//     1200: {
//       items: 3,
//     },
//   },
// });

// // Popup Video
// $(".popup-youtube").magnificPopup({
//   disableOn: 320,
//   type: "iframe",
//   mainClass: "mfp-fade",
//   removalDelay: 160,
//   preloader: false,
//   fixedContentPos: false,
// });

// // Testimonial Slides
// $(".lgun-testimonial-navigator").owlCarousel({
//   loop: true,
//   nav: true,
//   dots: false,
//   autoplayHoverPause: true,
//   autoplay: true,
//   items: 1,
//   navText: [
//     "<i class='bx bx-left-arrow-alt'></i>",
//     "<i class='bx bx-right-arrow-alt'></i>",
//   ],
// });

// Animation
AOS.init({
  once: true,
  duration: 2000,
});

// // Faq section
// const faqItems = document.querySelectorAll(".faq-item");

// faqItems.forEach((item) => {
//   const question = item.querySelector(".faq-question");
//   const answer = item.nextElementSibling;
//   const icon = item.querySelector("i");

//   item.addEventListener("click", () => {
//     faqItems.forEach((otherItem) => {
//       if (otherItem !== item) {
//         const otherAnswer = otherItem.nextElementSibling;
//         const otherIcon = otherItem.querySelector("i");

//         otherAnswer.classList.remove("active");
//         otherIcon.classList.remove("active");
//         otherAnswer.style.maxHeight = "0";
//       }
//     });

//     answer.classList.toggle("active");
//     icon.classList.toggle("active");
//     if (answer.classList.contains("active")) {
//       answer.style.maxHeight = answer.scrollHeight + "px";
//     } else {
//       answer.style.maxHeight = "0";
//     }
//   });
// });

// Preloader
// $(window).on("load", function () {
$("#preloader").delay(350).fadeOut("slow"); // fade out the preloader background
$("body").delay(350).css({ overflow: "visible" }); // show the body content
// });

// Go to Top
$(function () {
  // Scroll Event
  $(window).on("scroll", function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 600) $(".go-top").addClass("active");
    if (scrolled < 600) $(".go-top").removeClass("active");
  });

  // Click Event
  $(".go-top").on("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 500);
  });
});
</script>
