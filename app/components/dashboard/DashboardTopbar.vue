<script setup lang="ts">
const auth = useAuthStore()
</script>

<template>
  <div class="mb-6 flex items-center justify-between rounded-3xl border border-neutral-200 bg-white p-4 lg:hidden">
    <div>
      <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Dashboard</p>
      <p class="mt-1 text-sm font-semibold text-neutral-900">
        {{ auth.user?.name || 'Demo User' }}
      </p>
    </div>

    <NuxtLink
      to="/bookings/new"
      class="rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
    >
      New booking
    </NuxtLink>
  </div>
</template>