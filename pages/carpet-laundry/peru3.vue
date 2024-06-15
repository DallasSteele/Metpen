<template>
  <div class="container mt-5">

  <hr>
    <div class="mx-4">
<a class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" href="/">Home </a> <a class="text-muted text-decoration-none" href="#"> >> </a>
<a class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" href="/carpet-laundry/carpet-page"> Carpet Laundry</a> <a class="text-muted text-decoration-none" href="#"> >> </a>
<a class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" href="#"> MegaKarpet Wash</a> 

    </div>
  <hr>

    <div class="row">
      <div class="col-md-8">
        <h1>MegaKarpet Wash</h1>
        <p class="text-muted">Jl. Sudirman No.88, Jakarta Timur, DKI Jakarta 60271</p>
        <p>MegaKarpet Wash adalah solusi terbaik untuk semua kebutuhan laundry karpet Anda. Kami menyediakan layanan penjemputan dan pengantaran karpet, sehingga memudahkan Anda dalam menjaga kebersihan karpet tanpa repot. Dengan tim profesional dan peralatan mutakhir, kami siap melayani Anda dengan cepat dan efisien.</p>
        <p class="text-muted">Rating</p>
      </div>
      <div class="col-md-4">
        <img src="/images/index/carpet3.jpg" class="custom-image rounded mx-auto d-block" style="width: 200px; height: 200px" alt="Nama Perusahaan">
      </div>
    </div>

    <hr>

    <ServiceCard
      v-for="(service, index) in services"
      :key="index"
      :name="service.name"
      :description="service.description"
      :price="service.price"
      :image="service.image"
      @add-to-cart="addToCart"
    />

    <div v-if="cart.length" class="mt-5">
      <h2>Cart</h2>
      <ul class="list-group">
        <li v-for="(item, index) in cart" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
          {{ item.name }} - Rp. {{ item.price }}
        </li>
      </ul>
      <div class="mt-3 mb-5">
        <h3>Total: Rp. {{ totalPrice }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCard from '@/components/inc/ServiceCard.vue';

export default {
  components: {
    ServiceCard
  },
  data() {
    return {
      services: [
        {
          name: 'Mega Base Preset ',
          description: 'Pembersihan Karpet ukuran penyesuaian, pembersihan basic karpet.',
          price: 45000,
          image: '/images/index/test.jpg'
        },
        {
          name: 'Mega Foam Clean',
          description: 'Pembersihan Karpet menggunakan foam.',
          price: 80000,
          image: '/images/index/test.jpg'
        }
      ],
      cart: []
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    }
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      alert('Added to cart');
    }
  },
  mounted() {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      this.cart = savedCart;
    }
  }
};
</script>

<style>
.custom-image {
  width: 200px;
  height: 200px;
}
.service-card {
  margin-bottom: 1rem;
}
</style>
