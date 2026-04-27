<script setup lang="ts">
useSeoMeta({
  title: 'Detail Layanan - Tidy Tidys',
  description: 'Pengalaman detail layanan premium dengan struktur informasi yang lebih lengkap.'
})

const route = useRoute()
const { data: services } = await useFetch('/api/services')

const service = computed(() =>
  services.value?.find((item) => item.slug === route.params.slug)
)

const serviceImages: Record<string, string> = {
  'home-cleaning': '/images/services/home-cleaning.jpg',
  'laundry-pickup': '/images/services/laundry-pickup.jpg',
  'deep-cleaning': '/images/services/deep-cleaning.jpg'
}

const detailMap: Record<string, {
  tags: string[]
  includes: string[]
  process: string[]
  overview: string
}> = {
  'home-cleaning': {
    tags: ['Rutin', 'Rumahan', 'Pengerjaan cepat'],
    overview: 'Layanan pembersihan rumah rutin yang andal untuk rumah modern yang menginginkan konsistensi, kecepatan, dan hasil yang terlihat rapi.',
    includes: ['Membersihkan debu permukaan', 'Menyedot debu lantai', 'Membersihkan kamar mandi', 'Merapikan dapur', 'Mengumpulkan sampah'],
    process: ['Pilih jadwal yang Anda inginkan', 'Konfirmasi alamat dan catatan akses', 'Spesialis yang ditugaskan tiba', 'Layanan selesai dan ulasan']
  },
  'laundry-pickup': {
    tags: ['Jemput', 'Praktis', 'Ringan'],
    overview: 'Alur jemput dan antar kembali yang sederhana untuk laundry harian, dibuat terasa premium dan teratur.',
    includes: ['Penjemputan terjadwal', 'Penyortiran pakaian', 'Proses pembersihan', 'Pengemasan rapi', 'Serah terima kembali'],
    process: ['Pilih jadwal penjemputan', 'Konfirmasi alamat', 'Laundry dijemput', 'Pembersihan dan pengemasan', 'Pengantaran kembali']
  },
  'deep-cleaning': {
    tags: ['Premium', 'Detail', 'Layanan menyeluruh'],
    overview: 'Pengalaman pembersihan yang lebih menyeluruh untuk pindahan, setelah acara, atau rumah yang membutuhkan penyegaran total.',
    includes: ['Pembersihan mendalam per ruangan', 'Penanganan noda tertentu', 'Detail kamar mandi', 'Pembersihan mendalam dapur', 'Finishing akhir'],
    process: ['Pilih jadwal deep cleaning', 'Tambahkan instruksi', 'Tim spesialis ditugaskan', 'Layanan dilakukan', 'Pengecekan akhir dan ulasan']
  }
}

const detail = computed(() => {
  if (!service.value) return null
  return detailMap[service.value.slug]
})

const carouselImages = computed(() => {
  if (!service.value) return []

  const image = serviceImages[service.value.slug]

  return image ? [image, image, image] : []
})

const faqMap: Record<string, { label: string; icon: string; content: string }[]> = {
  'home-cleaning': [
    {
      label: 'Berapa lama layanan biasanya berlangsung?',
      icon: 'i-lucide-circle-help',
      content: 'Sebagian besar sesi berlangsung sekitar 2 hingga 4 jam, tergantung ukuran dan kondisi unit.'
    },
    {
      label: 'Apakah saya perlu menyediakan alat kebersihan?',
      icon: 'i-lucide-circle-help',
      content: 'Untuk saat ini, alur demo mengasumsikan spesialis datang dengan perlengkapan yang dibutuhkan.'
    }
  ],
  'laundry-pickup': [
    {
      label: 'Seberapa cepat penjemputan diatur?',
      icon: 'i-lucide-circle-help',
      content: 'Waktu penjemputan bergantung pada slot yang Anda pilih dan cakupan area.'
    },
    {
      label: 'Bisakah saya menambahkan catatan khusus untuk pakaian?',
      icon: 'i-lucide-circle-help',
      content: 'Ya, catatan dapat ditambahkan pada tahap pemesanan.'
    }
  ],
  'deep-cleaning': [
    {
      label: 'Apakah ini cocok untuk pembersihan sebelum pindah masuk?',
      icon: 'i-lucide-circle-help',
      content: 'Ya, deep cleaning diposisikan sebagai opsi pembersihan menyeluruh untuk pindahan dan penyegaran besar.'
    },
    {
      label: 'Apakah harga berubah untuk ruangan yang lebih besar?',
      icon: 'i-lucide-circle-help',
      content: 'Harga awal yang ditampilkan adalah estimasi dasar; aturan backend nantinya dapat menyesuaikan detail harga.'
    }
  ]
}

