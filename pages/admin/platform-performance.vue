<template>
  <div>
    <AdminHeader />
    <div class="content">
      <div class="navbar">
        <h1>Platform Performance</h1>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">User Activity</h5>
          <canvas id="userActivityChart"></canvas>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Platform Performance</h5>
          <canvas id="platformPerformanceChart"></canvas>
        </div>
      </div>
    </div>
    <AdminFooter />
  </div>
</template>

<script>
export default {
  name: 'platformPerformance',
  layout: 'adminlay',
  methods: {
    renderUserActivityChart() {
      const ctx1 = document.getElementById('userActivityChart').getContext('2d');
      new Chart(ctx1, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'User Activity',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    },
    renderPlatformPerformanceChart() {
      const ctx2 = document.getElementById('platformPerformanceChart').getContext('2d');
      new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: 'Platform Performance',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
};
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
}
.content {
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
.card {
  margin-bottom: 20px;
}
</style>
