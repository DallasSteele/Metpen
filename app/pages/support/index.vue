<script setup lang="ts">
useSeoMeta({
  title: 'Dukungan - Tidy Tidys',
  description: 'Bantuan, dukungan, dan asistensi pemesanan.'
})

const faqItems = [
  {
    label: 'Bagaimana cara membuat pemesanan?',
    icon: 'i-lucide-circle-help',
    content: 'Buka Pemesanan Baru, pilih layanan, tentukan tanggal dan waktu, lalu konfirmasi permintaan.'
  },
  {
    label: 'Bisakah saya mengubah pemesanan nanti?',
    icon: 'i-lucide-circle-help',
    content: 'Dalam versi contoh ini, tahap berikutnya akan menghubungkan halaman detail pemesanan dan fitur edit.'
  },
  {
    label: 'Apakah harga yang ditampilkan sudah final?',
    icon: 'i-lucide-circle-help',
    content: 'Harga yang ditampilkan adalah estimasi awal untuk prototipe frontend saat ini.'
  }
]
</script>

<template>
  <section class="section-space">
    <div class="container-shell max-w-4xl">
      <PageHeading
        eyebrow="Dukungan"
        title="Bantuan dan asistensi"
        description="Halaman dukungan membuat aplikasi terasa lebih lengkap dan siap digunakan sebagai layanan."
      />

      <UCard class="mt-10 rounded-3xl">
        <template #header>
          <p class="text-lg font-semibold text-white">Pertanyaan yang sering diajukan</p>
        </template>

        <UAccordion :items="faqItems" class="text-white" />
      </UCard>
    </div>
  </section>
</template>