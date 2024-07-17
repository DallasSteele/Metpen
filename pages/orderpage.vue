<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <div class="card mb-4">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="/images/index/test.jpg" class="card-img" alt="Service Image">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Rumah Apartemen Kecil (1-2 Kamar Tidur)</h5>
                <p class="card-text">Pembersihan Rumah mencakup menyapu dan mengepel lantai, membersihkan debu dari furnitur, kaca, dan cermin, mengurut tempat tidur, membersihkan dan mendesinfeksi permukaan dapur serta peralatan luar, mencuci piring, membersihkan wastafel, toilet, dan shower, serta menganti handuk jika diminta. Area umum seperti koridor dan tangga juga dibersihkan, termasuk pintu, bingkai, dan sakelar lampu dari debu dan noda.</p>
              </div>
            </div>
          </div>
        </div>

        <form @submit.prevent="placeOrder">
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
              <p class="card-text">Harga Layanan: Rp.300.000</p>
              <p class="card-text">Biaya Transportasi: Rp.10.000</p>
              <hr>
              <h5 class="card-title">Total Harga: Rp.310.000</h5>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-block mt-4 mb-5">PESAN SEKARANG</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fullName: '',
        phoneNumber: '',
        address: '',
        additionalDescription: ''
      }
    };
  },
  methods: {
    placeOrder() {
      // Handle the order placement logic here
      console.log('Order placed:', this.form);
      alert('Order placed successfully!');
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
