<template>
  <div class="login-container mt-5">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required />

      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Login</button>
    </form>
    <hr>
    <p><a href="/auth/signup">Don't have an account? Sign Up</a></p>
  </div>
</template>

<script>
export default {
    layout: 'defaultLog',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: this.email, password: this.password })
        });

        if (response.ok) {
          const result = await response.json();
          this.$cookies.set('auth_token', result.token);

          if (result.role === 'admin') {
            this.$router.push('/admin/admin');
          } else if (result.role === 'user') {
            this.$router.push('../user');
          } else {
            this.$router.push('/vendor/mitra');
          }
        } else {
          const error = await response.json();
          alert(error.msg || 'Login failed');
        }
      } catch (err) {
        console.error('Error during login:', err);
        alert('An error occurred during login.');
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
