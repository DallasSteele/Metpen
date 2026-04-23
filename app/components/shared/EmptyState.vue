<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="rounded-3xl border border-dashed border-neutral-300 bg-white p-8 text-center">
    <p class="text-lg font-semibold text-neutral-900">{{ title }}</p>
    <p class="mx-auto mt-3 max-w-xl text-sm leading-6 text-neutral-600">
      {{ description }}
    </p>
  </div>
</template>