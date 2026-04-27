<script setup lang="ts">
const selected = ref<string[]>(['home-cleaning', 'deep-cleaning', 'weekly-home-care'])
const { data: services } = await useFetch('/api/services')

const compared = computed(() =>
  (services.value || []).filter(item => selected.value.includes(item.slug))
)

useSeoMeta({
  title: 'Bandingkan Layanan - Tidy Tidys',
  description: 'Bandingkan pilihan layanan secara berdampingan.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell">
      <PageHeading
        eyebrow="Bandingkan"
        title="Bandingkan layanan secara berdampingan"
        description="Halaman ini meningkatkan kepercayaan saat memilih dan membuat katalog terasa lebih matang."
      />

      <div class="mt-8 max-w-xl">
        <label class="mb-2 block text-sm font-medium text-neutral-700">Pilih layanan untuk dibandingkan</label>
        <USelect
          v-model="selected"
          multiple
          :items="(services || []).map(service => ({
            label: service.title,
            value: service.slug
          }))"
        />
      </div>

      <div class="mt-10 grid gap-6 xl:grid-cols-3">
        <div
          v-for="service in compared"
          :key="service.id"
          class="soft-card overflow-hidden"
        >
          <NuxtImg
            :src="service.image"
            :alt="service.title"
            width="1200"
            height="800"
            class="h-52 w-full object-cover"
          />

          <div class="p-6">
            <h2 class="text-xl font-semibold text-neutral-900">{{ service.title }}</h2>
            <p class="mt-3 text-sm leading-6 text-neutral-600">{{ service.longDescription }}</p>

            <div class="mt-6 grid gap-3">
              <div class="flex items-center justify-between text-sm">
                <span class="text-neutral-500">Harga mulai</span>
                <span class="font-medium text-neutral-900">
                  Rp {{ service.priceFrom.toLocaleString('id-ID') }}
                </span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="text-neutral-500">Rating</span>
                <span class="font-medium text-neutral-900">★ {{ service.rating }}</span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="text-neutral-500">Durasi</span>
                <span class="font-medium text-neutral-900">{{ service.duration }}</span>
              </div>
            </div>

            <div class="mt-6 space-y-2">
              <div
                v-for="feature in service.features"
                :key="feature"
                class="flex items-center gap-3 text-sm text-neutral-700"
              >
                <UIcon name="i-lucide-check-circle-2" class="h-4 w-4 text-[var(--tt-success)]" />
                <span>{{ feature }}</span>
              </div>
            </div>

            <NuxtLink
              :to="`/services/${service.slug}`"
              class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--tt-brand)]"
            >
              <span>Lihat detail</span>
              <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>