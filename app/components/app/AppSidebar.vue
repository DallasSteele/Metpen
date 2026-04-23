<script setup lang="ts">
const route = useRoute()
const auth = useAuthStore()

const links = [
  { label: 'Dashboard', to: '/dashboard', icon: 'i-lucide-layout-dashboard' },
  { label: 'Services', to: '/services', icon: 'i-lucide-briefcase-business' },
  { label: 'Bookings', to: '/bookings', icon: 'i-lucide-calendar-days' },
  { label: 'New Booking', to: '/bookings/new', icon: 'i-lucide-calendar-plus-2' },
  { label: 'Profile', to: '/profile', icon: 'i-lucide-user-round' }
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
  <aside class="hidden w-72 border-r border-neutral-200 bg-white lg:flex lg:flex-col">
    <div class="border-b border-neutral-200 p-6">
      <NuxtLink to="/" class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-900 text-sm font-semibold text-white">
          TT
        </div>
        <div>
          <p class="text-sm font-semibold text-neutral-900">Tidy Tidys</p>
          <p class="text-xs text-neutral-500">Control panel</p>
        </div>
      </NuxtLink>
    </div>

    <div class="flex-1 p-4">
      <nav class="space-y-2">
        <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        :class="[
          'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition',
          isActive(link.to)
            ? 'bg-neutral-900 text-white'
            : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
        ]"
        >
        <UIcon :name="link.icon" class="h-4 w-4" />
        <span>{{ link.label }}</span>
        </NuxtLink>
      </nav>
    </div>

    <div class="border-t border-neutral-200 p-4">
      <div class="rounded-2xl bg-neutral-50 p-4">
        <p class="text-sm font-medium text-neutral-900">
          {{ auth.user?.name || 'Demo User' }}
        </p>
        <p class="mt-1 text-xs text-neutral-500">
          {{ auth.user?.email || 'demo@tidytidys.com' }}
        </p>

        <button
          class="mt-4 w-full rounded-2xl border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
          @click="handleLogout"
        >
          Sign out
        </button>
      </div>
    </div>
  </aside>
</template>