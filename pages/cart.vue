<template>
  <div class="container mt-5">
    <button class="btn btn-outline-secondary mb-3" @click="goBack"> Back</button>
    <h1>Cart</h1>
    <div v-if="cart.length">
      <ul class="list-group">
        <li v-for="(item, index) in cart" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
          {{ item.name }} - Rp. {{ item.price }}
          <button class="btn btn-danger btn-sm" @click="removeFromCart(index)">Remove</button>
        </li>
      </ul>
      <div class="mt-3 mb-5">
        <h3>Total: Rp. {{ totalPrice }}</h3>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>

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
</template>

<script>
export default {
  data() {
    return {
      cart: []
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

<style>
.container {
  max-width: 800px;
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
