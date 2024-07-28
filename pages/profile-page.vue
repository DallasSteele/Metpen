<template>
  <div class="content">
    <div class="navbar">
      <div class="back-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="Back" id="backButton" @click="goBack">
      </div>
      <h1>Profile Details</h1>
    </div>
    <div class="profile-details">
      <img src="images/profile.jpg" alt="Profile Picture" id="profileImage">
      <div>
        <h2 id="profileName">Name</h2>
        <p id="profileEmail">Email: </p>
        <p id="profileRole">Role: </p>
        <p id="profileJoined">Joined: </p>
        <input type="file" id="profileImageInput" accept="image/*" @change="handleImageChange">
      </div>
    </div>
    <form id="profileForm" @submit.prevent="saveChanges">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="email">
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="name">
      </div>
      <div class="form-group">
        <label for="password">New Password</label>
        <input type="password" class="form-control" id="password" v-model="password" placeholder="Enter new password">
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" class="form-control" id="confirm-password" v-model="confirmPassword" placeholder="Confirm new password">
      </div>
      <button type="submit" class="btn-submit">Save Changes</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      name: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    goBack() {
      // Handle the back button click
      this.$router.go(-1);
    },
    handleImageChange(event) {
      // Handle the image file input change
      const file = event.target.files[0];
      if (file) {
        // Handle file upload logic here
      }
    },
    saveChanges() {
      // Handle form submission logic here
      console.log('Form submitted with', {
        email: this.email,
        name: this.name,
        password: this.password,
        confirmPassword: this.confirmPassword
      });
    }
  }
}
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
}

.content {
  margin-left: 20px;
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.navbar .back-icon img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.navbar h1 {
  font-size: 24px;
  font-weight: bold;
}

.profile-details {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.profile-details img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

.profile-details input[type="file"] {
  margin-top: 10px;
}

.form-group label {
  font-weight: bold;
}

.btn-submit {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #0056b3;
}
</style>
