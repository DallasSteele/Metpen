<template>
    <div>
        <Loadingmf :show="loading"/>
        <AppHeader/>
        <Nuxt/>
        <AppFooter/>
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
            loading: false
        }
    },
    watch: {
         '$route' (to, from) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
}

</script>