<script setup lang="ts">
const toast = useToast()

const form = reactive({
  name: '',
  email: '',
  topic: '',
  message: ''
})

function handleSubmit() {
  toast.add({
    title: 'Pesan terkirim',
    description: 'Permintaan Anda telah disimpan dalam mode demo.',
    icon: 'i-lucide-send',
    color: 'success'
  })
}

useSeoMeta({
  title: 'Kontak - Tidy Tidys',
  description: 'Halaman kontak dan dukungan.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell max-w-5xl">
      <PageHeading
        eyebrow="Kontak"
        title="Hubungi kami"
        description="Halaman kontak khusus membuat aplikasi terasa lebih lengkap dan nyata."
      />

      <div class="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <UCard class="rounded-3xl">
          <div class="grid gap-5">
            <div>
              <label class="mb-2 block text-sm font-medium text-neutral-700">Nama</label>
              <UInput v-model="form.name" />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-neutral-700">Email</label>
              <UInput v-model="form.email" type="email" />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-neutral-700">Topik</label>
              <USelect
                v-model="form.topic"
                :items="[
                  { label: 'Pertanyaan umum', value: 'general' },
                  { label: 'Pertanyaan layanan', value: 'service' },
                  { label: 'Keanggotaan', value: 'membership' },
                  { label: 'Permintaan bisnis', value: 'business' }
                ]"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-neutral-700">Pesan</label>
              <UTextarea v-model="form.message" autoresize :maxrows="6" />
            </div>

            <UButton color="primary" size="lg" block @click="handleSubmit">
              Kirim pesan
            </UButton>
          </div>
        </UCard>

        <div class="space-y-6">
          <div class="soft-card p-6 tint-pink">
            <p class="text-lg font-semibold text-neutral-900">Jam layanan</p>
            <p class="mt-3 text-sm leading-6 text-neutral-700">
              Senin hingga Sabtu · 09.00 – 18.00
            </p>
          </div>

          <div class="soft-card p-6 tint-blue">
            <p class="text-lg font-semibold text-neutral-900">Email</p>
            <p class="mt-3 text-sm leading-6 text-neutral-700">
              hello@tidytidys.com
            </p>
          </div>

          <div class="soft-card p-6 tint-mint">
            <p class="text-lg font-semibold text-neutral-900">Telepon</p>
            <p class="mt-3 text-sm leading-6 text-neutral-700">
              +62 812 0000 1111
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>