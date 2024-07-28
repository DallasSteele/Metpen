<template>
  <footer>
    <div class="footer-content">
      <h2>Tidy Tidys</h2>
      <ul class="footer-links">
        <li><a href="#">Page</a></li>
        <li><a href="#">Page</a></li>
        <li><a href="#">Page</a></li>
        <li><a href="#">Page</a></li>
      </ul>
      <div class="social-media">
        <a href="https://www.facebook.com">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook">
        </a>
        <a href="https://www.linkedin.com">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn">
        </a>
        <a href="https://www.twitter.com">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter">
        </a>
        <a href="https://www.instagram.com">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram">
        </a>
        <a href="https://www.youtube.com">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733646.png" alt="YouTube">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
footer {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content h2 {
  margin-bottom: 20px;
}

.footer-links {
  list-style-type: none;
  padding: 0;
}

.footer-links li {
  display: inline;
  margin: 0 10px;
}

.footer-links a {
  text-decoration: none;
  color: #007bff;
}

.footer-links a:hover {
  text-decoration: underline;
}

.social-media {
  margin-top: 20px;
}

.social-media a {
  margin: 0 10px;
  display: inline-block;
}

.social-media img {
  width: 30px;
  height: 30px;
}
</style>
