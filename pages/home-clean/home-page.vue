<template>
    <div>
      <div id="carouselExample" class="carousel slide">
        <div class="d-grid gap-2 col-1 mx-auto">
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/index/hero-image.jpg" class="d-block w-100 rounded custom-image my-5" alt="slider1">
            <div class="overlay-text">
              <h1>Tidy Tidys</h1>
              <p>Description</p>
            </div>
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

<hr>
<div class="mx-4">
<a class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" href="/">Home </a> <a class="text-muted text-decoration-none" href="#"> >> </a>
<a class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" href="#"> Home Clean</a> 
</div>
<hr>
  
    <h2 class="my-5 mx-4">Pilih Penyedia Jasa</h2>
  <div class="row row-cols-1 row-cols-md-3 mx-2">
    <div class="col mb-4">
      <NuxtLink class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" to="/home-clean/peru4">
      <button class="card h-100 card-button zoom-effect-container ">
        <img src="/images/index/home-clean/homeclean1.jpg" class="card-img-top custom-img-size rounded mx-auto d-block" style="width: 15rem; height: 15rem;" alt="Nama Perusahaan Mitra">
        <div class="card-body">
          <h5 class="card-title">Home Shine</h5>
          <p class="card-text">Jl. Thamrin No. 24-25, Jakarta Pusat, DKI Jakarta 10230</p>
          <p class="card-text">Rating</p>
        </div>
      </button>
    </NuxtLink>
    </div>
    <!-- Repeat the above div.col.mb-4 for more cards -->
    <div class="col mb-4">
      <NuxtLink class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" to="/home-clean/peru5">
      <button class="card h-100 card-button zoom-effect-container ">
        <img src="/images/index/home-clean/homeclean2.jpg" class="card-img-top custom-img-size rounded mx-auto d-block" style="width: 15rem; height: 15rem;" alt="Nama Perusahaan Mitra">
        <div class="card-body">
          <h5 class="card-title">Sparkle</h5>
          <p class="card-text">Jl. Braga No.11, Jakarta Barat, DKI Jakarta 10221</p>
          <p class="card-text">Rating</p>
        </div>
      </button>
    </NuxtLink>
    </div>
    <div class="col mb-4">
      <NuxtLink class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" to="/home-clean/peru6">
      <button class="card h-100 card-button zoom-effect-container ">
        <img src="/images/index/home-clean/homeclean3.jpg" class="card-img-top custom-img-size rounded mx-auto d-block" style="width: 15rem; height: 15rem;" alt="Nama Perusahaan Mitra">
        <div class="card-body">
          <h5 class="card-title">Pristine House</h5>
          <p class="card-text">Jl. Demor No.66, Jakarta Barat, DKI Jakarta 11220</p>
          <p class="card-text">Rating</p>
        </div>
      </button>
    </NuxtLink>

    </div>
    <!-- Add more cards as needed -->
  </div>
    </div>
  </template>

<script>

</script>

<style scoped>
.custom-image {
  height: 52rem;
  width: 100%;
  object-fit: cover;
  object-position: center top;
  overflow: hidden;
  position: relative;
  transform: scale(1.09)
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:antiquewhite;
  padding: 10px;
}

.card-img-top {
      height: 200px; /* Adjust the height as needed */
      object-fit: cover;
    }
.card-button {
      border: none;
      background: none;
      padding: 0;
      text-align: left;
      width: 100%;
    }

.zoom-effect-container {
      overflow: hidden;
    }

.zoom-effect-container img {
      transition: transform 0.7s ease;
    }

.zoom-effect-container:hover img {
      transform: scale(0.87);
    }

.custom-img-size{
      width: 65%;
    }


</style>