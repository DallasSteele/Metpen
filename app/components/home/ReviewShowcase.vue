<script setup lang="ts">
const { data: reviews } = await useFetch('/api/reviews')
</script>

<template>
  <section class="pb-20 lg:pb-28">
    <div class="container-shell">
      <div class="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl">
          <p class="eyebrow">Ulasan</p>
          <h2 class="section-title mt-4">Lebih banyak kepercayaan, lebih terasa nyata</h2>
          <p class="body-muted mt-4">
            Lapisan ulasan yang lebih kaya membuat produk terasa lebih hidup.
          </p>
        </div>

        <NuxtLink
          to="/reviews"
          class="inline-flex items-center gap-2 text-sm font-medium text-[var(--tt-brand)]"
        >
          <span>Lihat semua ulasan</span>
          <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
        </NuxtLink>
      </div>

      <div class="grid gap-6 xl:grid-cols-3">
        <ReviewCard
          v-for="review in reviews?.slice(0, 3)"
          :key="review.id"
          :review="review"
        />
      </div>
    </div>
  </section>
</template>