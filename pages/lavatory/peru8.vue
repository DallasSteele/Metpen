<template>
  <div class="container mt-5">

  <hr>
    <div class="mx-4">
<a class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" href="/user">Home </a> <a class="text-muted text-decoration-none" href="#"> >> </a>
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
      @buy-now="buyNow"
    />

    <div v-if="cart.length" class="mt-5">
      <h2>Cart</h2>
      <ul class="list-group">
        <li v-for="(item, index) in cart" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
          {{ item.name }} - Rp. {{ item.price }} <br> {{ item.description }}
          <img :src="item.image" alt="Service Image" class="img-thumbnail" style="width: 50px; height: 50px; margin-right: 10px;">
        </li>
      </ul>
      <div class="mt-3 mb-5">
        <h3>Total: Rp. {{ totalPrice }}</h3>
         <a href="/orderpage" class="link-underline-opacity-0" ><button>
  <span class="span-mother">
    <span>P</span>
    <span>a</span>
    <span>y</span>
    <span>m</span>
    <span>e</span>
    <span>n</span>
    <span>t</span>
  </span>
  <span class="span-mother2">
    <span>P</span>
    <span>a</span>
    <span>y</span>
    <span>m</span>
    <span>e</span>
    <span>n</span>
    <span>t</span>
  </span>
</button></a>
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
          image: '/images/index/lavatory/lava1.jpg'
        },
        {
          name: 'Karpet CleanPro (Sedang + Foam)',
          description: 'Pembersihan Karpet ukuran sedang, ditambahkan dengan pembersihan menggunakan foam.',
          price: 80000,
          image: '/images/index/lavatory/lava4.jpg'
        },
        {
          name: 'Karpet CleanPro (Besar + Full Clean)',
          description: 'Karpet ukuran jumbo dengan alat pembersih yang lengkap mulai steam, foam, hingga steril.',
          price: 120000,
          image: '/images/index/lavatory/lava2.jpg'
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
    },
   buyNow(service) {
      this.addToCart(service);
      this.$router.push('/orderpage');
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

button {
  font-weight: bold;
  color: white;
  border-radius: 1rem;
  cursor: pointer;
  width: 95.02px;
  height: 37px;
  border: none;
  background-color: #1db21f;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

button .span-mother {
  display: flex;
  overflow: hidden;
}

button:hover .span-mother {
  position: absolute;
}

button:hover .span-mother span {
  transform: translateY(1.4em);
}

button .span-mother span:nth-child(1) {
  transition: 0.2s;
}

button .span-mother span:nth-child(2) {
  transition: 0.3s;
}

button .span-mother span:nth-child(3) {
  transition: 0.4s;
}

button .span-mother span:nth-child(4) {
  transition: 0.5s;
}

button .span-mother span:nth-child(5) {
  transition: 0.6s;
}

button .span-mother span:nth-child(6) {
  transition: 0.7s;
}

button .span-mother span:nth-child(7) {
  transition: 0.8s;
}

button .span-mother2 {
  display: flex;
  position: absolute;
  overflow: hidden;
}

button .span-mother2 span {
  transform: translateY(-1.4em);
}

button:hover .span-mother2 span {
  transform: translateY(0);
}

button .span-mother2 span {
  transition: 0.2s;
}

button .span-mother2 span:nth-child(2) {
  transition: 0.3s;
}

button .span-mother2 span:nth-child(3) {
  transition: 0.4s;
}

button .span-mother2 span:nth-child(4) {
  transition: 0.5s;
}

button .span-mother2 span:nth-child(5) {
  transition: 0.6s;
}

button .span-mother2 span:nth-child(6) {
  transition: 0.7s;
}

button .span-mother2 span:nth-child(7) {
  transition: 0.8s;
}

</style>
