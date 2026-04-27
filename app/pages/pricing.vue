<script setup lang="ts">
useSeoMeta({
  title: 'Harga - Tidy Tidys',
  description: 'Ikhtisar paket dan harga layanan.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell">
      <PageHeading
        eyebrow="Harga"
        title="Paket dan harga mulai"
        description="Halaman harga terpisah menambah kedalaman dan kesan komersial yang lebih nyata."
      />

      <div class="mt-10">
        <BundleCards />
      </div>
    </div>
  </section>
</template>