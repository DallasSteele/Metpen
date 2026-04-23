<script setup lang="ts">
const { data: insight } = await useFetch('/api/insight')
</script>

<template>
  <section class="pb-20 lg:pb-28">
    <div class="container-shell">
      <div class="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl">
          <p class="eyebrow">insight</p>
          <h2 class="section-title mt-4">Content cards that make the product feel alive</h2>
          <p class="body-muted mt-4">
            A product with content feels more believable than a product with only actions.
          </p>
        </div>

        <NuxtLink
          to="/services"
          class="inline-flex items-center gap-2 text-sm font-medium text-[var(--tt-brand)]"
        >
          <span>View more</span>
          <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
        </NuxtLink>
      </div>

      <div class="grid gap-6 xl:grid-cols-3">
        <article
          v-for="item in insight"
          :key="item.id"
          class="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.05)]"
        >
          <div class="overflow-hidden">
            <NuxtImg
              :src="item.image"
              :alt="item.title"
              width="1200"
              height="800"
              class="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div class="p-6">
            <div class="mb-4 flex items-center gap-3 text-xs text-neutral-500">
              <span class="rounded-full bg-neutral-100 px-3 py-1 font-medium text-neutral-700">
                {{ item.category }}
              </span>
              <span>{{ item.readTime }}</span>
            </div>

            <h3 class="text-xl font-semibold tracking-tight text-neutral-900">
              {{ item.title }}
            </h3>

            <p class="mt-3 text-sm leading-6 text-neutral-600">
              {{ item.description }}
            </p>

            <button class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--tt-brand)]">
              <span>Read insight</span>
              <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>