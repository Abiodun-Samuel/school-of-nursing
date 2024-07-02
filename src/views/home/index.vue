<template>
  <!-- Start Clgun Banner 2 Area -->
  <div class="banner-area-2 big-bg-2">
    <div class="container">
      <div class="banner-content-2 row d-flex justify-content-center">
        <div class="content col-lg-10">
          <h1 data-aos="fade-up" class="fs-1" data-aos-delay="200">
            Olufunmi College of Nursing and Health Technology
          </h1>
          <p data-aos="fade-up" data-aos-delay="300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            dignissimos perferendis tempore incidunt odit rem recusandae rerum
            totam reiciendis deleniti.
          </p>
          <div class="buttons-action" data-aos="fade-up" data-aos-delay="100">
            <router-link class="default-btn" to="/about">Read More</router-link>
          </div>
          <div
            class="vertical-lr mb-0"
            data-aos="fade-zoom-in"
            data-aos-delay="100"
          >
            <p>World-Class <span>Education</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Clgun Banner 2 Area -->

  <About />
</template>

<script setup>
import About from "../../components/section/About.vue";
</script>
