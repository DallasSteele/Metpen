<template>
  <div >

 <div id="carouselExample" class="carousel slide">
  <div class="d-grid gap-2 col-1 mx-auto">
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/index/hero-image.jpg" class="d-block w-100 rounded custom-image" alt="slider1">
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

<div class="container">
    <h1 class="mt-4 mb-4">Choose Services</h1>
    <div class="container text-left">
      <div class="row row-cols-1 row-cols-md-2 g-4 mb-5">
        <div class="col">
          <NuxtLink class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" to="/carpet-laundry/carpet-page">
            <img src="/images/index/carpet-laundry.jpg" class="img-fluid rounded custom-img-size" alt="pilihan 1">
            <h4 class="pt-3">Carpet Laundry</h4>
          </NuxtLink>
        </div>
        <div class="col">
          <NuxtLink class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" to="/home-clean/home-page">
            <img src="/images/index/home-cleaning.jpg" class="img-fluid rounded custom-img-size" alt="pilihan 2">
            <h4 class="pt-3">Home Clean</h4>
          </NuxtLink>
        </div>
        <div class="col">
          <NuxtLink class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" to="/pool-clean/pool-page">
            <img src="/images/index/pool-cleaning.jpg" class="img-fluid rounded custom-img-size" alt="pilihan 3">
            <h4 class="pt-3">Pool Clean</h4>
          </NuxtLink>
        </div>
        <div class="col">
          <NuxtLink class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" to="/lavatory/lavatory-page">
            <img src="/images/index/lavatory.jpg" class="img-fluid rounded custom-img-size" alt="pilihan 4">
            <h4 class="pt-3">Lavatory</h4>
          </NuxtLink>
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

.zoom-effect-container {
      overflow: hidden;
    }

    .zoom-effect-container img {
      transition: transform 0.7s ease;
    }

    .zoom-effect-container:hover img {
      transform: scale(1.05);
    }

    .custom-img-size{
      width: 65%;
    }

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