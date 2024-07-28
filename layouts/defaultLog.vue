<template>
  <div>
    <Loadingmf :show="loading" />
     <Sidebar ref="sidebar" />
      <div :class="['content', { collapsed: isSidebarCollapsed }]">
    <Authheader />
    <Nuxt />
    <hr>
    <AppFooter />
       </div>
  </div>
</template>

<script>
import Authheader from "../components/inc/Authheader.vue";
import AppFooter from "../components/inc/AppFooter.vue";
import Loadingmf from '~/components/inc/Loadingmf.vue';
import SidebarVue from '~/components/inc/Sidebar.vue';


export default {
  name: 'default',
  components: {
    SidebarVue,
    Loadingmf,
    Authheader,
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
 /* watch: {
    '$route' (to, from) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000); // Adjust the timeout duration as needed
    }
  },*/
  // async mounted() {
    // Check if the user is authenticated
   // const token = this.$cookies.get('auth_token');
   // if (!token && this.$route.path !== '/auth/login' && this.$route.path !== '/auth/signup') {
    //  this.$router.push('/auth/login');
   // }
 // }
}
</script>
