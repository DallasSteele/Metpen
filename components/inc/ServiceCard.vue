<template>
  <div class="service-card">
    <div class="row">
      <div class="col-2">
        <img :src="image" class="rounded" style="width: 95px; height: 95px;" :alt="name">
      </div>
      <div class="col-8">
        <h5>{{ name }}</h5>
        <p>{{ description }}</p>
      </div>
      <div class="col-2 text-right">
        <p class="price font-weight-bold">Rp. {{ price }}</p>
      </div>
      <button class="btn btn-outline-success" @click="handleAddToCart">Add to Cart</button>
        <button class="btn btn-outline-danger mt-1" @click="handleBuyNow">Buy Now</button>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    price: Number,
    image: String
  },
  methods: {
    handleAddToCart() {
      const item = {
        name: this.name,
        description: this.description,
        price: this.price,
        image: this.image
      };
      this.$emit('add-to-cart', item);
    },
     handleBuyNow() {
      const item = {
        name: this.name,
        description: this.description,
        price: this.price,
        image: this.image
      };
      this.$emit('buy-now', item);
    }
  }
}
</script>

<style>
.service-card {
  border: 1px solid #ddd;
  border-radius: .25rem;
  margin-bottom: 1rem;
  padding: 1rem;
}
.price {
  font-weight: bold;
  font-size: 1.25rem;
}
</style>
