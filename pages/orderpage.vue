<template>
  <div class="container mt-5">
    <button class="btn btn-outline-secondary mb-3" @click="goBack"> Back</button>
    <h1>Payment </h1>
    <div class="row">
      <div class="col-md-8">
        <div class="card mb-4">
          <div class="row no-gutters">
            <div class="col-md-4">
            <!-- <img :src="service.image" class="card-img" alt="Service Image"> -->
            </div>
            <div v-if="cart.length">
      <ul class="list-group">
        <li v-for="(item, index) in cart" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
          {{ item.name }} - Rp. {{ item.price }} <br> {{ item.description }} 
          <img :src="item.image" alt="Service Image" class="img-thumbnail" style="width: 50px; height: 50px; margin-right: 10px;">
        </li>
      </ul>
      <div class="mt-3 mb-5">
        <h3>Total: Rp. {{ totalPrice }}</h3>
      </div>
    </div>
          </div>
        </div>

     <!--  <form @submit.prevent="placeOrder">
           <div class="form-group">
            <label for="fullName">Nama Lengkap</label>
            <input type="text" class="form-control" id="fullName" v-model="form.fullName" required>
          </div>
          <div class="form-group">
            <label for="phoneNumber">Nomor Handphone (08**********)</label>
            <input type="text" class="form-control" id="phoneNumber" v-model="form.phoneNumber" required>
          </div>
          <div class="form-group">
            <label for="address">Alamat Lengkap</label>
            <input type="text" class="form-control" id="address" v-model="form.address" required>
          </div>
          <div class="form-group">
            <label for="additionalDescription">Deskripsi Tambahan (Patokan rumah)</label>
            <textarea class="form-control" id="additionalDescription" v-model="form.additionalDescription"></textarea>
          </div>

          <div class="card mt-4">
            <div class="card-body">
              <h5 class="card-title">Rincian Harga</h5>
              <p class="card-text">Harga Layanan: {{ service.price }}</p>
              <p class="card-text">Biaya Transportasi: {{ service.transportFee }}</p>
              <hr>
              <h5 class="card-title">Total Harga: {{ totalPrice }}</h5>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-block mt-4">PESAN SEKARANG</button>
        </form>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true
    }
  },
   data() {
    return {
      cart: []
    };
  },
  datauser() {
    return {
      form: {
        fullName: '',
        phoneNumber: '',
        address: '',
        additionalDescription: ''
      }
    };
  },
   computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    }
  },
  methods: {
      goBack() {
      this.$router.back();
    },

    removeFromCart(index) {
      this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
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

<style scoped>
.card {
  border: 1px solid #e0e0e0;
}
.card-body {
  padding: 1rem;
}
.card-title {
  margin-bottom: 1rem;
}
.card-text {
  margin-bottom: 0.5rem;
}
</style>
