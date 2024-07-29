<template>
    <div>
      <div class="content">
        <div class="navbar">
          <h1>Manage Orders</h1>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Orders</h5>
            <table class="table table-bordered order-table">
              <thead class="thead-light">
                <tr>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ORD1001</td>
                  <td>John Doe</td>
                  <td>Home Cleaning</td>
                  <td>Pending</td>
                  <td>2023-07-20</td>
                  <td>
                    <button class="btn btn-sm btn-primary btn-view">
                      <i class="fas fa-eye"></i> View
                    </button>
                    <button class="btn btn-sm btn-success btn-process">
                      <i class="fas fa-check"></i> Process
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>ORD1002</td>
                  <td>Jane Smith</td>
                  <td>Carpet Cleaning</td>
                  <td>In Progress</td>
                  <td>2023-07-21</td>
                  <td>
                    <button class="btn btn-sm btn-primary btn-view">
                      <i class="fas fa-eye"></i> View
                    </button>
                    <button class="btn btn-sm btn-success btn-process">
                      <i class="fas fa-check"></i> Process
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
    name: 'ManageOrders',
    layout: 'mitralay'
  }
  </script>
  
  <style scoped>
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
  }
  .content {
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
  .order-table {
    margin-top: 20px;
  }
  .order-table th, .order-table td {
    text-align: center;
  }
  .btn-view, .btn-process {
    margin: 0 5px;
  }
  </style>
  