<template>
  <div >

 <div id="carouselExample" class="carousel slide">
  <div class="d-grid gap-2 col-1 mx-auto">
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/index/bowset.png" class="d-block w-100 rounded" alt="slider1">
    </div>
    <div class="carousel-item">
      <img src="/images/index/isei1.png" class="d-block w-100" alt="slider2">
    </div>
    <div class="carousel-item">
      <img src="/images/index/isei2.png" class="d-block w-100" alt="slider3">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="container">
  <h1 class="mt-4 mb-3">Choose Services</h1>
  <div class="container text-left">
  <div class="row row-cols-3">
    <a href="" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><div class="col mb-4"><img src="/images/index/owl.jpg" class="img-fluid" alt="pilihan 1"><h4>Owl</h4></div></a>
    <a href="" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><div class="col mb-4"><img src="/images/index/lion2.jpg" class="img-fluid" alt="pilihan 2"><h4>Lion</h4></div></a>
    <a href="" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><div class="col mb-4"><img src="/images/index/olw.jpg" class="img-fluid" alt="pilihan 3"><h4>Owl 2</h4></div></a>
    <a href="" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><div class="col mb-4"><img src="/images/index/tiger.jpg" class="img-fluid" alt="pilihan 4"><h4>Tiger</h4></div></a>

      <!-- DEMO 2-->
  <div class="py-5">
    <h3 class="font-weight-bold mb-0">Demo 2</h3>
    <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <div class="row">
      <!-- DEMO 2 Item-->
      <div class="col-lg-6 mb-3 mb-lg-0">
        <div class="hover hover-2 text-white rounded"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570786258/hoverSet-2_lt7geh.jpg" alt="">
          <div class="hover-overlay"></div>
          <div class="hover-2-content px-5 py-4">
            <h3 class="hover-2-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Image </span>Caption</h3>
            <p class="hover-2-description text-uppercase mb-0">Lorem ipsum dolor sit amet, consectetur <br>adipisicing elit.</p>
          </div>
        </div>
      </div>

      <!-- DEMO 2 Item-->
      <div class="col-lg-6">
        <div class="hover hover-2 text-white rounded"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570786261/hoverSet-1_pha5qe.jpg" alt="">
          <div class="hover-overlay"></div>
          <div class="hover-2-content px-5 py-4">
            <h3 class="hover-2-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light">Image </span>Caption</h3>
            <p class="hover-2-description text-uppercase mb-0">Lorem ipsum dolor sit amet, consectetur <br>adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</div>




</div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Homepage'
    }
  }
}
</script>


<style scoped>

/* DEMO GENERAL ============================== */
.hover {
  overflow: hidden;
  position: relative;
  padding-bottom: 60%;
}

.hover-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 90;
  transition: all 0.4s;
}

.hover img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
}

.hover-content {
  position: relative;
  z-index: 99;
}

/* DEMO 2 ============================== */
.hover-2 .hover-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
}

.hover-2-title {
  position: absolute;
  top: 50%;
  left: 0;
  text-align: center;
  width: 100%;
  z-index: 99;
  transition: all 0.3s;
}

.hover-2-description {
  width: 100%;
  position: absolute;
  bottom: 0;
  opacity: 0;
  left: 0;
  text-align: center;
  z-index: 99;
  transition: all 0.3s;
}

.hover-2:hover .hover-2-title {
  transform: translateY(-1.5rem);
}

.hover-2:hover .hover-2-description {
  bottom: 0.5rem;
  opacity: 1;
}

.hover-2:hover .hover-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1));
}
</style>