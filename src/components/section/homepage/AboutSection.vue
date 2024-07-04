<template>
  <!-- Start About Us Area 2 -->
  <div id="about" class="about-us-area-2 ptb-100">
    <div class="container">
      <div class="section-title" data-aos="fade-up" data-aos-delay="100">
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
          blanditiis. Asperiores adipisci illo inventore magni, ab ad. Culpa,
          hic pariatur.
        </p>
      </div>
      <div class="about-content-courser owl-carousel owl-theme">
        <div class="content-items" data-dot="<button>01</button>">
          <div
            class="image ct-bg-1"
            data-aos="fade-zoom-in"
            data-aos-delay="100"
          ></div>
          <div class="content" data-aos="fade-up" data-aos-delay="200">
            <span>Campus Information</span>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusm tem incid idunt ut labore et dolore magna aliqua. Ut enim ad
              minim iam quis nostrud xerci tation ulla mco laboris nisi ut
            </p>
            <router-link class="default-btn" to="/about">Read More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End About Us Area 2 -->
</template>

<script setup>
import $ from "jquery";
// About Content Slides
// $(".about-content-courser").owlCarousel({
//   loop: true,
//   nav: true,
//   dots: true,
//   dotsData: true,
//   autoplayHoverPause: true,
//   autoplay: true,
//   margin: 30,
//   items: 3,
//   navText: [
//     "<i class='bx bx-arrow-back bx-rotate-180'></i>",
//     "<i class='bx bx-arrow-back bx-rotate-0'></i>",
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
</script>
