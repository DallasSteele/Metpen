<script setup lang="ts">
const { data: offers } = await useFetch('/api/offers')

function toneClass(tone: string) {
  if (tone === 'pink') return 'tint-pink'
  if (tone === 'blue') return 'tint-blue'
  if (tone === 'mint') return 'tint-mint'
  return 'tint-lilac'
}
</script>

<template>
  <section class="pb-20 lg:pb-28">
    <div class="container-shell">
      <div class="mb-10 max-w-2xl">
        <p class="eyebrow">Promo</p>
        <h2 class="section-title mt-4">Promo yang lebih halus, tampilan lebih menarik</h2>
        <p class="body-muted mt-4">
          Lebih banyak konten, lebih banyak energi kampanye, tetap terasa elegan.
        </p>
      </div>

      <div class="grid gap-6 xl:grid-cols-3">
        <div
          v-for="offer in offers"
          :key="offer.id"
          class="soft-card-strong overflow-hidden"
        >
          <div :class="['p-6', toneClass(offer.tone)]">
            <div class="mb-4 inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700">
              {{ offer.badge }}
            </div>

            <h3 class="text-2xl font-semibold tracking-tight text-neutral-900">
              {{ offer.title }}
            </h3>

            <p class="mt-3 text-sm leading-6 text-neutral-700">
              {{ offer.subtitle }}
            </p>

            <p class="mt-5 text-lg font-semibold text-[var(--tt-brand)]">
              {{ offer.discount }}
            </p>
          </div>

          <NuxtImg
            :src="offer.image"
            :alt="offer.title"
            width="1200"
            height="800"
            class="h-52 w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>