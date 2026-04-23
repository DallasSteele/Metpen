<script setup lang="ts">
import type { Insight } from '~/components/shared/types'

const { data: insights } = await useFetch<Insight[]>('/api/insights')

useSeoMeta({
  title: 'Insights - Tidy Tidys',
  description: 'Editorial content for a richer product surface.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell">
      <PageHeading
        eyebrow="Insights"
        title="Guides, thoughts, and product notes"
        description="This page gives the app editorial depth instead of only transactional pages."
      />

      <div class="mt-10 grid gap-6 xl:grid-cols-3">
        <InsightCard
          v-for="insight in insights"
          :key="insight.id"
          :insight="insight"
        />
      </div>
    </div>
  </section>
</template>