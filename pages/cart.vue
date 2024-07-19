<template>
  <div class="container mt-5">
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

    <a href="/orderpage" ><button>
  <span class="span-mother">
    <span>B</span>
    <span>u</span>
    <span>t</span>
    <span>t</span>
    <span>o</span>
    <span>n</span>
  </span>
  <span class="span-mother2">
    <span>B</span>
    <span>u</span>
    <span>t</span>
    <span>t</span>
    <span>o</span>
    <span>n</span>
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
  border-radius: 2rem;
  cursor: pointer;
  width: 95.02px;
  height: 42.66px;
  border: none;
  background-color: #3653f8;
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
  transform: translateY(1.2em);
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

button .span-mother2 {
  display: flex;
  position: absolute;
  overflow: hidden;
}

button .span-mother2 span {
  transform: translateY(-1.2em);
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


</style>
