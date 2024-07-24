<template>
  <div>
    <div class="navbar">
      <h1>Dashboard</h1>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">User Activity</h5>
            <!-- Add your user activity content here -->
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Platform Performance</h5>
            <!-- Add your platform performance content here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
  layout: 'adminlay'
}
</script>

<style scoped>
/* Add any specific styles for this page */
</style>
