<script setup lang="ts">
const { data: faqs } = await useFetch('/api/faqs')
</script>

<template>
  <section class="pb-20 lg:pb-28">
    <div class="container-shell">
      <div class="mb-10 max-w-2xl">
        <p class="eyebrow">Bantuan</p>
        <h2 class="section-title mt-4">Pertanyaan umum, jawaban lebih jelas</h2>
        <p class="body-muted mt-4">
          Ini menambahkan lapisan konten yang lebih berguna di halaman utama, tidak hanya sekadar blok marketing.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="item in faqs?.slice(0, 3)"
          :key="item.id"
          class="soft-card p-6"
        >
          <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--tt-brand-soft)] text-[var(--tt-brand)]">
            <UIcon :name="item.icon" class="h-5 w-5" />
          </div>

          <h3 class="text-lg font-semibold text-neutral-900">{{ item.label }}</h3>
          <p class="mt-3 text-sm leading-6 text-neutral-600">{{ item.content }}</p>
        </div>
      </div>

      <NuxtLink
        to="/faq"
        class="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--tt-brand)]"
      >
        <span>Buka pusat FAQ</span>
        <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
      </NuxtLink>
    </div>
  </section>
</template>