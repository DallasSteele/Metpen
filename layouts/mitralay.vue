<template>
<div>
   <div>
    <AdminHeader @toggle-sidebar="toggleSidebar" />
    <div :class="['sidebar', { 'sidebar--open': isSidebarOpen }]">
      <h2>Tidy Tidys</h2>
      <div class="profile">
        <img src="profile.jpg" alt="Profile Picture" />
        <div>
          <p>Rachel</p>
          <small>Admin</small>
        </div>
      </div>
      <nuxt-link to="/vendor/mitra">Dashboard</nuxt-link>
 <!--     <nuxt-link to="/vendor/profile">Support Requests</nuxt-link>    -->
      <nuxt-link to="/vendor/createlistings">Create Listing</nuxt-link>
      <nuxt-link to="/vendor/setpricing">Set Pricing</nuxt-link>
      <nuxt-link to="/vendor/manageorders">Manage Order</nuxt-link>
      <nuxt-link to="/auth/login"><button class="btn btn-danger btn-logout">Logout</button></nuxt-link>
    </div>
    <div :class="['content', { 'content--shifted': isSidebarOpen }]">
      <Nuxt />
    </div>
    <AdminFooter />
  </div>
</div>
</template>

<script>
import AdminHeader from '~/components/inc/mitraheader.vue'
import AdminFooter from '~/components/inc/mitrafooter.vue'

export default {
  components: {
    AdminHeader,
    AdminFooter
  },
  data() {
    return {
      isSidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
}
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
}

.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
  color: #343a40;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  transform: translateX(-100%);
}

.sidebar--open {
  transform: translateX(0);
}

.content {
  margin-left: 20px;
  padding: 20px;
  transition: margin-left 0.3s ease;
}

.content--shifted {
  margin-left: 270px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.navbar h1 {
  font-size: 24px;
  font-weight: bold;
}

.card {
  margin-bottom: 20px;
}

.profile {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.profile img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.btn-logout {
  margin-top: auto;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
}
</style>
