<script setup lang="ts">
import type { Specialist } from '~/shared/types'

const route = useRoute()
const { data: specialists } = await useFetch<Specialist[]>('/api/specialists')

const specialist = computed(() =>
  (specialists.value || []).find(item => item.slug === route.params.slug)
)
</script>

<template>
  <section class="section-space">
    <div class="container-shell max-w-5xl">
      <div v-if="specialist" class="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <UCard class="rounded-3xl">
          <div class="flex flex-col items-center text-center">
            <UAvatar :src="specialist.image" :alt="specialist.name" size="3xl" />
            <h1 class="mt-5 text-2xl font-semibold text-neutral-900">{{ specialist.name }}</h1>
            <p class="mt-2 text-sm text-neutral-500">{{ specialist.role }}</p>
          </div>

          <div class="mt-6 space-y-3">
            <div class="flex items-center justify-between text-sm">
              <span class="text-neutral-500">City</span>
              <span class="font-medium text-neutral-900">{{ specialist.city }}</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-neutral-500">Rating</span>
              <span class="font-medium text-neutral-900">★ {{ specialist.rating }}</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-neutral-500">Completed jobs</span>
              <span class="font-medium text-neutral-900">{{ specialist.jobsCompleted }}</span>
            </div>
          </div>
        </UCard>

        <div class="space-y-6">
          <UCard class="rounded-3xl">
            <template #header>
              <p class="text-lg font-semibold text-neutral-900">Biography</p>
            </template>
            <p class="text-sm leading-7 text-neutral-600">{{ specialist.bio }}</p>
          </UCard>

          <UCard class="rounded-3xl">
            <template #header>
              <p class="text-lg font-semibold text-neutral-900">Specialties</p>
            </template>
            <div class="flex flex-wrap gap-3">
              <UBadge
                v-for="item in specialist.specialties"
                :key="item"
                color="primary"
                variant="subtle"
                class="rounded-full"
              >
                {{ item }}
              </UBadge>
            </div>
          </UCard>
        </div>
      </div>

      <EmptyState
        v-else
        title="Specialist not found"
        description="This profile does not match the current mock data."
      />
    </div>
  </section>
</template>