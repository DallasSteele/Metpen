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
          <form @submit.prevent="login">
            <h2>Login</h2>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required>
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>
            <button type="submit">Login</button>
            <p><router-link to="/signup">Don't have an account? Sign Up</router-link></p>
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
        password: ''
      }
    },
    methods: {
      login() {
        // Handle login logic here
        console.log('Email:', this.email)
        console.log('Password:', this.password)
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
  .form-container button {
    margin-bottom: 10px;
  }
  </style>
  