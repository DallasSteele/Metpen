<template>
    <div>
   
      <div class="content">
        <div class="navbar">
          <h1>Dashboard</h1>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Notifications</h5>
            <table class="table table-bordered notification-table">
              <thead class="thead-light">
                <tr>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1001</td>
                  <td>John Doe</td>
                  <td>Home Cleaning</td>
                  <td>Pending</td>
                  <td>
                    <button class="btn btn-sm btn-primary">
                      <i class="fas fa-eye"></i> View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1002</td>
                  <td>Jane Smith</td>
                  <td>Carpet Cleaning</td>
                  <td>In Progress</td>
                  <td>
                    <button class="btn btn-sm btn-primary">
                      <i class="fas fa-eye"></i> View
                    </button>
                  </td>
                </tr>
                <!-- More rows as needed -->
              </tbody>
            </table>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Manage Listings</h5>
            <table class="table table-bordered listing-table">
              <thead class="thead-light">
                <tr>
                  <th>ID</th>
                  <th>Service</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Home Cleaning</td>
                  <td>Standard home cleaning services</td>
                  <td>$100</td>
                  <td>
                    <button class="btn btn-sm btn-warning">
                      <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-danger">
                      <i class="fas fa-trash-alt"></i> Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Carpet Cleaning</td>
                  <td>Deep cleaning of carpets</td>
                  <td>$150</td>
                  <td>
                    <button class="btn btn-sm btn-warning">
                      <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-danger">
                      <i class="fas fa-trash-alt"></i> Delete
                    </button>
                  </td>
                </tr>
                <!-- More rows as needed -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    layout: 'mitralay',
    name: "mitra",
  };
  </script>
  
  <style>
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
    margin-left: auto;
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
  