<script setup lang="ts">
import type { Specialist } from '~/components/shared/types'

defineProps<{
  specialist: Specialist
}>()
</script>

<template>
  <NuxtLink
    :to="`/specialists/${specialist.slug}`"
    class="group soft-card block p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
  >
    <div class="flex items-center gap-4">
      <UAvatar :src="specialist.image" :alt="specialist.name" size="3xl" />
      <div>
        <h3 class="text-lg font-semibold text-neutral-900">{{ specialist.name }}</h3>
        <p class="mt-1 text-sm text-neutral-500">{{ specialist.role }}</p>
      </div>
    </div>

    <div class="mt-5 grid gap-3">
      <div class="flex items-center justify-between text-sm">
        <span class="text-neutral-500">Kota</span>
        <span class="font-medium text-neutral-900">{{ specialist.city }}</span>
      </div>
      <div class="flex items-center justify-between text-sm">
        <span class="text-neutral-500">Rating</span>
        <span class="font-medium text-neutral-900">★ {{ specialist.rating }}</span>
      </div>
      <div class="flex items-center justify-between text-sm">
        <span class="text-neutral-500">Selesai</span>
        <span class="font-medium text-neutral-900">{{ specialist.jobsCompleted }}</span>
      </div>
    </div>

    <div class="mt-5 flex flex-wrap gap-2">
      <UBadge
        v-for="item in specialist.specialties.slice(0, 2)"
        :key="item"
        color="primary"
        variant="subtle"
        class="rounded-full"
      >
        {{ item }}
      </UBadge>
    </div>
  </NuxtLink>
</template>