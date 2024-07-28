<template>
  <div>
    <Loadingmf :show="loading" />
     <Sidebar ref="sidebar" />
      <div :class="['content', { collapsed: isSidebarCollapsed }]">
    <AppHeader />
    <Nuxt />
    <hr>
    <AppFooter />
       </div>
  </div>
</template>

<script>
import AppHeader from "../components/inc/AppHeader.vue";
import AppFooter from "../components/inc/AppFooter.vue";
import Loadingmf from '~/components/inc/Loadingmf.vue';
import SidebarVue from '~/components/inc/Sidebar.vue';


export default {
  name: 'default',
  components: {
    SidebarVue,
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
   async beforeMount() {
    const publicPaths = ['/auth/login', '/auth/signup'];
    const currentPath = this.$route.path;
    const token = this.$cookies.get('auth_token');

    if (!token && !publicPaths.includes(currentPath)) {
      this.$router.push('/auth/login');
    }
  }
}
</script>
