<template>
  <div class="container mt-5">

  <hr>
    <div class="mx-4">
<a class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" href="/">Home </a> <a class="text-muted text-decoration-none" href="#"> >> </a>
<a class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" href="/lavatory/lavatory-page"> Home Clean</a> <a class="text-muted text-decoration-none" href="#"> >> </a>
<a class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover zoom-effect-container" href="#"> Lavish LapLav</a> 

    </div>
  <hr>

    <div class="row">
      <div class="col-md-8">
        <h1>Lavish LapLav</h1>
        <p class="text-muted">Jl. Muara Buntu No. 2, Jakarta Timur, DKI Jakarta 13020</p>
        <p>PristineLav Cleaning adalah solusi terbaik untuk semua kebutuhan pembersihan lavatory Anda. Kami menawarkan layanan pembersihan lavatory secara menyeluruh dengan perhatian pada setiap detail. Tim kami yang berpengalaman akan memastikan setiap sudut lavatory Anda bersih dan higienis. Kami juga menyediakan layanan pembersihan khusus sesuai permintaan pelanggan.</p>
        <p class="text-muted">Rating</p>
      </div>
      <div class="col-md-4">
        <img src="/images/index/lavatory/lavatory3.jpg" class="custom-image rounded mx-auto d-block" style="width: 200px; height: 200px" alt="Nama Perusahaan">
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
  },
  
  
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
