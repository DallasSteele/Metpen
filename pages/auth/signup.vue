<template>
  <div class="signup-container mt-5">
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSubmit">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required />

      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required />

      <label for="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" v-model="confirmPassword" required />

      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" required />

      <label for="role">Role</label>
      <select id="role" v-model="role" required>
        <option value="user">User</option>
        <option value="mitra">Mitra</option>
      </select>

      <button type="submit">Create Account</button>
    </form>
    <hr>
    <p><a href="/auth/login">Already have an account? Login</a></p>
  </div>
</template>

<script>
export default {
     layout: 'defaultLog',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      role: 'user'
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
            name: this.name,
            role: this.role
          })
        });

        if (response.ok) {
          alert('Account created successfully!');
          this.$router.push('/auth/login');
        } else {
          const error = await response.json();
          alert(error.msg || 'Signup failed');
        }
      } catch (err) {
        console.error('Error during signup:', err);
        alert('An error occurred during signup.');
      }
    }
  }
};
</script>

<style scoped>
.signup-container {
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

input, select {
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
