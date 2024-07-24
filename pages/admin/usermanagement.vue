<template>
  <div class="container">
    <h2 class="text-center">User Management</h2>
    
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">User Statistics</h5>
        <p>Total Users: 100</p>
        <p>Active Users: 80</p>
        <p>Inactive Users: 20</p>
      </div>
    </div>
    
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Search Filter</h5>
        <div class="form-row search-filter">
          <div class="col">
            <input type="text" class="form-control" placeholder="Search by name or email" v-model="searchQuery">
          </div>
          <div class="col">
            <select class="form-control" v-model="selectedRole">
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="admin">Vendor</option>
              <option value="user">User</option>
            </select>
          </div>
          <div class="col">
            <button class="btn btn-primary" @click="searchUsers">Search</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">User List</h5>
        <div class="user-table">
          <table class="table table-bordered table-striped">
            <thead class="thead-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Registered Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in filteredUsers" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.status }}</td>
                <td>{{ user.registeredDate }}</td>
                <td class="actions">
                  <button class="btn btn-sm btn-warning"><i class="fas fa-edit"></i> Edit</button>
                  <button class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i> Delete</button>
                  <button class="btn btn-sm btn-secondary"><i class="fas fa-ban"></i> Deactivate</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <div class="card add-user-form">
      <div class="card-body">
        <h5 class="card-title">Add New User</h5>
        <form @submit.prevent="addUser">
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Name" v-model="newUser.name">
            </div>
            <div class="col">
              <input type="email" class="form-control" placeholder="Email" v-model="newUser.email">
            </div>
            <div class="col">
              <input type="password" class="form-control" placeholder="Password" v-model="newUser.password">
            </div>
            <div class="col">
              <select class="form-control" v-model="newUser.role">
                <option value="user">User</option>
                <option value="user">Vendor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div class="col">
              <button type="submit" class="btn btn-success">Add User</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'usermanagement',
  layout: 'adminlay',
  data() {
    return {
      searchQuery: '',
      selectedRole: 'all',
      users: [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', registeredDate: '2023-01-01' },
        // Add more users as needed
      ],
      newUser: {
        name: '',
        email: '',
        password: '',
        role: 'user'
      }
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => {
        const matchesQuery = user.name.includes(this.searchQuery) || user.email.includes(this.searchQuery);
        const matchesRole = this.selectedRole === 'all' || user.role === this.selectedRole;
        return matchesQuery && matchesRole;
      });
    }
  },
  methods: {
    searchUsers() {
      // Implement search functionality here
    },
    addUser() {
      // Implement add user functionality here
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
.stats, .add-user-form {
  margin-bottom: 20px;
}
.card {
  margin-bottom: 20px;
}
.user-table {
  margin-bottom: 20px;
}
.search-filter input, .search-filter select, .search-filter button {
  margin-right: 10px;
}
.actions button {
  margin-right: 5px;
}
</style>
