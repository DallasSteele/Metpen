<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="text-center">Login</h2>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model="email" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" required>
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from '@/services/auth';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const user = await AuthService.login({ email: this.email, password: this.password });
        this.$router.push(this.getRedirectPath(user.role));
      } catch (error) {
        alert('Invalid credentials');
      }
    },
    getRedirectPath(role) {
      switch (role) {
        case 'admin':
          return '/admin';
        case 'associate':
          return '/associate-dashboard';
        case 'customer':
          return '/index';
        default:
          return '/';
      }
    }
  }
};
</script>
