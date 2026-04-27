<script setup lang="ts">
import { useScrolled } from './composables/useScrolled'

const route = useRoute()
const { isScrolled } = useScrolled(10)

const links = [
{ label: 'Beranda', to: '/', icon: 'i-lucide-house' },
{ label: 'Layanan', to: '/services', icon: 'i-lucide-briefcase-business' },
{ label: 'Spesialis', to: '/specialists', icon: 'i-lucide-users' },
{ label: 'Insight', to: '/insights', icon: 'i-lucide-newspaper' },
{ label: 'Harga', to: '/pricing', icon: 'i-lucide-badge-dollar-sign' },
{ label: 'Tentang', to: '/about', icon: 'i-lucide-info' },
{ label: 'Bantuan', to: '/support', icon: 'i-lucide-life-buoy' },
{ label: 'Dasbor', to: '/dashboard', icon: 'i-lucide-layout-dashboard' },
{ label: 'Profil', to: '/profile', icon: 'i-lucide-user-round' },
]

function isActive(path: string) {
  if (path === '/dashboard') return route.path === '/dashboard'
  return route.path.startsWith(path)
}
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-300',
      isScrolled
        ? 'border-b border-neutral-200/80 bg-[var(--tt-bg)]/85 backdrop-blur-xl'
        : 'bg-transparent'
    ]"
  >
    <div class="container-shell flex items-center justify-between py-4">
      <NuxtLink to="/" class="flex items-center gap-3">
        <div
          :class="[
            'flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold text-white transition-all duration-300',
            isScrolled ? 'bg-[var(--tt-accent)] shadow-sm' : 'bg-[var(--tt-brand)]'
          ]"
        >
          TT
        </div>

        <div>
          <p class="text-sm font-semibold tracking-tight text-neutral-900">Tidy Tidys</p>
          <p class="text-xs text-neutral-500">Frontend 2.0</p>
        </div>
      </NuxtLink>

      <nav class="hidden items-center gap-2 md:flex">
        <NuxtLink
          to="/"
          class="rounded-2xl px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-white/80 hover:text-neutral-900"
        >
          Beranda
        </NuxtLink>

        <NuxtLink
          to="/explore"
          class="rounded-2xl px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-white/80 hover:text-neutral-900"
        >
          Jelajahi
        </NuxtLink>

        <NuxtLink
          to="/services"
          class="rounded-2xl px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-white/80 hover:text-neutral-900"
        >
          Layanan
        </NuxtLink>

        <NuxtLink
          to="/membership"
          class="rounded-2xl px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-white/80 hover:text-neutral-900"
        >
          Keanggotaan
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="rounded-2xl px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-white/80 hover:text-neutral-900"
        >
          Kontak
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <AppQuickSearch />

        <NuxtLink
          to="/bookings/new"
          class="inline-flex items-center gap-2 rounded-2xl bg-[var(--tt-brand)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          <UIcon name="i-lucide-calendar-plus-2" class="h-4 w-4" />
          <span>Pesan sekarang</span>
        </NuxtLink>
      </div>

      <div class="md:hidden">
        <UDrawer direction="right" title="Menu">
          <UButton color="neutral" variant="ghost" icon="i-lucide-menu" />

          <template #body>
            <div class="space-y-3">
              <NuxtLink
                v-for="link in links"
                :key="link.to"
                :to="link.to"
                class="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-900"
              >
                <UIcon :name="link.icon" class="h-4 w-4" />
                <span>{{ link.label }}</span>
              </NuxtLink>

              <NuxtLink
                to="/bookings/new"
                class="flex items-center justify-center gap-2 rounded-2xl bg-[var(--tt-brand)] px-4 py-3 text-sm font-medium text-white"
              >
                <UIcon name="i-lucide-calendar-plus-2" class="h-4 w-4" />
                <span>Pesan sekarang</span>
              </NuxtLink>
            </div>
          </template>
        </UDrawer>
      </div>
    </div>
  </header>
</template>