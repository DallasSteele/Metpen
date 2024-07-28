<template>
  <header class="header">
    <div class="container">
      <a class="logo" href="/">
        <img src="/images/index/butake.jpg" alt="Logo" />
      </a>
      <nav>
        <div></div>
        <ul><li><a href="/auth/login">Login</a></li>
        <li><a href="/auth/signup">Signup</a></li></ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo img {
  height: 40px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav ul li {
  margin-left: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
