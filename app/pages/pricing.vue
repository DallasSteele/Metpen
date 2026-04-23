<script setup lang="ts">
useSeoMeta({
  title: 'Pricing - Tidy Tidys',
  description: 'Package and service pricing overview.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell">
      <PageHeading
        eyebrow="Pricing"
        title="Packages and starting prices"
        description="A standalone pricing page adds depth and commercial realism."
      />

      <div class="mt-10">
        <BundleCards />
      </div>
    </div>
  </section>
</template>