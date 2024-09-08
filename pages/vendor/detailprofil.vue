<template>
    <div>
      <div class="sidebar">
        <h2>Mitra Panel</h2>
        <div class="profile">
          <img src="profile.jpg" alt="Profile Picture" />
          <div class="profile-info">
            <p>Rachel</p>
            <small>Mitra</small>
            <nuxt-link to="/profile" class="view-profile">Lihat Profil</nuxt-link>
          </div>
        </div>
        <nuxt-link to="/create-listings">Create Listings</nuxt-link>
        <nuxt-link to="/set-pricing">Set Pricing</nuxt-link>
        <nuxt-link to="/manage-orders">Manage Orders</nuxt-link>
        <button class="btn btn-dark btn-logout">Logout</button>
      </div>
      <div class="content">
        <div class="navbar">
          <h1>Profil Rachel</h1>
        </div>
        <div class="profile-details">
          <img src="profile.jpg" alt="Profile Picture" />
          <div>
            <h2>Rachel</h2>
            <p>Email: rachel@example.com</p>
            <p>Role: Mitra</p>
            <p>Joined: January 1, 2022</p>
          </div>
        </div>
        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" value="rachel@example.com" />
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" value="Rachel" />
          </div>
          <div class="form-group">
            <label for="password">New Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter new password" />
          </div>
          <div class="form-group">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" class="form-control" id="confirm-password" placeholder="Confirm new password" />
          </div>
          <button type="submit" class="btn btn-submit">Save Changes</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProfilePage"
  };
  </script>
  
  <style scoped>
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
  }
  .sidebar {
    width: 250px;
    height: 100vh;
    background-color: #ffffff;
    color: #343a40;
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  }
  .sidebar h2 {
    color: #343a40;
    margin-bottom: 30px;
  }
  .sidebar .profile {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
  }
  .sidebar .profile img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .sidebar .profile .profile-info {
    display: flex;
    flex-direction: column;
  }
  .sidebar .profile .profile-info .view-profile {
    display: none;
    color: black;
    text-decoration: underline;
    cursor: pointer;
  }
  .sidebar .profile:hover .profile-info .view-profile {
    display: block;
  }
  .sidebar a {
    color: #343a40;
    text-decoration: none;
    margin-bottom: 20px;
    font-size: 18px;
  }
  .sidebar a:hover {
    text-decoration: underline;
  }
  .content {
    margin-left: 270px;
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
  