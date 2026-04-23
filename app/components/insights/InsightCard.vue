<script setup lang="ts">
import type { Insight } from '~/components/shared/types'

defineProps<{
  insight: Insight
}>()
</script>

<template>
  <NuxtLink
    :to="`/insights/${insight.slug}`"
    class="group block overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.05)]"
  >
    <div class="overflow-hidden">
      <NuxtImg
        :src="insight.image"
        :alt="insight.title"
        width="1200"
        height="800"
        class="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
    </div>

    <div class="p-6">
      <div class="mb-4 flex items-center gap-3 text-xs text-neutral-500">
        <span class="rounded-full bg-neutral-100 px-3 py-1 font-medium text-neutral-700">
          {{ insight.category }}
        </span>
        <span>{{ insight.readTime }}</span>
      </div>

      <h3 class="text-xl font-semibold tracking-tight text-neutral-900">
        {{ insight.title }}
      </h3>

      <p class="mt-3 text-sm leading-6 text-neutral-600">
        {{ insight.description }}
      </p>
    </div>
  </NuxtLink>
</template>