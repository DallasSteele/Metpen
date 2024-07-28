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
        <h1>Welcome to Tidy Tidys</h1>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
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
  
  main h1 {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  

<!--okay question, since the login has a redirection to the script.js, can we create a new file or something to the effect s-->