const faqItems = computed(() => {
  if (!service.value) return []
  return faqMap[service.value.slug] || []
})

const breadcrumbItems = computed(() => [
  {
    label: 'Beranda',
    icon: 'i-lucide-house',
    to: '/'
  },
  {
    label: 'Layanan',
    icon: 'i-lucide-briefcase-business',
    to: '/services'
  },
  {
    label: service.value?.title || 'Detail'
  }
])

const tabItems = [
  {
    label: 'Ringkasan',
    icon: 'i-lucide-layout-panel-top',
    slot: 'overview'
  },
  {
    label: 'Termasuk',
    icon: 'i-lucide-check-check',
    slot: 'included'
  },
  {
    label: 'Proses',
    icon: 'i-lucide-list-ordered',
    slot: 'process'
  }
]
</script>

<template>
  <section class="section-space">
    <div class="container-shell max-w-6xl">
      <div v-if="service && detail" class="space-y-8">
        <UBreadcrumb :items="breadcrumbItems" />

        <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div class="space-y-6">
            <UCarousel
              v-slot="{ item }"
              arrows
              dots
              loop
              :items="carouselImages"
              :ui="{
                item: 'basis-full ps-0',
                container: 'ms-0',
                prev: 'sm:start-6',
                next: 'sm:end-6'
              }"
            >
              <div class="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white">
                <NuxtImg
                  :src="item"
                  :alt="service.title"
                  width="1600"
                  height="1000"
                  class="h-[340px] w-full object-cover"
                />
              </div>
            </UCarousel>

            <div>
              <div class="mb-4 flex flex-wrap gap-2">
                <UBadge
                  v-for="tag in detail.tags"
                  :key="tag"
                  color="primary"
                  variant="subtle"
                  class="rounded-full"
                >
                  {{ tag }}
                </UBadge>
              </div>

              <h1 class="section-title">{{ service.title }}</h1>
              <p class="body-muted mt-5 max-w-3xl">
                {{ detail.overview }}
              </p>
            </div>

            <UCard class="rounded-3xl">
              <UTabs :items="tabItems" class="w-full">
                <template #overview>
                  <div class="space-y-4 pt-2">
                    <p class="text-sm leading-7 text-neutral-600">
                      {{ detail.overview }}
                    </p>

                    <div class="grid gap-4 sm:grid-cols-3">
                      <div class="rounded-2xl border border-neutral-200 px-4 py-4">
                        <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Harga mulai</p>
                        <p class="mt-2 text-lg font-semibold text-neutral-900">
                          Rp {{ service.priceFrom.toLocaleString('id-ID') }}
                        </p>
                      </div>
                      <div class="rounded-2xl border border-neutral-200 px-4 py-4">
                        <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Rating</p>
                        <p class="mt-2 text-lg font-semibold text-neutral-900">
                          ★ {{ service.rating }}
                        </p>
                      </div>
                      <div class="rounded-2xl border border-neutral-200 px-4 py-4">
                        <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Ketersediaan</p>
                        <p class="mt-2 text-lg font-semibold text-neutral-900">
                          Setiap hari
                        </p>
                      </div>
                    </div>
                  </div>
                </template>

                <template #included>
                  <div class="grid gap-3 pt-2">
                    <div
                      v-for="item in detail.includes"
                      :key="item"
                      class="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-3"
                    >
                      <UIcon name="i-lucide-check-circle-2" class="h-4 w-4 text-[var(--tt-success)]" />
                      <span class="text-sm font-medium text-neutral-900">{{ item }}</span>
                    </div>
                  </div>
                </template>

                <template #process>
                  <div class="grid gap-3 pt-2">
                    <div
                      v-for="(step, index) in detail.process"
                      :key="step"
                      class="flex items-start gap-4 rounded-2xl border border-neutral-200 px-4 py-4"
                    >
                      <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--tt-brand-soft)] text-sm font-semibold text-[var(--tt-brand)]">
                        {{ index + 1 }}
                      </div>
                      <p class="text-sm font-medium leading-6 text-neutral-900">
                        {{ step }}
                      </p>
                    </div>
                  </div>
                </template>
              </UTabs>
            </UCard>

            <UCard class="rounded-3xl">
              <template #header>
                <p class="text-lg font-semibold text-neutral-900">Pertanyaan yang sering diajukan</p>
              </template>

              <UAccordion :items="faqItems">
                <template #body="{ item }">
                  <p class="text-sm leading-7 text-neutral-600">
                    {{ item.content }}
                  </p>
                </template>
              </UAccordion>
            </UCard>
          </div>

          <div class="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <UCard class="rounded-3xl">
              <template #header>
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p class="text-lg font-semibold text-neutral-900">Pesan layanan ini</p>
                    <p class="mt-2 text-sm leading-6 text-neutral-600">
                      Panel pemesanan yang lebih rapi dengan tampilan yang lebih meyakinkan.
                    </p>
                  </div>

                  <div class="rounded-full bg-[var(--tt-success-soft)] px-3 py-1 text-xs font-medium text-[var(--tt-success)]">
                    Tersedia
                  </div>
                </div>
              </template>

              <div class="space-y-4">
                <div class="rounded-2xl border border-neutral-200 px-4 py-3">
                  <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Harga mulai</p>
                  <p class="mt-1 text-lg font-semibold text-neutral-900">
                    Rp {{ service.priceFrom.toLocaleString('id-ID') }}
                  </p>
                </div>

                <div class="rounded-2xl border border-neutral-200 px-4 py-3">
                  <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Estimasi kunjungan</p>
                  <p class="mt-1 text-sm font-medium text-neutral-900">2–4 jam</p>
                </div>

                <div class="rounded-2xl border border-neutral-200 px-4 py-3">
                  <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Area layanan</p>
                  <p class="mt-1 text-sm font-medium text-neutral-900">Cakupan kota tersedia</p>
                </div>

                <NuxtLink
                  to="/bookings/new"
                  class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--tt-brand)] px-4 py-3 text-sm font-medium text-white"
                >
                  <UIcon name="i-lucide-calendar-plus-2" class="h-4 w-4" />
                  <span>Lanjutkan pemesanan</span>
                </NuxtLink>
              </div>
            </UCard>

            <UCard class="rounded-3xl">
              <template #header>
                <p class="text-lg font-semibold text-neutral-900">Spesialis yang ditugaskan</p>
              </template>

              <div class="space-y-4">
                <div class="flex items-center gap-3 rounded-2xl border border-neutral-200 p-3">
                  <UAvatar src="/images/avatars/demo-user.jpg" alt="Rachel Tan" size="lg" />
                  <div>
                    <p class="text-sm font-semibold text-neutral-900">Rachel Tan</p>
                    <p class="text-xs text-neutral-500">Spesialis utama</p>
                  </div>
                </div>

                <div class="flex items-center gap-3 rounded-2xl border border-neutral-200 p-3">
                  <UAvatar src="/images/avatars/demo-user.jpg" alt="Noah Lee" size="lg" />
                  <div>
                    <p class="text-sm font-semibold text-neutral-900">Noah Lee</p>
                    <p class="text-xs text-neutral-500">Koordinator layanan</p>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard class="rounded-3xl">
              <template #header>
                <div>
                  <p class="text-lg font-semibold text-neutral-900">Pertanyaan yang sering diajukan</p>
                  <p class="mt-2 text-sm leading-6 text-neutral-600">
                    Blok FAQ kecil membuat halaman detail terasa lebih lengkap dan lebih terpercaya.
                  </p>
                </div>
              </template>

              <UAccordion :items="faqItems" />
              <div class="space-y-5">
                <div>
                  <p class="eyebrow">Layanan terkait</p>
                  <h2 class="section-title mt-4">Jelajahi opsi lainnya</h2>
                </div>

                <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  <ServiceCard
                    v-for="item in services?.filter(s => s.slug !== service.slug).slice(0, 3)"
                    :key="item.id"
                    :service="item"
                  />
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </div>

      <EmptyState
        v-else
        title="Layanan tidak ditemukan"
        description="Halaman layanan ini belum memiliki data contoh yang sesuai."
      />
    </div>
  </section>
</template>