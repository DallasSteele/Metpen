<template>
  <div class="container mt-5">

  <hr>
    <div class="mx-4">
<a class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" href="/">Home </a> <a class="text-muted text-decoration-none" href="#"> >> </a>
<a class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" href="/lavatory/lavatory-page"> Home Clean</a> <a class="text-muted text-decoration-none" href="#"> >> </a>
<a class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" href="#"> Sparkle Santos</a> 

    </div>
  <hr>

    <div class="row">
      <div class="col-md-8">
        <h1>Sparkle Santos</h1>
        <p class="text-muted">Jl. Kalimantan No.30-31, Jakarta Utara, DKI Jakarta 10223</p>
        <p>SparkleSantos Lavatory adalah penyedia layanan pembersihan lavatory yang mengutamakan kebersihan dan kesehatan pelanggan. Kami menawarkan berbagai paket pembersihan yang disesuaikan dengan kebutuhan Anda, mulai dari pembersihan harian hingga pembersihan mendalam. Dengan teknologi pembersihan terbaru, kami menjamin lavatory Anda akan bersih dan nyaman digunakan.</p>
        <p class="text-muted">Rating</p>
      </div>
      <div class="col-md-4">
        <img src="/images/index/lavatory/lavatory1.jpg" class="custom-image rounded mx-auto d-block" style="width: 200px; height: 200px" alt="Nama Perusahaan">
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
          name: 'Karpet CleanPro (Kecil) ',
          description: 'Pembersihan Karpet ukuran kecil, cocok untuk karpet penerimaan tamu atau karpet depan WC dan semacamnya.',
          price: 45000,
          image: '/images/index/test.jpg'
        },
        {
          name: 'Karpet CleanPro (Sedang + Foam)',
          description: 'Pembersihan Karpet ukuran sedang, ditambahkan dengan pembersihan menggunakan foam.',
          price: 80000,
          image: '/images/index/test.jpg'
        },
        {
          name: 'Karpet CleanPro (Besar + Full Clean)',
          description: 'Karpet ukuran jumbo dengan alat pembersih yang lengkap mulai steam, foam, hingga steril.',
          price: 120000,
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
