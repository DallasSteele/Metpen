<template>
  <div>
    <Loadingmf :show="loading" />
    <AppHeader />
    <Nuxt />
    <hr>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../components/inc/AppHeader.vue";
import AppFooter from "../components/inc/AppFooter.vue";
import Loadingmf from '~/components/inc/Loadingmf.vue';


export default {
  name: 'default',
  components: {
    Loadingmf,
    AppHeader,
    AppFooter
  },
  data() {
    return {
      isSidebarCollapsed: false,
      loading: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  },
  watch: {
    '$route' (to, from) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000); // Adjust the timeout duration as needed
    }
  },
}
</script>
