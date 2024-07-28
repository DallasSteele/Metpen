<!-- components/Sidebar.vue -->
<template>
  <div :class="['sidebar', { collapsed: isCollapsed }]">
    <li>
      <a href="#" class="profile">
        <img :src="profileImage" alt="User Profile" class="profile-image" />
        <div class="profile-info">
          <span class="username">{{ username }}</span>
          <span class="role">{{ role }}</span>
        </div>
      </a>
    </li>
    <a href="/admin/admin">Dashboard</a>
    <a href="/admin/usermanagement">User Management</a>
    <a href="/admin/platform-performance">Platform Performance</a>
    <a href="/admin/transactions">Transactions</a>
    <a href="/admin/Support-Requests">Support Requests</a>
    <a href="/admin/mitra-management">Mitra Management</a>
    <button @click="logout" class="btn btn-dark btn-logout">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
      username: '',
      role: '',
      profileImage: ''
    };
  },
  mounted() {
    this.username = localStorage.getItem('username') || 'Rachel';
    this.role = localStorage.getItem('role') || 'Admin';
    this.profileImage = localStorage.getItem('profileImage') || 'images/profile.jpg';
  },
  methods: {
    logout() {
      // Clear localStorage
      localStorage.removeItem('username');
      localStorage.removeItem('profileImage');
      localStorage.removeItem('role');
      // Redirect to login page
      window.location.href = '/login';
    }
  }
}
</script>

<style scoped>

.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
  color: #343a40;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.sidebar.collapsed {
  transform: translateX(-250px);
}

.sidebar h2 {
  color: #343a40;
  margin-bottom: 30px;
}

.sidebar a {
  color: #343a40;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 18px;
}

.sidebar a:hover {
  text-decoration: underline;
}

.profile {
  display: flex;
  align-items: center;
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

.username {
  font-weight: bold;
}

.role {
  font-size: 12px;
  color: #555;
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
