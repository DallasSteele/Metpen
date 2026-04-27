<script setup lang="ts">
const { data: coverage } = await useFetch('/api/coverage')

useSeoMeta({
  title: 'Jangkauan - Tidy Tidys',
  description: 'Area jangkauan dan kota layanan aktif.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell">
      <PageHeading
        eyebrow="Jangkauan"
        title="Kota dan area yang saat ini kami layani"
        description="Halaman jangkauan membuat platform layanan terasa lebih operasional dan nyata."
      />

      <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="item in coverage"
          :key="item.id"
          class="soft-card p-6"
        >
          <div class="brand-chip">
            <UIcon name="i-lucide-map-pinned" class="h-4 w-4" />
            <span>{{ item.city }}</span>
          </div>

          <div class="mt-6 grid gap-3">
            <div class="flex items-center justify-between text-sm">
              <span class="text-neutral-500">Area jangkauan</span>
              <span class="font-medium text-neutral-900">{{ item.areas }}</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-neutral-500">Spesialis aktif</span>
              <span class="font-medium text-neutral-900">{{ item.specialists }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>