<script setup lang="ts">
import { useScrolled } from './composables/useScrolled'

const route = useRoute()
const { isScrolled } = useScrolled(10)

const links = [
{ label: 'Home', to: '/', icon: 'i-lucide-house' },
{ label: 'Services', to: '/services', icon: 'i-lucide-briefcase-business' },
{ label: 'Specialists', to: '/specialists', icon: 'i-lucide-users' },
{ label: 'Insights', to: '/insights', icon: 'i-lucide-newspaper' },{ label: 'Pricing', to: '/pricing', icon: 'i-lucide-badge-dollar-sign' },
{ label: 'About', to: '/about', icon: 'i-lucide-info' },
{ label: 'Support', to: '/support', icon: 'i-lucide-life-buoy' },
{ label: 'Dashboard', to: '/dashboard', icon: 'i-lucide-layout-dashboard' },
{ label: 'Profile', to: '/profile', icon: 'i-lucide-user-round' },
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
          v-for="link in links.slice(0, 3)"
          :key="link.to"
          :to="link.to"
          :class="[
            'inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition',
            isActive(link.to)
              ? 'bg-white text-neutral-900 shadow-sm'
              : 'text-neutral-600 hover:bg-white/80 hover:text-neutral-900'
          ]"
        >
          <UIcon :name="link.icon" class="h-4 w-4" />
          <span>{{ link.label }}</span>
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <AppQuickSearch />

        <NuxtLink
          to="/bookings/new"
          class="inline-flex items-center gap-2 rounded-2xl bg-[var(--tt-brand)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          <UIcon name="i-lucide-calendar-plus-2" class="h-4 w-4" />
          <span>Book now</span>
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
                <span>Book now</span>
              </NuxtLink>
            </div>
          </template>
        </UDrawer>
      </div>
    </div>
  </header>
</template>