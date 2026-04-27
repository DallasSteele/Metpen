<script setup lang="ts">
defineProps<{
  review: {
    id: number
    author: string
    city: string
    rating: number
    title: string
    body: string
    date: string
  }
}>()
</script>

<template>
  <div class="soft-card p-6">
    <div class="flex items-center justify-between gap-4">
      <div>
        <p class="text-lg font-semibold text-neutral-900">{{ review.title }}</p>
        <p class="mt-1 text-sm text-neutral-500">
          {{ review.author }} · {{ review.city }}
        </p>
      </div>

      <div class="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
        ★ {{ review.rating }}
      </div>
    </div>

    <p class="mt-4 text-sm leading-7 text-neutral-600">
      {{ review.body }}
    </p>

    <p class="mt-5 text-xs text-neutral-400">
      {{ review.date }}
    </p>
  </div>
</template>