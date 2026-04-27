<script setup lang="ts">
const toast = useToast()

const form = reactive({
  company: '',
  contact: '',
  email: '',
  serviceType: '',
  frequency: '',
  scope: ''
})

function handleSubmit() {
  toast.add({
    title: 'Permintaan bisnis terkirim',
    description: 'Permintaan Anda telah disimpan dalam mode demo.',
    icon: 'i-lucide-briefcase-business',
    color: 'success'
  })
}

useSeoMeta({
  title: 'Permintaan Bisnis - Tidy Tidys',
  description: 'Ajukan permintaan layanan dengan cakupan lebih besar.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell max-w-5xl">
      <PageHeading
        eyebrow="Bisnis"
        title="Ajukan layanan bisnis"
        description="Halaman B2B khusus memperluas platform di luar alur konsumen saja."
      />

      <div class="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <UCard class="rounded-3xl">
          <div class="grid gap-5">
            <div>
              <label class="mb-2 block text-sm font-medium text-neutral-700">Nama perusahaan</label>
              <UInput v-model="form.company" />
            </div>

            <div class="grid gap-5 md:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-medium text-neutral-700">Kontak person</label>
                <UInput v-model="form.contact" />
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-neutral-700">Email</label>
                <UInput v-model="form.email" type="email" />
              </div>
            </div>

            <div class="grid gap-5 md:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-medium text-neutral-700">Jenis layanan</label>
                <USelect
                  v-model="form.serviceType"
                  :items="[
                    { label: 'Perawatan kantor', value: 'office-upkeep' },
                    { label: 'Pembersihan pasca acara', value: 'post-event-cleanup' },
                    { label: 'Kebutuhan khusus', value: 'custom' }
                  ]"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-neutral-700">Frekuensi</label>
                <USelect
                  v-model="form.frequency"
                  :items="[
                    { label: 'Sekali saja', value: 'one-time' },
                    { label: 'Mingguan', value: 'weekly' },
                    { label: 'Bulanan', value: 'monthly' }
                  ]"
                />
              </div>
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-neutral-700">Detail kebutuhan</label>
              <UTextarea
                v-model="form.scope"
                autoresize
                :maxrows="6"
                placeholder="Jelaskan ruang, kebutuhan waktu, cakupan layanan, dan catatan operasional lainnya."
              />
            </div>

            <UButton color="primary" size="lg" block @click="handleSubmit">
              Kirim permintaan
            </UButton>
          </div>
        </UCard>

        <UCard class="rounded-3xl">
          <template #header>
            <p class="text-lg font-semibold text-neutral-900">Mengapa halaman ini penting</p>
          </template>

          <div class="space-y-4">
            <div class="rounded-2xl border border-neutral-200 px-4 py-4">
              <p class="text-sm font-semibold text-neutral-900">Cakupan produk lebih luas</p>
              <p class="mt-2 text-sm leading-6 text-neutral-600">
                Platform kini mendukung kebutuhan konsumen dan bisnis.
              </p>
            </div>

            <div class="rounded-2xl border border-neutral-200 px-4 py-4">
              <p class="text-sm font-semibold text-neutral-900">Arsitektur lebih meyakinkan</p>
              <p class="mt-2 text-sm leading-6 text-neutral-600">
                Halaman permintaan khusus membuat aplikasi terasa lebih nyata, bukan sekadar demo.
              </p>
            </div>

            <div class="rounded-2xl border border-neutral-200 px-4 py-4">
              <p class="text-sm font-semibold text-neutral-900">Siap untuk backend ke depan</p>
              <p class="mt-2 text-sm leading-6 text-neutral-600">
                Nantinya dapat terhubung ke alur penawaran harga atau sistem CRM.
              </p>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>