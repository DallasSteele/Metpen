<script setup lang="ts">
const { data: coverage } = await useFetch('/api/coverage')

function toneClass(color: string) {
  if (color === 'pink') return 'tint-pink'
  if (color === 'blue') return 'tint-blue'
  if (color === 'mint') return 'tint-mint'
  return 'tint-lilac'
}
</script>

<template>
  <section class="pb-20 lg:pb-28">
    <div class="container-shell">
      <div class="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl">
          <p class="eyebrow">Cakupan</p>
          <h2 class="section-title mt-4">Lebih banyak area, layanan terasa lebih nyata</h2>
          <p class="body-muted mt-4">
            Ini memperluas produk menjadi sesuatu yang terasa operasional, bukan sekadar tampilan.
          </p>
        </div>

        <NuxtLink
          to="/coverage"
          class="inline-flex items-center gap-2 text-sm font-medium text-[var(--tt-brand)]"
        >
          <span>Lihat semua cakupan</span>
          <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
        </NuxtLink>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="item in coverage"
          :key="item.id"
          :class="['soft-card p-6', toneClass(item.color)]"
        >
          <h3 class="text-xl font-semibold text-neutral-900">{{ item.city }}</h3>

          <div class="mt-6 grid gap-3">
            <div class="flex items-center justify-between text-sm">
              <span class="text-neutral-500">Area</span>
              <span class="font-medium text-neutral-900">{{ item.areas }}</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-neutral-500">Spesialis</span>
              <span class="font-medium text-neutral-900">{{ item.specialists }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>