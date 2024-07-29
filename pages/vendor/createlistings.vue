<template>
  <div class="container-fluid">
    <div class="row">
     
      <!-- Content -->
      <main class="content col-md-10">
        <div class="navbar">
          <h1>Create Listings</h1>
        </div>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="serviceName">Service Name</label>
            <input type="text" class="form-control" id="serviceName" v-model="serviceName" placeholder="Enter service name">
          </div>
          <div class="form-group">
            <label for="serviceDescription">Service Description</label>
            <textarea class="form-control" id="serviceDescription" v-model="serviceDescription" rows="3" placeholder="Enter service description"></textarea>
          </div>
          <div class="form-group">
            <label for="servicePrice">Price</label>
            <input type="number" class="form-control" id="servicePrice" v-model="servicePrice" placeholder="Enter price">
          </div>
          <div class="form-group">
            <label for="serviceCategory">Category</label>
            <select class="form-control" id="serviceCategory" v-model="serviceCategory">
              <option>Home Cleaning</option>
              <option>Carpet Cleaning</option>
              <option>Pool Cleaning</option>
              <option>Lavatory</option>
            </select>
          </div>
          <div class="form-group">
            <label for="serviceImage">Upload Image</label>
            <input type="file" class="form-control-file" id="serviceImage" @change="handleFileUpload">
          </div>
          <button type="submit" class="btn btn-submit">Submit</button>
        </form>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateListings',
  layout: 'mitralay',
  data() {
    return {
      serviceName: '',
      serviceDescription: '',
      servicePrice: '',
      serviceCategory: 'Home Cleaning',
      serviceImage: null,
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted with:', {
        serviceName: this.serviceName,
        serviceDescription: this.serviceDescription,
        servicePrice: this.servicePrice,
        serviceCategory: this.serviceCategory,
        serviceImage: this.serviceImage
      });
    },
    handleFileUpload(event) {
      this.serviceImage = event.target.files[0];
    },
    logout() {
      // Handle logout
      console.log('Logging out...');
    }
  }
}
</script>


<style scoped>
.container {
  padding: 35px;
}

.content {
  padding: auto;
  margin: auto;
}
</style>>
