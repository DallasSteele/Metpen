<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

useSeoMeta({
  title: 'Dashboard - Tidy Tidys',
  description: 'Overview of bookings, activity, and account status.'
})

const { data: me } = await useFetch('/api/me')
const { data: bookings } = await useFetch('/api/bookings')

const upcomingCount = computed(() =>
  bookings.value?.filter(item => item.status === 'Confirmed' || item.status === 'In Progress').length || 0
)

const completedCount = computed(() =>
  bookings.value?.filter(item => item.status === 'Completed').length || 0
)

const totalSpent = computed(() =>
  (bookings.value || []).reduce((sum, item) => sum + item.price, 0)
)
</script>

<template>
  <div class="space-y-8">
    <PageHeading
      eyebrow="Overview"
      :title="`Welcome back, ${me?.name || 'there'}`"
      description="A cleaner dashboard with clearer hierarchy, faster scanning, and room for real backend data later."
    />
    
    <QuickActionCards />
    <RecommendationCards />

    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <StatCard
        label="Active bookings"
        :value="String(upcomingCount)"
        helper="Confirmed and in-progress services"
      />
      <StatCard
        label="Completed bookings"
        :value="String(completedCount)"
        helper="Finished service history"
      />
      <StatCard
        label="Total spent"
        :value="`Rp ${totalSpent.toLocaleString('id-ID')}`"
        helper="Mock summary for the current account"
      />
    </div>

    <div class="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <div class="soft-card p-6">
        <div class="flex items-center gap-3">
          <NuxtLink
            to="/bookings"
            class="rounded-2xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900"
          >
            View all
          </NuxtLink>

          <NuxtLink
            to="/bookings/new"
            class="rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
          >
            New booking
          </NuxtLink>
        </div>

        <div class="mt-6 overflow-hidden rounded-3xl border border-neutral-200">
          <div
            v-for="booking in bookings"
            :key="booking.id"
            class="flex flex-col gap-3 border-b border-neutral-200 bg-white px-5 py-4 last:border-b-0 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p class="text-sm font-semibold text-neutral-900">
                {{ booking.service }}
              </p>
              <p class="mt-1 text-sm text-neutral-500">
                {{ booking.id }} · {{ booking.date }} · {{ booking.time }}
              </p>
            </div>

            <div class="flex items-center gap-3">
              <span
                class="rounded-full px-3 py-1 text-xs font-medium"
                :class="{
                  'bg-emerald-50 text-emerald-700': booking.status === 'Confirmed',
                  'bg-amber-50 text-amber-700': booking.status === 'In Progress',
                  'bg-neutral-100 text-neutral-700': booking.status === 'Completed'
                }"
              >
                {{ booking.status }}
              </span>

              <span class="text-sm font-medium text-neutral-900">
                Rp {{ booking.price.toLocaleString('id-ID') }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-6 xl:grid-cols-[1fr_1fr]">
  <BookingTimeline />

  <UCard class="rounded-3xl">
    <template #header>
      <div>
        <p class="text-lg font-semibold text-neutral-900">Service spotlight</p>
        <p class="mt-2 text-sm leading-6 text-neutral-600">
          A richer editorial panel makes the dashboard feel more curated.
        </p>
      </div>
    </template>

    <div class="overflow-hidden rounded-[1.5rem]">
      <NuxtImg
        src="/images/services/deep-cleaning.jpg"
        alt="Deep Cleaning spotlight"
        width="1200"
        height="800"
        class="h-56 w-full object-cover"
      />
    </div>

    <div class="mt-5">
      <div class="brand-chip">
        <UIcon name="i-lucide-sparkles" class="h-4 w-4" />
        <span>Top pick this week</span>
      </div>

      <h3 class="mt-4 text-2xl font-semibold tracking-tight text-neutral-900">
        Deep Cleaning
      </h3>

      <p class="mt-3 text-sm leading-6 text-neutral-600">
        A more premium, full-reset service for move-ins, event recovery, and homes that need deeper attention.
      </p>

      <NuxtLink
        to="/services/deep-cleaning"
        class="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[var(--tt-brand)] px-4 py-3 text-sm font-medium text-white"
      >
        <span>View details</span>
        <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
      </NuxtLink>
    </div>
  </UCard>
</div>

    <div class="grid gap-4 md:grid-cols-3">
        <div class="overflow-hidden rounded-3xl">
          <NuxtImg
            src="/images/hero/tidy-hero-1.jpg"
            alt="Service preview 1"
            width="800"
            height="600"
            class="h-44 w-full object-cover"
          />
        </div>
        <div class="overflow-hidden rounded-3xl">
          <NuxtImg
            src="/images/hero/tidy-hero-2.jpg"
            alt="Service preview 2"
            width="800"
            height="600"
            class="h-44 w-full object-cover"
          />
        </div>
        <div class="overflow-hidden rounded-3xl">
          <NuxtImg
            src="/images/hero/tidy-hero-3.jpg"
            alt="Service preview 3"
            width="800"
            height="600"
            class="h-44 w-full object-cover"
          />
        </div>
  </div>

      <div class="soft-card p-6">
        <p class="text-lg font-semibold text-neutral-900">Account snapshot</p>
        <p class="mt-2 text-sm leading-6 text-neutral-600">
          Quick profile info for the logged-in experience.
        </p>

        <div class="mt-6 space-y-4">
          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Email</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">{{ me?.email }}</p>
          </div>

          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Phone</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">{{ me?.phone }}</p>
          </div>

          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Preferred city</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">{{ me?.city }}</p>
          </div>
        </div>

        <NuxtLink
          to="/profile"
          class="mt-6 inline-flex rounded-2xl border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-900"
        >
          View full profile
        </NuxtLink>
      </div>
    </div>
  </div>
</template>