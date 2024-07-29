<template>
  <div class="container">
    <div class="navbar">
      <h1>Set Pricing</h1>
    </div>
    <div class="content">
      <table class="table table-bordered pricing-table">
        <thead class="thead-light">
          <tr>
            <th>Service ID</th>
            <th>Service Name</th>
            <th>Current Price</th>
            <th>New Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="service in services" :key="service.id">
            <td>{{ service.id }}</td>
            <td>{{ service.name }}</td>
            <td>{{ service.currentPrice }}</td>
            <td><input type="number" class="form-control" v-model="service.newPrice"></td>
            <td>
              <button class="btn btn-sm btn-save" @click="savePrice(service.id)">
                <i class="fas fa-save"></i> Save
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'mitralay',
  name: 'SetPricing',
  data() {
    return {
      services: [
        { id: 1, name: 'Home Cleaning', currentPrice: 100, newPrice: 100 },
        { id: 2, name: 'Carpet Cleaning', currentPrice: 150, newPrice: 150 },
        { id: 3, name: 'Pool Cleaning', currentPrice: 200, newPrice: 200 },
        { id: 4, name: 'Lavatory Cleaning', currentPrice: 120, newPrice: 120 },
        // Add more services as needed
      ]
    }
  },
  methods: {
    savePrice(id) {
      const service = this.services.find(service => service.id === id);
      // Implement save logic here
      console.log(`Saving new price for service ID ${id}: $${service.newPrice}`);
    }
  }
}
</script>

<style scoped>
.container {
  padding: 35px;
}

.content {
  padding: 5px;
}

.pricing-table th, .pricing-table td {
  text-align: center;
}

.btn-save {
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px;
}
</style>
