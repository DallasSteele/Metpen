<script setup lang="ts">
const route = useRoute()
const auth = useAuthStore()

const links = [
  { label: 'Dasbor', to: '/dashboard', icon: 'i-lucide-layout-dashboard' },
  { label: 'Layanan', to: '/services', icon: 'i-lucide-briefcase-business' },
  { label: 'Pemesanan', to: '/bookings', icon: 'i-lucide-calendar-days' },
  { label: 'Favorit', to: '/favorites', icon: 'i-lucide-heart' },
  { label: 'Alamat', to: '/addresses', icon: 'i-lucide-map-pinned' },
  { label: 'Profil', to: '/profile', icon: 'i-lucide-user-round' }
]

function isActive(path: string) {
  if (path === '/dashboard') return route.path === '/dashboard'
  return route.path.startsWith(path)
}

function handleLogout() {
  auth.logout()
  return navigateTo('/auth/login')
}
</script>

<template>
  <div class="soft-card-strong overflow-hidden p-3">
    <div class="mb-3 rounded-[1.5rem] bg-white/70 px-4 py-4">
      <p class="text-sm font-semibold text-neutral-900">
        {{ auth.user?.name || 'Pengguna Demo' }}
      </p>
      <p class="mt-1 text-xs text-neutral-500">
        {{ auth.user?.email || 'demo@tidytidys.com' }}
      </p>
    </div>

    <nav class="space-y-2">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        :class="[
          'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200',
          isActive(link.to)
            ? 'bg-[var(--tt-brand)] text-white shadow-[0_8px_24px_rgba(124,108,243,0.22)]'
            : 'text-neutral-700 hover:bg-white/80 hover:text-neutral-900'
        ]"
      >
        <UIcon :name="link.icon" class="h-4 w-4 shrink-0" />
        <span>{{ link.label }}</span>
      </NuxtLink>
    </nav>

    <div class="mt-4 border-t border-[var(--tt-line)] pt-4">
      <NuxtLink
        to="/support"
        class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-neutral-700 transition hover:bg-white/80 hover:text-neutral-900"
      >
        <UIcon name="i-lucide-life-buoy" class="h-4 w-4" />
        <span>Bantuan</span>
      </NuxtLink>

      <button
        class="mt-2 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-neutral-700 transition hover:bg-white/80 hover:text-neutral-900"
        @click="handleLogout"
      >
        <UIcon name="i-lucide-log-out" class="h-4 w-4" />
        <span>Keluar</span>
      </button>
    </div>
  </div>
</template>