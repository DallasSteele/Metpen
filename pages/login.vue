<template>
<<<<<<< Updated upstream
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
=======
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" />
      </div>
      <button type="submit">Login</button>
    </form>
>>>>>>> Stashed changes
  </div>
</template>

<script>
<<<<<<< Updated upstream
import AuthService from '@/services/auth';

=======
>>>>>>> Stashed changes
export default {
  data() {
    return {
      email: '',
      password: ''
<<<<<<< Updated upstream
    };
=======
    }
>>>>>>> Stashed changes
  },
  methods: {
    async login() {
      try {
<<<<<<< Updated upstream
        const user = await AuthService.login({ email: this.email, password: this.password });
        this.$router.push(this.getRedirectPath(user.role));
      } catch (error) {
        alert('Invalid credentials');
      }
    },
    getRedirectPath(role) {
      switch (role) {
        case 'admin':
          return '/admin-dashboard';
        case 'associate':
          return '/associate-dashboard';
        case 'customer':
          return '/customer-dashboard';
        default:
          return '/';
      }
    }
  }
};
=======
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        this.$router.push('/profile')
      } catch (error) {
        console.error(error)
      }
    }
  }
}
>>>>>>> Stashed changes
</script>
