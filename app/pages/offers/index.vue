<script setup lang="ts">
useSeoMeta({
  title: 'Penawaran - Tidy Tidys',
  description: 'Promosi terbaru dan kampanye layanan unggulan.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell">
      <PageHeading
        eyebrow="Penawaran"
        title="Promosi dan kampanye unggulan"
        description="Halaman penawaran khusus menambah kedalaman komersial dan energi yang lebih menarik."
      />

      <div class="mt-10">
        <OfferCards />
      </div>
    </div>
  </section>
</template>