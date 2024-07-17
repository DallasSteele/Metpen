<template>
  <div class="services">
    <h2>Our Services!</h2>
    <div class="services-content">
      <h3>TIDYS TIDY</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <h3>PRODUCTS</h3>
      <ul>
        <li>MDBootstrap</li>
        <li>MDWordPress</li>
        <li>BrandFlow</li>
        <li>Bootstrap</li>
        <li>Angular</li>
      </ul>
      <h3>USEFUL LINKS</h3>
      <ul>
        <li>Your Account</li>
        <li>Become an Affiliate</li>
        <li>Shipping Rates</li>
        <li>Help</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style scoped>
.services {
  text-align: center;
  padding: 50px 0;
  background-color: #8aefed;
}

.services-content {
  display: inline-block;
  max-width: 600px;
  text-align: left;
}

.services-content h3 {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
}

.services-content p,
.services-content ul {
  font-size: 16px;
  color: #555;
}

.services-content ul {
  padding-left: 20px;
  list-style-type: disc;
}

.services-content ul li {
  margin-bottom: 5px;
}
</style>
