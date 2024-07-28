<template>
    <div>
      <header>
        <nav>
          <ul>
            <li><router-link to="/">HOME</router-link></li>
            <li><router-link to="/page1">Page</router-link></li>
            <li><router-link to="/page2">Page</router-link></li>
            <li><router-link to="/page3">Page</router-link></li>
            <li><router-link to="/login">LOGIN</router-link></li>
          </ul>
        </nav>
      </header>
      <main>
        <div class="form-container">
          <form @submit.prevent="signup">
            <h2>Sign Up</h2>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required>
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" required>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name" required>
            <label for="role">Role</label>
            <select id="role" v-model="role" required>
              <option value="user">User</option>
              <option value="mitra">Mitra</option>
            </select>
            <button type="submit">Create Account</button>
            <p><router-link to="/login">Already have an account? Login</router-link></p>
          </form>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        role: 'user'
      }
    },
    methods: {
      signup() {
        // Handle signup logic here
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        console.log('Name:', this.name);
        console.log('Role:', this.role);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  header nav ul {
    list-style-type: none;
  }
  
  header nav ul li {
    display: inline;
    margin-right: 10px;
  }
  
  .form-container {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  
  .form-container form {
    display: flex;
    flex-direction: column;
  }
  
  .form-container label,
  .form-container input,
  .form-container select,
  .form-container button {
    margin-bottom: 10px;
  }
  </style>
  