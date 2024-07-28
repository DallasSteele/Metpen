<template>
  <header>
    <h1>Tidy Tidys</h1>
    <nav>
      <ul>
        <li><NuxtLink class="nav-link" to="/user">HOME</NuxtLink></li>
        <li><NuxtLink class="nav-link" to="/about">ABOUT</NuxtLink></li>
        <li><NuxtLink class="nav-link" to="/history">HISTORY</NuxtLink></li>
        <li><NuxtLink class="nav-link" to="/cart">CART</NuxtLink></li>
        <li><NuxtLink class="nav-link" to="/orderpage">ORDERS</NuxtLink></li>
        <li>
          <NuxtLink class="profile" to="/profile-page" title="Click For Detail">
            <img src="/images/profile.jpg" alt="User Profile" class="profile-image">
            <div class="profile-info">
              <span class="username"></span>
              <span class="role">User</span>
            </div>
          </NuxtLink>
        </li>
        <li><NuxtLink class="nav-link logout" to="/auth/login">LOGOUT</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>


<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}

header h1 {
  margin: 0;
  font-size: 24px;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

nav ul li {
  margin-left: 20px;
  display: flex;
  align-items: center;
}

nav ul li a.nav-link {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  padding: 10px 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

nav ul li a.nav-link:hover {
  background-color: grey;
  color: #fff;
  border-radius: 5px;
}

nav ul li a.logout {
  background-color: #000;
  color: #fff;
  border-radius: 5px;
}

nav ul li a.logout:hover {
  background-color: #555;
}

.profile {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.profile-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.profile-info {
  display: flex;
  flex-direction: column;
}

.profile[title] {
  position: relative;
}

.profile[title]::after {
  content: attr(title);
  position: absolute;
  top: -1.5em;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 0.3em 0.6em;
  border-radius: 0.3em;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
}

.profile[title]:hover::after {
  opacity: 1;
}
</style>

