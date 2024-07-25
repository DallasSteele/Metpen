<template>
  <div>
    <div class="content">
      <div class="navbar">
        <h1>Transactions</h1>
        <button class="burger-menu" @click="toggleSidebar">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Transactions</h5>
          <table class="table table-bordered transaction-table">
            <thead class="thead-light">
              <tr>
                <th>Transaction ID</th>
                <th>User Name</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="transaction in transactions" :key="transaction.id">
                <td>{{ transaction.id }}</td>
                <td>{{ transaction.user }}</td>
                <td>{{ transaction.amount }}</td>
                <td>{{ transaction.status }}</td>
                <td>{{ transaction.date }}</td>
                <td>
                  <button class="btn btn-sm btn-primary">
                    <i class="fas fa-eye"></i> View
                  </button>
                  <button class="btn btn-sm btn-secondary">
                    <i class="fas fa-undo"></i> Refund
                  </button>
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
  name: 'transaction',
  layout: 'adminlay',
  data() {
    return {
      isSidebarOpen: false,
      transactions: [
        {
          id: 'TXN1001',
          user: 'John Doe',
          amount: '$100',
          status: 'Completed',
          date: '2023-07-20'
        },
        {
          id: 'TXN1002',
          user: 'Jane Smith',
          amount: '$150',
          status: 'Pending',
          date: '2023-07-21'
        }
        // Add more transactions as needed
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
      this.$emit('toggle-sidebar', this.isSidebarOpen);
    }
  }
};
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

.burger-menu {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.card {
  margin-bottom: 20px;
}

.transaction-table {
  margin-top: 20px;
}

.transaction-table th,
.transaction-table td {
  text-align: center;
}
</style>
