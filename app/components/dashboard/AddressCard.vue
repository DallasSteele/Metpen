<script setup lang="ts">
defineProps<{
  address: {
    id: number
    label: string
    recipient: string
    phone: string
    address: string
    notes: string
  }
}>()
</script>

<template>
  <div class="soft-card p-6">
    <div class="flex items-center justify-between">
      <div>
        <div class="brand-chip">
          <UIcon name="i-lucide-map-pinned" class="h-4 w-4" />
          <span>{{ address.label }}</span>
        </div>
        <p class="mt-4 text-lg font-semibold text-neutral-900">{{ address.recipient }}</p>
        <p class="mt-1 text-sm text-neutral-500">{{ address.phone }}</p>
      </div>

      <UButton color="neutral" variant="outline" size="sm">
        Edit
      </UButton>
    </div>

    <p class="mt-5 text-sm leading-7 text-neutral-600">
      {{ address.address }}
    </p>

    <div class="mt-5 rounded-2xl bg-neutral-50 px-4 py-3">
      <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Notes</p>
      <p class="mt-2 text-sm text-neutral-600">{{ address.notes }}</p>
    </div>
  </div>
</template>