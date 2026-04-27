<script setup lang="ts">
const { data: memberships } = await useFetch('/api/memberships')
</script>

<template>
  <section class="pb-20 lg:pb-28">
    <div class="container-shell">
      <div class="mb-10 max-w-2xl">
        <p class="eyebrow">Keanggotaan</p>
        <h2 class="section-title mt-4">Lapisan membership premium yang lebih halus</h2>
        <p class="body-muted mt-4">
          Ini menambahkan kedalaman bisnis dan membuat cerita produk terasa lebih lengkap.
        </p>
      </div>

      <div class="grid gap-6 xl:grid-cols-3">
        <div
          v-for="plan in memberships"
          :key="plan.id"
          :class="[
            'soft-card-strong p-7',
            plan.highlight ? 'ring-2 ring-[var(--tt-brand)]' : ''
          ]"
        >
          <div
            v-if="plan.highlight"
            class="mb-4 inline-flex rounded-full bg-[var(--tt-brand-soft)] px-3 py-1 text-xs font-medium text-[var(--tt-brand)]"
          >
            Direkomendasikan
          </div>

          <p class="text-sm text-neutral-500">{{ plan.subtitle }}</p>
          <h3 class="mt-2 text-2xl font-semibold text-neutral-900">{{ plan.name }}</h3>
          <p class="mt-5 text-3xl font-semibold text-neutral-900">{{ plan.price }}</p>

          <div class="mt-6 space-y-3">
            <div
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-center gap-3"
            >
              <UIcon name="i-lucide-check-circle-2" class="h-4 w-4 text-[var(--tt-success)]" />
              <span class="text-sm text-neutral-700">{{ feature }}</span>
            </div>
          </div>

          <NuxtLink
            to="/membership"
            class="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--tt-brand)] px-4 py-3 text-sm font-medium text-white"
          >
            <span>Lihat keanggotaan</span>
            <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>