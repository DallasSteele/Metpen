/*about.vue*/

<template>
<div>
  <section class="about-section">
    <div class="container">
    <button class="btn btn-outline-secondary mb-3" @click="goBack"> Back</button>
      <h1 class="section-title">About Us</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="about-content">
            <h2>TIDYS TIDY</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              quaerat asperiores tempora molestiae voluptatem harum, nascetur
              recusandae dixus... <a href="#" class="read-more">Read More</a>
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="about-image">
            <img src="about-image.jpg" alt="About Us" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="products-section">
    <div class="container">
      <h2 class="section-title">Our Products</h2>
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div class="product-card">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <a :href="product.url" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="links-section">
    <div class="container">
      <h2 class="section-title">Useful Links</h2>
      <div class="row">
        <div class="col-md-4">
          <h3>Your Account</h3>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h3>Become an Affiliate</h3>
          <p>Join our affiliate program and earn commissions.</p>
          <a href="#" class="btn btn-primary">Sign Up</a>
        </div>
        <div class="col-md-4">
          <h3>Shipping Rates</h3>
          <p>Check our shipping rates and delivery timelines.</p>
          <a href="#" class="btn btn-primary">View Rates</a>
        </div>
      </div>
    </div>
  </section>

  <section class="contact-section">
    <div class="container">
      <h2 class="section-title">Contact Us</h2>
      <div class="row">
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea class="form-control" id="message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-md-6">
          <div class="contact-info">
            <h3>Get in Touch</h3>
            <p>
              New York, NY 10012, US<br />
              info@example.com<br />
              + 01 234 567 88<br />
              + 01 234 567 89
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'MDBootstrap',
          description: 'Bootstrap 5 & Material Design UI Kit',
          url: '#'
        },
        {
          id: 2,
          name: 'MDWordPress',
          description: 'WordPress UI Kit',
          url: '#'
        },
        {
          id: 3,
          name: 'BrandFlow',
          description: 'Brand Identity & Web Design',
          url: '#'
        },
        {
          id: 4,
          name: 'Bootstrap Angular',
          description: 'Angular UI Kit',
          url: '#'
        }
      ]
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.about-section,
.products-section,
.links-section,
.contact-section {
  padding: 80px 0;
  background-color: #8aefed;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
}

.about-content h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}

.about-content p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.read-more {
  color: #007bff;
  font-weight: 600;
}

.product-card {
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 30px;
}

.product-card h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.product-card p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.links-section h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}

.links-section ul {
  list-style-type: none;
  padding: 0;
}

.links-section ul li a {
  color: #333;
  text-decoration: none;
  font-size: 16px;
  line-height: 1.6;
}

.contact-info h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}

.contact-info p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}
</style>