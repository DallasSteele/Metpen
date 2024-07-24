<template>
    <div id="app">
      <!-- <div class="sidebar">
        <h2>Tidy Tidys</h2>
        <div class="profile">
          <img src="profile.jpg" alt="Profile Picture">
          <div>
            <p>Rachel</p>
            <small>Admin</small>
          </div>
        </div>
        <a href="#">Dashboard</a>
        <a href="#">User Management</a>
        <a href="#">Platform Performance</a>
        <a href="#">Transactions</a>
        <a href="#">Support Requests</a>
        <a href="#">Mitra Management</a>
        <button class="btn btn-dark btn-logout">Logout</button>
      </div> -->
      <div class="content">
        <div class="navbar">
          <h1>Mitra Management</h1>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Mitra Management</h5>
            <table class="table table-bordered mitra-table">
              <thead class="thead-light">
                <tr>
                  <th>Mitra ID</th>
                  <th>Name</th>
                  <th>Services</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="mitra in mitras" :key="mitra.id">
                  <td>{{ mitra.id }}</td>
                  <td>{{ mitra.name }}</td>
                  <td>{{ mitra.services }}</td>
                  <td>{{ mitra.status }}</td>
                  <td>
                    <button class="btn btn-sm btn-primary"><i class="fas fa-eye"></i> View</button>
                    <button class="btn btn-sm btn-warning"><i class="fas fa-edit"></i> Edit</button>
                    <button class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i> Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  name: 'AdminDashboard',
  layout: 'adminlay',
  name: 'App',
    data() {
      return {
        mitras: [
          {
            id: 'MITRA1001',
            name: 'Cleaning Service A',
            services: 'Home Cleaning, Carpet Cleaning',
            status: 'Active'
          },
          {
            id: 'MITRA1002',
            name: 'Cleaning Service B',
            services: 'Pool Cleaning, Lavatory',
            status: 'Inactive'
          }
        ]
      }
    }
  }
  </script>
  
  <style>
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
  }
  <!--  .sidebar {
    width: 250px;
    height: 100vh;
    background-color: #ffffff;
    color: #343a40;
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
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
  } -->
  .content {
    margin-left: auto;
    padding: auto;
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
  .mitra-table {
    margin-top: 20px;
  }
  .mitra-table th, .mitra-table td {
    text-align: center;
  }
  </style>