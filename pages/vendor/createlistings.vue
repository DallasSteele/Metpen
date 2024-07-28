<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Sidebar -->
      <aside class="sidebar col-md-2">
        <h2>Mitra Panel</h2>
        <nav>
          <ul>
             <li><NuxtLink to="/mitra">Dashboard</NuxtLink></li>
            <li><NuxtLink to="/create-listings">Create Listings</NuxtLink></li>
            <li><NuxtLink to="/set-pricing">Set Pricing</NuxtLink></li>
            <li><NuxtLink to="/manage-orders">Manage Orders</NuxtLink></li>
          </ul>
        </nav>
        <button class="btn btn-dark btn-logout" @click="logout">Logout</button>
      </aside>

      <!-- Content -->
      <main class="content col-md-10">
        <div class="navbar">
          <h1>Create Listings</h1>
        </div>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="serviceName">Service Name</label>
            <input type="text" class="form-control" id="serviceName" v-model="serviceName" placeholder="Enter service name">
          </div>
          <div class="form-group">
            <label for="serviceDescription">Service Description</label>
            <textarea class="form-control" id="serviceDescription" v-model="serviceDescription" rows="3" placeholder="Enter service description"></textarea>
          </div>
          <div class="form-group">
            <label for="servicePrice">Price</label>
            <input type="number" class="form-control" id="servicePrice" v-model="servicePrice" placeholder="Enter price">
          </div>
          <div class="form-group">
            <label for="serviceCategory">Category</label>
            <select class="form-control" id="serviceCategory" v-model="serviceCategory">
              <option>Home Cleaning</option>
              <option>Carpet Cleaning</option>
              <option>Pool Cleaning</option>
              <option>Lavatory</option>
            </select>
          </div>
          <div class="form-group">
            <label for="serviceImage">Upload Image</label>
            <input type="file" class="form-control-file" id="serviceImage" @change="handleFileUpload">
          </div>
          <button type="submit" class="btn btn-submit">Submit</button>
        </form>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'adminlay',
    name: "createlisting",
  };
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
  .content {
    margin-left: 270px;
    padding: 20px;
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
  .notification-table,
  .listing-table {
    margin-top: 20px;
  }
  .notification-table th,
  .notification-table td,
  .listing-table th,
  .listing-table td {
    text-align: center;
  }
  </style>