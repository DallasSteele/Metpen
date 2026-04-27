<script setup lang="ts">
import type { Specialist } from '~/shared/types'

const { data: specialists } = await useFetch<Specialist[]>('/api/specialists')

useSeoMeta({
  title: 'Spesialis - Tidy Tidys',
  description: 'Kenali para spesialis di balik pengalaman layanan kami.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell">
      <PageHeading
        eyebrow="Tim"
        title="Kenali para spesialis"
        description="Profil membuat tampilan layanan terasa lebih manusiawi dan lebih tepercaya."
      />

      <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <SpecialistCard
          v-for="specialist in specialists"
          :key="specialist.id"
          :specialist="specialist"
        />
      </div>
    </div>
  </section>
</template>