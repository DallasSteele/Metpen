<template>
  <div class="contact-page">
    <header>
      <h1>Contact Us!</h1>
      <div class="social-links">
        <a href="#" class="social-icon" v-for="icon in socialIcons" :key="icon.name">
          <i :class="icon.class"></i>
        </a>
      </div>
    </header>

    <main>
      <section class="contact-info">
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
  name: 'ContactPage',
  data() {
    return {
      socialIcons: [
        { name: 'Facebook', class: 'fab fa-facebook' },
        { name: 'Twitter', class: 'fab fa-twitter' },
        { name: 'Google', class: 'fab fa-google' },
        { name: 'Instagram', class: 'fab fa-instagram' },
        { name: 'LinkedIn', class: 'fab fa-linkedin' },
        { name: 'Github', class: 'fab fa-github' }
      ]
    }
  }
}
</script>

<style scoped>
.contact-page {
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

.contact-info {
  text-align: center;
}

h2 {
  color: #333;
  margin-bottom: 1rem;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  font-size: 0.8rem;
}
</style>