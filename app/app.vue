<script setup lang="ts">
const toaster = {
  position: 'bottom-right',
  duration: 3500,
  expand: true,
  max: 4
}
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>