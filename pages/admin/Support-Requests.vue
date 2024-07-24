<template>
  <div>
    <div class="navbar">
      <h1>Support Requests</h1>
      <button class="btn btn-primary">Create New Request</button>
    </div>
    <div class="card">
      <div class="card-header">
        <h3>Open Requests</h3>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in openRequests" :key="request.id">
              <td>{{ request.id }}</td>
              <td>{{ request.subject }}</td>
              <td>
                <span :class="['badge', request.status === 'Open' ? 'badge-primary' : 'badge-secondary']">{{ request.status }}</span>
              </td>
              <td>{{ formatDate(request.createdAt) }}</td>
              <td>
                <button class="btn btn-sm btn-primary" @click="viewRequest(request)">View</button>
                <button class="btn btn-sm btn-danger" @click="closeRequest(request)">Close</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h3>Closed Requests</h3>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Closed At</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in closedRequests" :key="request.id">
              <td>{{ request.id }}</td>
              <td>{{ request.subject }}</td>
              <td>
                <span class="badge badge-secondary">{{ request.status }}</span>
              </td>
              <td>{{ formatDate(request.createdAt) }}</td>
              <td>{{ formatDate(request.closedAt) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SupportRequest',
  layout: 'adminlay',
  data() {
    return {
      openRequests: [
        { id: 1, subject: 'Issue with payment', status: 'Open', createdAt: '2023-06-01' },
        { id: 2, subject: 'Unable to log in', status: 'Open', createdAt: '2023-06-05' },
        { id: 3, subject: 'Product delivery delay', status: 'Open', createdAt: '2023-06-10' },
      ],
      closedRequests: [
        { id: 4, subject: 'Refund request', status: 'Closed', createdAt: '2023-05-20', closedAt: '2023-05-25' },
        { id: 5, subject: 'Billing issue', status: 'Closed', createdAt: '2023-04-15', closedAt: '2023-04-20' },
      ],
    };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    },
    viewRequest(request) {
      // Implement view request functionality
      console.log('Viewing request:', request);
    },
    closeRequest(request) {
      // Implement close request functionality
      console.log('Closing request:', request);
    },
  },
};
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

.card {
  margin-bottom: 20px;
}

.card-header {
  background-color: #f8f9fa;
  padding: 10px 15px;
}

.card-header h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #dee2e6;
}

.table th {
  background-color: #f8f9fa;
}

.badge {
  display: inline-block;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
}

.badge-primary {
  background-color: #007bff;
  color: #fff;
}

.badge-secondary {
  background-color: #6c757d;
  color: #fff;
}

.btn-sm {
  padding: 5px 10px;
  font-size: 14px;
}
</style>