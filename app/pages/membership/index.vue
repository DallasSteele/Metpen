<script setup lang="ts">
useSeoMeta({
  title: 'Keanggotaan - Tidy Tidys',
  description: 'Paket dan manfaat keanggotaan.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell">
      <PageHeading
        eyebrow="Membership"
        title="Pilih gaya keanggotaan Anda"
        description="Lapisan produk yang lebih lengkap untuk penggunaan berulang dan loyalitas premium."
      />

      <div class="mt-10">
        <MembershipCards />
      </div>
    </div>
  </section>
</template>