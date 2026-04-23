<script setup lang="ts">
import type { Specialist } from '~/shared/types'

const { data: specialists } = await useFetch<Specialist[]>('/api/specialists')

useSeoMeta({
  title: 'Specialists - Tidy Tidys',
  description: 'Meet the specialists behind the service experience.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell">
      <PageHeading
        eyebrow="Team"
        title="Meet the specialists"
        description="Profiles make the service surface feel more human and more trustworthy."
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