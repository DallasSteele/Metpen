<script setup lang="ts">
import type { Insight } from '~/components/shared/types'

const route = useRoute()
const { data: insights } = await useFetch<Insight[]>('/api/insights')

const insight = computed(() =>
  (insights.value || []).find(item => item.slug === route.params.slug)
)
</script>

<template>
  <section class="section-space">
    <div class="container-shell max-w-4xl">
      <article v-if="insight" class="space-y-8">
        <div class="overflow-hidden rounded-[2rem]">
          <NuxtImg
            :src="insight.image"
            :alt="insight.title"
            width="1400"
            height="900"
            class="h-[360px] w-full object-cover"
          />
        </div>

        <div>
          <div class="mb-4 flex items-center gap-3 text-xs text-neutral-500">
            <span class="rounded-full bg-neutral-100 px-3 py-1 font-medium text-neutral-700">
              {{ insight.category }}
            </span>
            <span>{{ insight.readTime }}</span>
          </div>

          <h1 class="section-title">{{ insight.title }}</h1>
          <p class="body-muted mt-5">{{ insight.description }}</p>
        </div>

        <div class="space-y-5">
          <p
            v-for="(paragraph, index) in insight.body"
            :key="index"
            class="text-base leading-8 text-neutral-700"
          >
            {{ paragraph }}
          </p>
        </div>
      </article>

      <EmptyState
        v-else
        title="Insight not found"
        description="This article is not available in the current mock set."
      />
    </div>
  </section>
</template>