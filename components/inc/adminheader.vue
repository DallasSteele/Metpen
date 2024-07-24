<template>
  <div class="admin-header">
    <button @click="$emit('toggle-sidebar')" class="burger-menu">
      <font-awesome-icon icon="bars" />
    </button>
    <h2>Tidy Tidys Admin</h2>
  </div>
</template>

<script>
export default {
  name: 'AdminHeader'
}
</script>

<style scoped>
.admin-header {
  background-color: #343a40;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
}

.burger-menu {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin-right: 20px;
}
</style>
