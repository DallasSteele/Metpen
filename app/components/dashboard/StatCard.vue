<script setup lang="ts">
defineProps<{
  label: string
  value: string
  helper?: string
}>()
</script>

<template>
  <div class="soft-card p-6">
    <p class="text-sm text-neutral-500">{{ label }}</p>
    <p class="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
      {{ value }}
    </p>
    <p v-if="helper" class="mt-3 text-sm text-neutral-500">
      {{ helper }}
    </p>
  </div>
</template>