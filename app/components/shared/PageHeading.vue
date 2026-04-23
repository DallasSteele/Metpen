<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="max-w-3xl">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h1 class="section-title mt-4">{{ title }}</h1>
    <p v-if="description" class="body-muted mt-4">{{ description }}</p>
  </div>
</template>