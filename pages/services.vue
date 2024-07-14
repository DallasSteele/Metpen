<template>
  <div class="services-page">
    <header>
      <h1>Our Services!</h1>
      <div class="social-links">
        <a href="#" class="social-icon" v-for="icon in socialIcons" :key="icon.name">
          <i :class="icon.class"></i>
        </a>
      </div>
    </header>

    <main>
      <section class="tidys-tidy">
        <h2>TIDYS TIDY</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </section>

      <section class="products">
        <h2>PRODUCTS</h2>
        <ul>
          <li v-for="product in products" :key="product.name">{{ product.name }}</li>
        </ul>
      </section>

      <section class="useful-links">
        <h2>USEFUL LINKS</h2>
        <ul>
          <li v-for="link in usefulLinks" :key="link.name">
            <a :href="link.url">{{ link.name }}</a>
          </li>
        </ul>
      </section>

      <section class="contact">
        <h2>CONTACT</h2>
        <p>New York, NY 10012, US</p>
        <p>info@example.com</p>
        <p>+ 01 234 567 88</p>
        <p>+ 01 234 567 89</p>
      </section>
    </main>

  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      socialIcons: [
        { name: 'Facebook', class: 'fab fa-facebook' },
        { name: 'Twitter', class: 'fab fa-twitter' },
        { name: 'Google', class: 'fab fa-google' },
        { name: 'Instagram', class: 'fab fa-instagram' },
        { name: 'LinkedIn', class: 'fab fa-linkedin' },
        { name: 'Github', class: 'fab fa-github' }
      ],
      products: [
        { name: 'MDBootstrap' },
        { name: 'MDWordPress' },
        { name: 'BrandFlow' },
        { name: 'Bootstrap' },
        { name: 'Angular' }
      ],
      usefulLinks: [
        { name: 'Your Account', url: '#' },
        { name: 'Become an Affiliate', url: '#' },
        { name: 'Shipping Rates', url: '#' },
        { name: 'Help', url: '#' }
      ]
    }
  }
}
</script>

<style scoped>
.services-page {
  font-family: sans-serif;
  color: #333;
}

header {
  background-color: #333;
  color: #fff;
  padding: 2rem;
  text-align: center;
}

.social-links {
  margin-top: 1rem;
}

.social-icon {
  color: #fff;
  font-size: 1.5rem;
  margin: 0 0.5rem;
}

main {
  padding: 2rem;
}

section {
  margin-bottom: 2rem;
}

h2 {
  color: #333;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #666;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  font-size: 0.8rem;
}
</style>