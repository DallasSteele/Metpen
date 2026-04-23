<script setup lang="ts">
useSeoMeta({
  title: 'About - Tidy Tidys',
  description: 'About the brand and service philosophy.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell max-w-5xl">
      <PageHeading
        eyebrow="About"
        title="A cleaner service experience by design"
        description="This page makes the product feel more brand-led and complete."
      />

      <div class="mt-10 grid gap-6 lg:grid-cols-2">
        <UCard class="rounded-3xl">
          <template #header>
            <p class="text-lg font-semibold text-neutral-900">Our direction</p>
          </template>
          <p class="text-sm leading-7 text-neutral-600">
            Tidy Tidys 2.0 was rebuilt to feel calmer, clearer, and more premium — reducing clutter while increasing confidence.
          </p>
        </UCard>

        <UCard class="rounded-3xl">
          <template #header>
            <p class="text-lg font-semibold text-neutral-900">What matters</p>
          </template>
          <p class="text-sm leading-7 text-neutral-600">
            Better service discovery, stronger detail pages, clearer booking flow, and a more trustworthy overall interface.
          </p>
        </UCard>
      </div>
    </div>
  </section>
</template>