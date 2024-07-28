<!-- components/Header.vue -->
<template>
  <div class="navbar">
    <div class="menu-icon-wrapper" @click="toggleSidebar">
      <img src="https://cdn-icons-png.flaticon.com/512/11394/11394404.png" alt="Menu Icon" class="menu-icon" />
    </div>
    <h1>Dashboard</h1>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    }
  }
}
</script>

<style scoped>
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

.menu-icon-wrapper {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.menu-icon-wrapper:hover, .menu-icon-wrapper:active {
  background-color: lightgrey;
}

.menu-icon {
  width: 24px;
  height: 24px;
}
</style>
