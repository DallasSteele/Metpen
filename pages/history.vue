<template>
  <div>
    <div class="container">
      <h2>Order History</h2>
      <table class="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Service</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123456</td>
            <td>Home Cleaning</td>
            <td>20-07-2024</td>
            <td>Completed</td>
            <td><NuxtLink :to="{ path: '/order-status', query: { orderId: 123456 } }">View Status</NuxtLink></td>
          </tr>
          <tr>
            <td>123457</td>
            <td>Carpet Cleaning</td>
            <td>18-07-2024</td>
            <td>Completed</td>
            <td><NuxtLink :to="{ path: '/order-status', query: { orderId: 123457 } }">View Status</NuxtLink></td>
          </tr>
          <!-- Add more rows as needed -->
        </tbody>
      </table>
    </div>
    <div class="footer">
      <p>&copy; 2023 Tidy Tidys. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryPage'
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 50px auto;
  background-color: #ffffff;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.container h2 {
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
}
.order-table {
  width: 100%;
  margin-bottom: 30px;
}
.order-table th, .order-table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
.order-table th {
  background-color: #f8f9fa;
}
.footer {
  margin-top: 50px;
  text-align: center;
  color: #6c757d;
}
</style>
