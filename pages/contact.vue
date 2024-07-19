<template>
 <div class="container">
    <button class="btn btn-outline-secondary mb-3 mt-3" @click="goBack"> Back</button>
  <div class="contact-us">
    <h2>Contact Us!</h2>
    <div class="contact-content">
      <h3>CONTACT</h3>
      <p>
        New York, NY 10012, US<br />
        info@example.com<br />
        + 01 234 567 88<br />
        + 01 234 567 89 
      </p>
    </div>
  </div>
 </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.container, .contact-us, .contact-content{
 background-color: #8aefed;
 padding: 80px 0;
}
.contact-us {
  text-align: center;
}

.contact-content {
  display: inline-block;
  max-width: 600px;
  text-align: center;
}

.contact-content h3 {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
}

.contact-content p {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}
</style>
